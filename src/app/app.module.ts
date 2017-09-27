import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { AppServices } from './equipment.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [ AppServices ],
  bootstrap: [AppComponent]
})
export class AppModule { }
