import { AbstractControl } from '@angular/forms';
import { FormElement } from '../interfaces/form-element';
import { ElementValidation } from '../interfaces/element-validation';

export class FormUtils {

  /**
   * Element Type Constants
   */
  public static TEXT = 'text';

  /**
   * Option Type Constants
   */
  public static OPTION = 'option';
  public static GROUP = 'group';
  public static OBJECT = 'object';

  /**
   * Push elements to array, with undefined
   * array protection.
   */
  static pushCollection(initialCollection: any[], newItems: any[]) {
    if (!initialCollection) {
      initialCollection = [];
    }
    initialCollection.push(newItems);
    return initialCollection;
  }

  /**
   * Convert a string to inputId (camelCase)
   */
  static toInputId(string: string) {
    const words = string.split(' ');
    const mutated: string[] = words.map(function(word, index) {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return mutated.join('');
  }

  /**
   * Pass a form control and and form element definition to get the
   * error messages for the specific errors the form control has
   * failed validation on.
   * Returns array of error messages.
   */
  static getErrorMessages(control: AbstractControl, element: FormElement) {
    const errors: {} = control.errors;
    const validation: ElementValidation[] = element.get('validation');
    const messages: string[] = [];
    Object.keys(errors).forEach(key => {
      const validator: ElementValidation = validation.find((validationItem: ElementValidation) => {
        return validationItem.type === key;
      });
      if (validator) {
        messages.push(validator.failedMessage);
      }
    });
    return messages;
  }
}
