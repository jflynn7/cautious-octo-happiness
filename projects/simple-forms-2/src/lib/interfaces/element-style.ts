export interface ElementStyle {
  wrapper?: string;
  label?: string;
  input?: string;
}

export const wrapper = (style: ElementStyle, addStyle: string) => { style['wrapper'] = addStyle; return style; };
export const label = (style: ElementStyle, addStyle: string) => { style['label'] = addStyle; return style; };
export const input = (style: ElementStyle, addStyle: string) => { style['input'] = addStyle; return style; };



