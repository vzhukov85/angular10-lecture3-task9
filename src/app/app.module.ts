import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule } from '@angular/forms';
import { CursorPositionDirective } from './cursor-position.directive';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    CursorPositionDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TextMaskModule,
    FormsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
