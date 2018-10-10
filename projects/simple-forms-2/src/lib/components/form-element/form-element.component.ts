import { Component, Input, OnInit } from '@angular/core';
import { FormElement } from '../../interfaces/form-element';
import { FormConfig } from '../../interfaces/form-config';
import { ElementBaseComponent } from '../elements/element-base/element-base.component';

@Component({
  selector: 'sf2-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss']
})
export class FormElementComponent extends ElementBaseComponent implements OnInit {

  @Input() elementData: FormConfig;

  constructor() {
    super();
  }

  ngOnInit() {
    this.mapData(this.elementData);
  }

}
