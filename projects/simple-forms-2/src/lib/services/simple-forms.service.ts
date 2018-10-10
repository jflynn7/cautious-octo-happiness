import { Injectable } from '@angular/core';
import { ElementValidation } from '../interfaces/element-validation';
import { FormElement } from '../interfaces/form-element';
import { FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { FormConfig } from '../interfaces/form-config';
import { ElementConfig } from '../interfaces/element-config';

// @dynamic
@Injectable({
  providedIn: 'root'
})
export class SimpleFormsService {

  constructor(private _fb: FormBuilder) { }

  toFormGroup(formElements: FormElement[]): FormGroup {
    const formGroupWrapper: {} = {};
    formElements.forEach((element: FormElement) => {
      formGroupWrapper[element.get('inputId')] = ['', this.getValidators(element.get('validation'))];
    });
    return this._fb.group(formGroupWrapper);
  }

  getValidators(validation: ElementValidation[]): ValidatorFn[] {
    if (validation) {
      return validation.map((elementValidation: ElementValidation) => {
        return elementValidation.validator;
      });
    }
    return [];
  }

  toFormConfig(elements: FormElement[]): FormConfig {
    const formGroup = this.toFormGroup(elements);
    const elementConfig: ElementConfig[] = elements.map((element: FormElement) => {
      return <ElementConfig> { inputId: element.inputId, formElement: element, formGroup: formGroup };
    });
    return new FormConfig(formGroup, elementConfig);
  }


}
