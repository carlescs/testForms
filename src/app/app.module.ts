import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MyTextBoxComponent } from './components/my-text-box/my-text-box.component';
import { TextboxPlusButtonComponent } from './components/textbox-plus-button/textbox-plus-button.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MyTextBoxComponent,
    TextboxPlusButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
