import { Component } from '@angular/core';
import {StationPlayerService} from '../station-player.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public isPlayingStation = false;
  public station;
  public currentlyPlaying = null;

  constructor(
    private player: StationPlayerService
  ) {
    this.player.stationCurrentlyPlaying.subscribe(res => {
      this.currentlyPlaying = res;
    });

    this.player.stationReplaySubject.subscribe(res => {
      const this1 = this;
      this.isPlayingStation = false;
      setTimeout(function(){
        this1.station = res;
        this1.isPlayingStation = true;
      }, 1000);
    });
  }
}
