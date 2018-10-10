import { Component, Input, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';
import { ElementConfig } from '../../../interfaces/element-config';

@Component({
  selector: 'sf2-single-object-select',
  templateUrl: './single-object-select.component.html',
  styleUrls: ['./single-object-select.component.scss']
})
export class SingleObjectSelectComponent extends ElementBaseComponent implements OnInit {

  @Input() elementData: ElementConfig;

  constructor() {
    super();
  }

  ngOnInit() {
    this.mapData(this.elementData);
  }

}

