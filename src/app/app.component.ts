import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [
    `
      h2 {
        color: dodgerblue;
      }
      source {
        background-color: lightblue;
        color: darkblue;
      }
      audio {
        width: 100%;

        min-width: 300px;
        background-color: lightgreen;
        border-radius: 50px;
        border: 1px solid darkblue;
      }
      audio::-webkit-media-controls-panel {
        background-color: lightgreen;
        color: darkblue;
      }
      audio::-webkit-media-controls-mute-button {
        background-color: yellow;
        border-radius: 50px;
      }
      audio::-webkit-media-controls-play-button {
        background-color: green;
        border-radius: 50px;
      }
      audio::-webkit-media-controls-current-time-display {
        background-color: lightgreen;
        border-radius: 5px;
      }
      audio::-webkit-media-controls-time-remaining-display {
        background-color: lightgreen;
        border-radius: 5px;
      }
      audio::-webkit-media-controls-timeline-container {
        background-color: lightgreen;
      }
      audio::-webkit-media-controls-timeline {
        background-color: red;
        border-radius: 50px;
        border: 1px solid black;
        padding: 10px;
        margin: 15px;
      }
      audio::-webkit-media-controls-volume-slider {
        background-color: lightgreen;
      }
      audio::-webkit-media-controls-volume-slider-container {
        background-color: lightgreen;
      }
      audio::-webkit-media-controls-volume-slider-mute-button {
        background-color: yellow;
        border-radius: 50px;
      }
      audio::-webkit-media-controls-volume-slider-thumb {
        background-color: green;
      }
      audio::-webkit-media-controls-volume-slider-value {
        background-color: green;
        value: 0;
      }
      audio::-webkit-media-controls-volume-slider-value-high {
        value: 100;
      }
      audio::-webkit-media-controls-volume-slider-value-low {
        value: 0;
      }
      audio::-webkit-media-controls-volume-slider-value-muted {
      }
    `,
  ],
})
export class AppComponent {
  audioSrc = '../assets/THE SNOW - Jazzyspoon.mp3';
}
