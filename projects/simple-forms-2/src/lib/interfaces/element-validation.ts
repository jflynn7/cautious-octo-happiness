import { ValidatorFn, Validators } from '@angular/forms';

export interface ElementValidation {
  type?: string;
  validator?: ValidatorFn;
  failedMessage?: string;
}

export const required = (message?: string) => {
  message = message || 'This is a required field';
  return <ElementValidation> {type: 'required', validator: Validators.required, failedMessage: message };
}

export const requiredTrue = (message?: string) => {
  message = message || 'This is a required field';
  return <ElementValidation> {type: 'requiredTrue', validator: Validators.requiredTrue, failedMessage: message };
}

export const minLength = (length: number, message?: string) => {
  message = message || `You must enter ${length} or more characters`;
  return <ElementValidation> {type: 'minLength', validator: Validators.minLength(length), failedMessage: message};
}

export const maxLength = (length: number, message?: string) => {
  message = message || `You must not exceed ${length} characters`;
  return <ElementValidation> {type: 'maxLength', validator: Validators.maxLength(length), failedMessage: message};
}

export const minValue = (value: number, message?: string) => {
  message = message || `Value must be at least ${value}`;
  return <ElementValidation> {type: 'minValue', validator: Validators.min(length), failedMessage: message};
}

export const maxValue = (value: number, message?: string) => {
  message = message || `Value must be at most ${value}`;
  return <ElementValidation> {type: 'maxValue', validator: Validators.max(length), failedMessage: message};
}

export const pattern = (patternx: string, message?: string) => {
  message = message || `Please enter a valid value`;
  return <ElementValidation> {type: 'pattern', validator: Validators.pattern(patternx), failedMessage: message};
}

export const email = (message: string) => {
  message = message || `You must enter an email address`;
  return <ElementValidation> {type: 'email', validator: Validators.email, failedMessage: message};
}
