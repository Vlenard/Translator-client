import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TranslatorComponent } from './translator/translator.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContainerComponent } from './translator/container/container.component';
import { InputComponent } from './translator/container/input/input.component';
@NgModule({
  declarations: [
    AppComponent,
    TranslatorComponent,
    ReviewsComponent,
    ContainerComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
