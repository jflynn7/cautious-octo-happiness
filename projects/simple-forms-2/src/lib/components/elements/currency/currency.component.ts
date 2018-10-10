import { Component, Input, OnInit } from '@angular/core';
import { ElementBaseComponent } from '../element-base/element-base.component';
import { ElementConfig } from '../../../interfaces/element-config';

@Component({
  selector: 'sf2-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent extends ElementBaseComponent implements OnInit {

  @Input() elementData: ElementConfig;
  @Input() currencySymbol: string = '£';

  constructor() {
    super();
  }

  ngOnInit() {
    this.mapData(this.elementData);
  }

}

