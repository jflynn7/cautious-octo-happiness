import { FormElement } from './form-element';

export interface ElementAccessibility {
  ariaLabel?: string;
}

export const ariaLabel = (el: FormElement) => {
  return hasAria(el, 'ariaLabel') ? el.accessibility['ariaLabel'] : el.label;
};

export const ariaLabelledBy = (el: FormElement) => {
  return hasAria(el, 'ariaLabelledBy') ? el.accessibility['ariaLabelledBy'] : getLabelId(el);
}

export const hasAria = (el: FormElement, aXeKey: string) => {
  return el.accessibility && el.accessibility[aXeKey] !== undefined;
}

export const getLabelId = (el: FormElement) => {
  return `${el.inputId}_label`;
}
