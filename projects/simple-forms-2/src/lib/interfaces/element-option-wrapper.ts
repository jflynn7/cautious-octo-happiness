import { ElementOption, ElementOptionGroup } from './element-option';
import { FormUtils } from '../utils/form-utils';

export class ElementOptionWrapper {
  type: ElementOptionType;
  options: ElementOption[] | ElementOptionGroup[] | {}[];

  constructor(data: { type: ElementOptionType, options: ElementOption[] | ElementOptionGroup[] | {}[]}) {
    this.type = data.type;
    this.options = data.options;
  }
}

export const options = (optionItems: ElementOption[]) => {
  return new ElementOptionWrapper(
    {
      type: ElementOptionType.options(),
      options: optionItems
    }
  );
};

export const optionGroups = (optionItems: ElementOptionGroup[]) => {
  return new ElementOptionWrapper(
    {
      type: ElementOptionType.group(),
      options: optionItems
    }
  );
};

export const objects = (optionItems: {}[]) => {
  return new ElementOptionWrapper(
    {
      type: ElementOptionType.object(),
      options: optionItems
    }
  );
};

/**
 * Enum style ElementOptionType util
 */
// @dynamic
export class ElementOptionType {
  static options = () => { return FormUtils.OPTION; };
  static group = () => { return FormUtils.GROUP; };
  static object = () => { return FormUtils.OBJECT; };
}
