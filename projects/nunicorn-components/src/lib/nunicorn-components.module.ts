import { NgModule } from '@angular/core';
import { NunicornComponentsComponent } from './nunicorn-components.component';
import {
  FormSectionStepperComponent,
  LoadingSpinnerComponent,
  OutlineButtonComponent,
  ProgressBarComponent,
  SolidButtonComponent, StepIndicatorComponent
} from './components';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleFormsModule } from '../../../simple-forms-2/src/lib/simple-forms.module';
import { AlertComponent } from './components/alert/alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './components/modal/modal.component';
import { ModalActionsComponent } from './components/modal/modal-actions/modal-actions.component';

@NgModule({
  imports: [
    BrowserModule,
    SimpleFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    NunicornComponentsComponent,
    OutlineButtonComponent,
    SolidButtonComponent,
    FormSectionStepperComponent,
    LoadingSpinnerComponent,
    ProgressBarComponent,
    StepIndicatorComponent,
    AlertComponent,
    ModalComponent,
    ModalActionsComponent
  ],
  exports: [
    NunicornComponentsComponent,
    OutlineButtonComponent,
    SolidButtonComponent,
    FormSectionStepperComponent,
    LoadingSpinnerComponent,
    ProgressBarComponent,
    StepIndicatorComponent,
    AlertComponent,
    ModalComponent,
    ModalActionsComponent
  ]
})
export class NunicornComponentsModule { }
