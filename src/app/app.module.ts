import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { AppComponent } from './app.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, YouTubePlayerModule ],
  declarations: [ AppComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
