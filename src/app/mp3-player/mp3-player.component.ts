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
      title: 'Detroition',
      link: 'https://jasonpottorffportfolio.com/music/Jazzyspoon%20-%20Technical%20Failure%20-%2001%20Detroition.mp3',
      artist: 'Jazzyspoon',
      duration: 5,
    },
    {
      title: 'Be My Craft On Wax',
      link: 'https://jasonpottorffportfolio.com/music/Jazzyspoon%20-%20Technical%20Failure%20-%2002%20Be%20My%20Craft%20On%20Wax.mp3',
      artist: 'Jazzyspoon',
      duration: 5,
    },
    {
      title: 'Perfect 2020',
      link: 'https://jasonpottorffportfolio.com/music/Jazzyspoon%20-%20Technical%20Failure%20-%2003%20Perfect%202020%20(modmix).mp3',
      artist: 'Jazzyspoon',
      duration: 5,
    },
    {
      title: 'Something Blue',
      link: 'https://jasonpottorffportfolio.com/music/Jazzyspoon%20-%20Technical%20Failure%20-%2004%20Something%20Blue.mp3',
      artist: 'Jazzyspoon',
      duration: 5,
    },
    {
      title: 'Spiritual Processor of 98',
      link: 'https://jasonpottorffportfolio.com/music/Jazzyspoon%20-%20Technical%20Failure%20-%2005%20Spiritual%20Processor%20of%2098.mp3',
      artist: 'Jazzyspoon',
      duration: 5,
    },
    {
      title: 'The Rusting Heart',
      link: 'https://jasonpottorffportfolio.com/music/Jazzyspoon%20-%20Technical%20Failure%20-%2006%20The%20Rusting%20Heart.mp3',
      artist: 'Jazzyspoon',
      duration: 5,
    },
    // {
    //   title: 'Ash and Dust',
    //   link: 'http://www.jazzyspoon.com/tools/HalloJams/Jazzyspoon%20-%20Circle%20When%20Finished%20(remastered)%20-%2007%20Ash%20And%20Dust.mp3',
    //   artist: 'Jazzyspoon',
    //   duration: 3,
    // },
    // {
    //   title: 'Our Whispered Rants',
    //   link: 'https://jazzyspoon.com/tools/HalloJams/Jazzyspoon%20-%20Noise%20and%20Noir%20-%2002%20Our%20Whispered%20Rants.mp3',
    //   artist: 'Jazzyspoon',
    //   duration: 3,
    // },
    // {
    //   title: 'Gone',
    //   link: 'https://jazzyspoon.com/tools/HalloJams/Jazzyspoon%20&%20IG88%20-%20Jazzyspoon%20&%20IG88%20-%2001%20Gone.mp3',
    //   artist: 'Jazzyspoon and IG88',
    //   duration: 3,
    // },
  ];

  ngOnInit(): void {}
}
