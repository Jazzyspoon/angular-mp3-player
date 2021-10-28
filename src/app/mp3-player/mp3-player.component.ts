import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
@Component({
  selector: 'app-mp3-player',
  templateUrl: './mp3-player.component.html',
  styleUrls: ['./mp3-player.component.css'],
})
export class Mp3PlayerComponent implements OnInit {
  constructor() {}
  onEnded() {}

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [8];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = true;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = false;
  msaapPlaylist: Track[] = [
    // Material Style Advance Audio Player Playlist

    {
      title: 'Elena Beats',
      link: 'http://jazzyspoon.com/tools/BEATS%20FOR%20ELENA%201.mp3',
      artist: 'Jazzyspoon',
      duration: '3:00',
    },
    {
      title: 'Washing machine beats',
      link: 'http://jazzyspoon.com/tools/wm_drone%20jazzyspoon.mp3',
      artist: 'Artist',
      duration: '3:00',
    },
    {
      title: 'Elena Beats',
      link: 'http://jazzyspoon.com/tools/BEATS%20FOR%20ELENA%201.mp3',
      artist: 'Jazzyspoon',
      duration: '3:00',
    },
    {
      title: 'Washing machine beats',
      link: 'http://jazzyspoon.com/tools/wm_drone%20jazzyspoon.mp3',
      artist: 'Artist',
      duration: '3:00',
    },
    {
      title: 'Elena Beats',
      link: 'http://jazzyspoon.com/tools/BEATS%20FOR%20ELENA%201.mp3',
      artist: 'Jazzyspoon',
      duration: '3:00',
    },
    {
      title: 'Washing machine beats',
      link: 'http://jazzyspoon.com/tools/wm_drone%20jazzyspoon.mp3',
      artist: 'Artist',
      duration: '3:00',
    },
    {
      title: 'Elena Beats',
      link: 'http://jazzyspoon.com/tools/BEATS%20FOR%20ELENA%201.mp3',
      artist: 'Jazzyspoon',
      duration: '3:00',
    },
    {
      title: 'Washing machine beats',
      link: 'http://jazzyspoon.com/tools/wm_drone%20jazzyspoon.mp3',
      artist: 'Artist',
      duration: '3:00',
    },
  ];

  ngOnInit(): void {}
}
