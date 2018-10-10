import { FormGroup } from '@angular/forms';
import { FormElement } from './form-element';

export interface ElementConfig {
  formGroup?: FormGroup;
  formElement?: FormElement;
  inputId?: string;
}
