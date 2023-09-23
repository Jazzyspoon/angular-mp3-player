import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AudioPlayerModule } from './audio-player/audio-player.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Mp3PlayerComponent } from './mp3-player/mp3-player.component';

@NgModule({
  declarations: [AppComponent, Mp3PlayerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AudioPlayerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
