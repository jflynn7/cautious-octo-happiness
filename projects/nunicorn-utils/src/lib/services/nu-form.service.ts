import { Injectable } from '@angular/core';
import { FormConfig } from '../../../../simple-forms-2/src/lib/interfaces/form-config';
import {
  checkboxGroup,
  currencyInput,
  dateInput,
  FormElement, multipleObjectSelect,
  numberInput, passwordInput, radioGroup, selectInput, singleObjectSelect, telInput,
  textInput
} from '../../../../simple-forms-2/src/lib/interfaces/form-element';
import { ElementOption } from '../../../../simple-forms-2/src/lib/interfaces/element-option';
import { ElementOptionWrapper } from '../../../../simple-forms-2/src/lib/interfaces/element-option-wrapper';
import { SimpleFormsService } from '../../../../simple-forms-2/src/lib/services/simple-forms.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormUtils } from '../../../../simple-forms-2/src/lib/utils/form-utils';
import { BehaviorSubject, Subject } from 'rxjs';
import { WPRESTService } from './wp-rest.service';

@Injectable({
  providedIn: 'root'
})
export class NuFormService {

  constructor(private builder: SimpleFormsService, private _fb: FormBuilder, private wpRestService: WPRESTService) { }


  getForm(formKey: string) {
    const subject$: BehaviorSubject<NuForm> = new BehaviorSubject<NuForm>(undefined);
    this.wpRestService.getForm(formKey).subscribe(result => {
      console.log('received from wp');
      subject$.next(this.createNuForm(formKey, result));
    });
    return subject$;
  }


  /**==========================================================
   * Create a NuForm from return NuWp definition
   * @param {{}} formDefinition
   * @returns {FormSectionDefinition[]}
   *==========================================================*/
  createNuForm(formKey: string, formDefinition: {}): NuForm {
    this.cacheForm(formKey, formDefinition);
    const definitions: FormSectionDefinition[] = [];
    Object.keys(formDefinition).forEach(key => {
      definitions.push(<FormSectionDefinition> {
        section_hidden: formDefinition[key].section_hidden,
        section_key: key,
        section_title: formDefinition[key].section_title,
        section_options: formDefinition[key].section_options
      });
    });
    return this.createFormFromSections(definitions);
  }

  /**===========================================================
   * Get form details from sections
   * @param {FormSectionDefinition[]} formDefinitions
   * @returns {FormSectionDefinition[]}
   *============================================================*/
  createFormFromSections(formDefinitions: FormSectionDefinition[]): NuForm {

    const masterFormGroup: {} = {};
    const masterConfig: {} = {};

    formDefinitions.forEach((definition: FormSectionDefinition) => {
      const elements: FormElement[] = this.createElements(definition);
      const formConfig: FormConfig = this.builder.toFormConfig(elements);
      masterConfig[definition.section_key] = formConfig;
      masterFormGroup[definition.section_key] = this.builder.toFormGroup(elements);
    });

    return this.applyFormSubscriptions(<NuForm> {
      masterFormGroup: this._fb.group(masterFormGroup),
      formConfig: masterConfig,
      sections: formDefinitions,
      activeSection: 0
    });
  }

  /**===========================================================
   * Create an array of FormElements from a section
   * @param {{section_title?: string; section_options?: {}}} section
   * @returns {FormElement[]}
   *===========================================================*/
  createElements(section: { section_title?: string, section_options?: {}}) {
    const elements: FormElement[] = [];
    Object.keys(section.section_options).forEach(key => {
      let element: FormElement = this.getElement(section.section_options[key]);
      section.section_options[key].hidden ? element = element.setHidden() : element = element;
      elements.push(element);
    });
    return elements;
  }

  /**===========================================================
   * Get the element by type, and apply element level config
   * @param {{type?: string; label?: string; options?: {}}} elementData
   * @returns {FormElement}
   *===========================================================*/
  getElement(elementData: {type?: string; label?: string; options?: { value: any, label: string}[]}) {
    switch (elementData.type) {
      // Standard elements
      case 'text' : return textInput(elementData.label, elementData);
      case 'number' : return numberInput(elementData.label, elementData);
      case 'currency' : return currencyInput(elementData.label, elementData);
      case 'date' : return dateInput(elementData.label, elementData);
      case 'password': return passwordInput(elementData.label, elementData);
      case 'tel' : return telInput(elementData.label, elementData);

      // Elements with selectable options
      case 'checkbox' : return checkboxGroup(elementData.label, elementData).setOptions(this.parseOptions(elementData.options));
      case 'radio' : return radioGroup(elementData.label, elementData).setOptions(this.parseOptions(elementData.options));
      case 'select' : return selectInput(elementData.label, elementData).setOptions(this.parseOptions(elementData.options));

      // Object Selectors
      case 'array' : return multipleObjectSelect(elementData.label, elementData);
      case 'single_join' : return singleObjectSelect(elementData.label, elementData);
    }
  }

  /**===========================================================
   * Parse options return from NuWp form definition
   * @param { value: any, label: string}[] options
   * @returns {ElementOptionWrapper}
   *===========================================================*/
  parseOptions(options: { value: any, label: string}[]) {
    const optionValues: ElementOption[] = [];
    options.forEach(key => {
      optionValues.push(<ElementOption> {
        value: key.value,
        label: key.label
      });
    });
    return <ElementOptionWrapper> {
      type: 'option',
      options: optionValues
    };
  }

  /**===========================================================
   * Subscribe to all form sections, and update master formgroup
   * @param NuForm form
   * @returns void
   *===========================================================*/
  applyFormSubscriptions(form: NuForm) {
    form.sections.forEach((section: { section_key: string }) => {
      form.formConfig[section.section_key].formGroup.valueChanges.subscribe(value => {
        form.masterFormGroup.get(section.section_key).setValue(value);
      });
    });
    return form;
  }

  getElementFromSection(form: NuForm, section: string, inputId: string) {
    return <FormElement>form.formConfig[section].get(inputId).formElement;
  }

  setFormStyle(form: NuForm, style: string, className: string) {
    form.sections.forEach((section: FormSectionDefinition) => {
      if (!section.section_hidden) {
        const sectionKey = section.section_key;
        Object.keys(section.section_options).forEach(key => {
          const inputId = FormUtils.toInputId(section.section_options[key].label);
          if (inputId) {
            this.getElementFromSection(form, sectionKey, inputId).setStyle({
              [style]: className
            });
          }
        });
      }
    });
  }


  cacheForm(formName: string, form: NuForm) {
    localStorage.setItem(formName, JSON.stringify(form));
  }

  readFromCache(formKey) {
    return JSON.parse(localStorage.getItem(formKey));
  }

}

export interface FormSectionDefinition {
  section_hidden?: boolean;
  section_key?: string;
  section_title?: string;
  section_options?: {};
}

export interface NuForm {
  formKey?: string;
  masterFormGroup?: FormGroup;
  formConfig?: { section_key?: string, config?: FormConfig };
  sections?: FormSectionDefinition[];
  activeSection?: number;
}
