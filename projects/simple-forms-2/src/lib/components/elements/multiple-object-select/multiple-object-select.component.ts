import { Component, Input, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';
import { ElementConfig } from '../../../interfaces/element-config';

@Component({
  selector: 'sf2-multiple-object-select',
  templateUrl: './multiple-object-select.component.html',
  styleUrls: ['./multiple-object-select.component.scss']
})
export class MultipleObjectSelectComponent extends ElementBaseComponent implements OnInit {

  @Input() elementData: ElementConfig;

  constructor() {
    super();
  }

  ngOnInit() {
    this.mapData(this.elementData);
  }

}
