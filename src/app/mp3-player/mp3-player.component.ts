import { Component, OnInit } from '@angular/core';
import { Track } from '../audio-player/model/track.model';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';

@Component({
  selector: 'app-mp3-player',
  templateUrl: './mp3-player.component.html',
  styleUrls: ['./mp3-player.component.css'],
  standalone: true,
  imports: [AudioPlayerComponent],
})
export class Mp3PlayerComponent implements OnInit {
  constructor() {}
  onEnded() {}

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [10];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = true;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = false;
  msaapPlaylist: Track[] = [
    // Material Style Advance Audio Player Playlist
    {
      title: 'Nothing New (Young Upstart Cover)',
      link: 'assets/tracks/Nothing New (Young Upstart Cover).mp3',
      artist: 'From Noise to Water',
      duration: 5,
    },
    {
      title: 'Reasons To Wait (Water and Fire Cover)',
      link: 'assets/tracks/Reasons To Wait (Water and Fire Cover).mp3',
      artist: 'From Noise to Water',
      duration: 5,
    },
    {
      title: 'Take Me With You (Drama Queen Cover)',
      link: 'assets/tracks/Take Me With You (Drama Queen Cover).mp3',
      artist: 'From Noise to Water',
      duration: 5,
    },
  ];

  ngOnInit(): void {}
}
