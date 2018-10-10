import { Component, Input, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';
import { ElementConfig } from '../../../interfaces/element-config';

@Component({
  selector: 'sf2-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent extends ElementBaseComponent implements OnInit {

  @Input() elementData: ElementConfig;

  constructor() {
    super();
  }

  ngOnInit() {
    this.mapData(this.elementData);
  }

}
