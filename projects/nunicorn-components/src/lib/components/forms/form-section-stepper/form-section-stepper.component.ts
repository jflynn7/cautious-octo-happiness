import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormSectionDefinition, NuForm } from '../../../../../../nunicorn-utils/src/lib/services';

@Component({
  selector: 'lib-form-section-stepper',
  templateUrl: './form-section-stepper.component.html',
  styleUrls: ['./form-section-stepper.component.scss']
})
export class FormSectionStepperComponent implements OnInit {

  @Input() form: NuForm;

  @Output() formComplete: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  getVisibleSections(definitions: FormSectionDefinition[]): FormSectionDefinition[] {
    return definitions ? definitions.filter((section: FormSectionDefinition) => { return !section.section_hidden; }) : [];
  }

  nextSection(index: number) {
    if (index < this.getVisibleSections(this.form.sections).length - 1) {
      this.form.activeSection++;
    } else {
      this.formComplete.emit(true);
    }
  }

  previousSection(index: number) {
    if (index > 0) {
      this.form.activeSection--;
    }
  }

  canGoBack(index: number) {
    return index > 0;
  }

  canGoForward(index: number) {
    return index < this.getVisibleSections(this.form.sections).length;
  }

}
