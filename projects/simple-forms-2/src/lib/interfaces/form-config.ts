import { FormGroup } from '@angular/forms';
import { ElementConfig } from './element-config';

export class FormConfig {
  formGroup: FormGroup;
  elements: ElementConfig[];


  constructor(formGroup: FormGroup, elements: ElementConfig[]) {
    this.formGroup = formGroup;
    this.elements = elements;
  }

  get = (inputId: string) => {
    const found = this.elements.find((element: ElementConfig) => {
      return element.inputId === inputId;
    });
    if (found) {
      return found;
    }

    return undefined;
  }

  getElement = (inputId: string) => {
    return this.get(inputId) ? this.get(inputId).formElement : undefined;
  }
}
