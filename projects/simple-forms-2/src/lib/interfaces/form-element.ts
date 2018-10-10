import { ElementValidation } from './element-validation';
import { ElementAccessibility } from './element-accessibility';
import { ElementStyle } from './element-style';
import { ElementOptionWrapper } from './element-option-wrapper';
import { ElementOptionGroup } from './element-option';
import { FormUtils } from '../utils/form-utils';
import { element } from 'protractor';

// @dynamic
export class FormElement {

  public inputId: string;
  public type: string;
  public label: string;
  public helpText: string;

  public styles: ElementStyle;
  public validation: ElementValidation[];
  public accessibility: ElementAccessibility;
  public options: ElementOptionWrapper;
  public optionGroups: ElementOptionGroup[];

  public hidden: boolean = false;

  /**
   * Object selection
   */
  public objects: {}[];
  public objectDisplayKey: string;
  public objectJoinKey: string;

  get = (propertyKey: string ) => { return this[propertyKey]; };

  /**
   * Add ElementValidation to FormElement to be converted to
   * validators used in Angular validation
   */
  validate = (validators: ElementValidation[]) => { this.validation = validators; return this; };

  /**
   * Set ElementOptions's for select/radio/etc
   */
  setOptions = (options: ElementOptionWrapper) => { this.validateType(); this.options = options; return this; };

  /**
   * Set accessibility options for this FormElement
   */
  setAccessibility = (accessibility: ElementAccessibility) => { this.accessibility = accessibility; return this; };

  /**
   * Set helptext for the element
   */
  setHelpText = (helpText: string) => { this.helpText = helpText; return this; };

  /**
   * Override default style settings
   */
  setStyle = (style: ElementStyle) => { this.styles = style; return this; };

  /**
   * Set hidden if should not show in generated form (but still be part of FormGroup
   */
  setHidden = () => { this.hidden = true; return this; };

  constructor(type: string, label: string, inputId?: string) {
    this.inputId = inputId || FormUtils.toInputId(label);
    this.type = type;
    this.label = label;
  }

  /**
   * Util methods to throw warnings where necessary
   */
  validateType = () => {
    if (!this.isOptionable()) {
      console.warn('[Simple-Forms]: You have added options to a non-optionable element type. 🤔');
    }
  }

  isOptionable = () => {
    const optionableTypes = ['select', 'radio', 'checkbox'];
    return optionableTypes.filter((type: string) => {
      return this.type === type;
    }).length > 0;
  }
}

export const textInput = (label: string, elementData?: {}) => {
  return applyConfiguration(new FormElement('text', label), elementData);
};

export const passwordInput = (label: string, elementData?: {}) => {
  return applyConfiguration(new FormElement('password', label), elementData);
};

export const numberInput = (label: string, elementData?: {}) => {
  return applyConfiguration(new FormElement('number', label), elementData);
};

export const currencyInput = (label: string, elementData?: {}) => {
  return applyConfiguration(new FormElement('currency', label), elementData);
};

export const radioGroup = (label: string, elementData?: {}) => {
  return applyConfiguration(new FormElement('radio', label), elementData);
};

export const selectInput = (label: string, elementData?: {}) => {
  return applyConfiguration(new FormElement('select', label), elementData);
};

export const dateInput = (label: string, elementData?: {}) => {
  return applyConfiguration(new FormElement('date', label), elementData);
};

export const telInput = (label: string, elementData?: {}) => {
  return applyConfiguration(new FormElement('tel', label), elementData);
};

export const checkboxGroup = (label: string, elementData?: {}) => {
  return applyConfiguration(new FormElement('checkbox', label), elementData);
};

export const rangeInput = (label: string, elementData?: {}) => {
  return applyConfiguration(new FormElement('range', label), elementData);
};

export const textareaInput = (label: string, elementData?: {}) => {
  return applyConfiguration(new FormElement('textarea', label), elementData);
};

export const toggleInput = (label: string, elementData?: {}) => {
  return applyConfiguration(new FormElement('toggle', label), elementData);
};

export const multipleObjectSelect = (label: string, elementData?: {}) => {
  return applyConfiguration(new FormElement('array', label), elementData);
};

export const singleObjectSelect = (label: string, elementData?: {}) => {
  return applyConfiguration(new FormElement('single_join', label), elementData);
};


export const applyConfiguration = (formElement: FormElement, elementData?: { hidden?: boolean}) => {
  if (elementData.hidden) {
    return formElement.setHidden();
  }
  return formElement;
};

