import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-step-indicator',
  templateUrl: './step-indicator.component.html',
  styleUrls: ['./step-indicator.component.scss']
})
export class StepIndicatorComponent implements OnInit {

  @Input() totalSteps: number;
  @Input() currentStep: number;

  constructor() { }

  ngOnInit() {
  }

  getStepsComplete() {
    return Array(this.currentStep).fill(0).map((x, i) => i );
  }

  getStepsRemaining() {
    return Array(this.totalSteps - this.currentStep).fill(0).map((x, i) => i );
  }

}
