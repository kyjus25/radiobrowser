import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable()
export class StationPlayerService {
  private isStationPlaying = false;
  public isStationPlayingReplaySubject: ReplaySubject<boolean> = new ReplaySubject(1);
  public stationReplaySubject: ReplaySubject<boolean> = new ReplaySubject(1);

  public playSong(station) {
    this.isStationPlaying = true;
    this.isStationPlayingReplaySubject.next(this.isStationPlaying);
    this.stationReplaySubject.next(station);
  }
}
