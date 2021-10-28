import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Mp3PlayerComponent } from './mp3-player/mp3-player.component';

@NgModule({
  declarations: [AppComponent, Mp3PlayerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxAudioPlayerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
