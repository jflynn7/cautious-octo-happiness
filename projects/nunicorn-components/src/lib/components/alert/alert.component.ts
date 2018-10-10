import { Component, Input, OnInit } from '@angular/core';
import { ZoomInOut } from '../../animations';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [ZoomInOut]
})
export class AlertComponent implements OnInit {

  @Input() type: string;
  @Input() title: string;
  @Input() text: string;
  @Input() visible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleAlert() {
    this.visible = !this.visible;
  }

}
