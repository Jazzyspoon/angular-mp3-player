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
  msaapPageSizeOptions = [10];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = true;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = false;
  msaapPlaylist: Track[] = [
    // Material Style Advance Audio Player Playlist

    {
      title: 'Jam On It (inst)',
      link: 'https://jazzyspoon.com/tools/HalloJams/09%20-%20Jam%20On%20It%20(12-Inch%20Instrumental).mp3',
      artist: 'Newcleus',
      duration: 3,
    },
    {
      title: 'Insular192',
      link: 'https://jazzyspoon.com/tools/HalloJams/insular192.mp3',
      artist: 'Blortblort',
      duration: 3,
    },
    {
      title: 'Mario theme',
      link: 'http://www.jazzyspoon.com/tools/HalloJams/Super%20Mario%20Bros.%20medley.mp3',
      artist: 'Jazzyspoon',
      duration: 3,
    },
    {
      title: 'Absence',
      link: 'https://jazzyspoon.com/tools/HalloJams/Jazzyspoon%20-%20Hard%20Drive%20Recovery%20-%2006%20Absence%20(20%20mix).mp3',
      artist: 'Jazzyspoon',
      duration: 3,
    },
    {
      title: 'RevLol',
      link: 'https://jazzyspoon.com/tools/HalloJams/Jazzyspoon%20-%20The%20Alternative%20Mixes%20Of%20My%20Environment%20-%2003%20Rev-LOL-ver%20(Alt%20Mix).mp3',
      artist: 'Jazzyspoon',
      duration: 3,
    },
    {
      title: 'Kiddies',
      link: 'https://jazzyspoon.com/tools/HalloJams/KiDdies.mp3',
      artist: 'Self',
      duration: 3,
    },
    {
      title: 'Ash and Dust',
      link: 'http://www.jazzyspoon.com/tools/HalloJams/Jazzyspoon%20-%20Circle%20When%20Finished%20(remastered)%20-%2007%20Ash%20And%20Dust.mp3',
      artist: 'Jazzyspoon',
      duration: 3,
    },
    {
      title: 'Our Whispered Rants',
      link: 'https://jazzyspoon.com/tools/HalloJams/Jazzyspoon%20-%20Noise%20and%20Noir%20-%2002%20Our%20Whispered%20Rants.mp3',
      artist: 'Jazzyspoon',
      duration: 3,
    },
    {
      title: 'Gone',
      link: 'https://jazzyspoon.com/tools/HalloJams/Jazzyspoon%20&%20IG88%20-%20Jazzyspoon%20&%20IG88%20-%2001%20Gone.mp3',
      artist: 'Jazzyspoon and IG88',
      duration: 3,
    },
    {
      title: 'Sleeper',
      link: 'https://jazzyspoon.com/tools/HalloJams/08%20-%20Sleeper.mp3',
      artist: 'Yeah Ghost',
      duration: 3,
    },
  ];

  ngOnInit(): void {}
}
