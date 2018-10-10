import { NgModule } from '@angular/core';
import { RadioGroupComponent } from './components/elements/radio-group/radio-group.component';
import { TextInputComponent } from './components/elements/text-input/text-input.component';
import { ElementBaseComponent } from './components/elements/element-base/element-base.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/elements/select/select.component';
import { NumberComponent } from './components/elements/number/number.component';
import { DateComponent } from './components/elements/date/date.component';
import { PasswordComponent } from './components/elements/password/password.component';
import { CurrencyComponent } from './components/elements/currency/currency.component';
import { FormElementComponent } from './components/form-element/form-element.component';
import { CheckBoxGroupComponent } from './components/elements/check-box-group/check-box-group.component';
import { SingleObjectSelectComponent } from './components/elements/single-object-select/single-object-select.component';
import { MultipleObjectSelectComponent } from './components/elements/multiple-object-select/multiple-object-select.component';
import { TelephoneComponent } from './components/elements/telephone/telephone.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    RadioGroupComponent,
    TextInputComponent,
    ElementBaseComponent,
    SelectComponent,
    NumberComponent,
    DateComponent,
    PasswordComponent,
    CurrencyComponent,
    FormElementComponent,
    CheckBoxGroupComponent,
    SingleObjectSelectComponent,
    MultipleObjectSelectComponent,
    TelephoneComponent
  ],
  exports: [
    RadioGroupComponent,
    TextInputComponent,
    ElementBaseComponent,
    SelectComponent,
    NumberComponent,
    DateComponent,
    PasswordComponent,
    CurrencyComponent,
    FormElementComponent,
    CheckBoxGroupComponent,
    SingleObjectSelectComponent,
    MultipleObjectSelectComponent,
    TelephoneComponent
  ]
})
export class SimpleFormsModule { }
