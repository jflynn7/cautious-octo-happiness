import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-solid-button',
  templateUrl: './solid-button.component.html',
  styleUrls: ['./solid-button.component.scss']
})
export class SolidButtonComponent implements OnInit {

  @Input() clazz: string;
  @Input() label: string;
  @Input() shadowed: boolean = false;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getClass() {
    switch (this.clazz) {
      case 'primary': return 'btn-primary-action';
      case 'secondary': return 'btn-secondary-action';
      case 'success': return 'btn-success-action';
      case 'info': return 'btn-info-action';
      case 'warning': return 'btn-warning-action';
      case 'danger': return 'btn-danger-action';
    }
  }
}
