import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SimpleFormsModule } from '../../../simple-forms-2/src/lib/simple-forms.module';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    HttpClientModule,
    SimpleFormsModule,
    BrowserModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class NunicornUtilsModule { }
