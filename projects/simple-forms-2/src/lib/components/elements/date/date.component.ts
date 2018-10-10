import { Component, Input, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';
import { ElementConfig } from '../../../interfaces/element-config';

@Component({
  selector: 'sf2-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent extends ElementBaseComponent implements OnInit {

  @Input() elementData: ElementConfig;

  constructor() {
    super();
  }

  ngOnInit() {
    this.mapData(this.elementData);
  }

  getType() {
    return this.hasFocus() ? 'date' : this.hasValue() ? 'date' : 'text';
  }
}
