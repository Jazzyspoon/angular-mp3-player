import { Component } from '@angular/core';
import { Mp3PlayerComponent } from './mp3-player/mp3-player.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [Mp3PlayerComponent],
})
export class AppComponent {
  title = 'Modern MP3 Player';
}
