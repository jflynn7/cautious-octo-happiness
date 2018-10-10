export interface ElementOption {
  label?: string;
  value?: any;
}

export const option = (label: string, value?: any) => {
  value = value || label;
  return <ElementOption> { label: label, value: value };
}

export interface ElementOptionGroup {
  groupName?: string;
  options?: ElementOption[];
}
