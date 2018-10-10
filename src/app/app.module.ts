import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleFormsModule } from '../../projects/simple-forms-2/src/lib/simple-forms.module';
import { NunicornUtilsModule } from '../../projects/nunicorn-utils/src/lib/nunicorn-utils.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NunicornComponentsModule } from '../../projects/nunicorn-components/src/lib/nunicorn-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SimpleFormsModule,
    NunicornComponentsModule,
    NunicornUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
