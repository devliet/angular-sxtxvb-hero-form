import { NgModule } from '@angular/code';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModules({
  imports: [BrowserModule, CommonModule, FormsModule],
  declarations: [AppComponent, HeroFormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
