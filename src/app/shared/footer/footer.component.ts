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

  constructor(
    private player: StationPlayerService
  ) {
    this.player.stationReplaySubject.subscribe(res => {
      console.log('update');
      const this1 = this;
      this.isPlayingStation = false;
      setTimeout(function(){
        this1.station = res;
        this1.isPlayingStation = true;
      },1000);
    });
  }
}