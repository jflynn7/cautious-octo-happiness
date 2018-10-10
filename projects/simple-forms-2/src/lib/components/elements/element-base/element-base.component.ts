import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormElement } from '../../../interfaces/form-element';
import { FormGroup } from '@angular/forms';
import { ElementConfig } from '../../../interfaces/element-config';
import { ariaLabel, ariaLabelledBy, getLabelId } from '../../../interfaces/element-accessibility';

@Component({
  selector: 'sf2-element-base',
  templateUrl: './element-base.component.html',
  styleUrls: ['./element-base.component.scss', './../_base.styles.scss']
})
export class ElementBaseComponent implements OnInit {

  @ViewChild('input') input: ElementRef;
  @ViewChild('label') label: ElementRef;

  formGroup: FormGroup;
  el: FormElement;

  inputFocused: boolean;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Map the parent ElementConfig to local FormGroup
   * and el variables to keep templates a bit tidier
   */
  mapData(elementData: ElementConfig) {
    this.formGroup = elementData.formGroup;
    this.el = elementData.formElement;
  }

  /**
   * Get style class by style key
   */
  style(styleKey: string) {
    return this.el.styles ? this.el.styles[styleKey] : undefined;
  }

  /**
   * Get accessibility label by accessibility key
   */
  aXe(aXeKey: string) {
    switch (aXeKey) {
      case 'aria-label' : return ariaLabel(this.el);
      case 'aria-labelled-by' : return ariaLabelledBy(this.el);
      case 'label-id' : return getLabelId(this.el);
    }
  }

  getLabelClass() {
    return {
      'floated' : this.hasFocus() || this.hasValue(),
      'valid' : this.isValid(),
      'invalid' : this.isInvalid()
    };
  }

  getInputStyle() {
    return {
      'valid' : this.isValid(),
      'invalid' : this.isInvalid()
    };
  }


  /**
   * Toggle the fields focus state
   */
  toggleFocus() {
    this.inputFocused = !this.inputFocused;
  }

  /**
   * Has the element a value entered/selected
   */
  hasValue() {
    return !!this.formGroup.get(this.el.inputId).value;
  }

  /**
   * Does the element currently have focus
   */
  hasFocus() {
    return this.inputFocused;
  }

  /**
   * Is the current element both touched and valid
   */
  isValid() {
    return this.formGroup.get(this.el.inputId).touched && this.formGroup.get(this.el.inputId).valid;
  }

  /**
   * Is the current element both touched and invalid
   */
  isInvalid() {
    return this.formGroup.get(this.el.inputId).touched && !this.formGroup.get(this.el.inputId).valid;
  }

}
