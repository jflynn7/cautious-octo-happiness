import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { ZoomInOut, FadeInOut } from '../../animations';

@Component({
  selector: 'lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [ZoomInOut, FadeInOut]
})
export class ModalComponent implements OnInit {

  @Input() visible: boolean = false;
  @Input() title: string;

  backdropVisible: boolean = false;

  constructor(private renderer2: Renderer2) { }

  ngOnInit() {
    this.backdropVisible = this.visible;
    this.configBody();
  }

  toggleModal() {
    this.backdropVisible = !this.backdropVisible;
    setTimeout(() => {
      this.visible = !this.visible;
      this.configBody();
    });
  }

  configBody() {
    this.visible
      ? this.renderer2.addClass(document.body, 'modal-open')
      : this.renderer2.removeClass(document.body, 'modal-open');
  }



}
