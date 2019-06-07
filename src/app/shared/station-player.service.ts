import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class StationPlayerService {

  private interval;

  constructor(private http: HttpClient) {}

  private isStationPlaying = false;
  public isStationPlayingReplaySubject: ReplaySubject<boolean> = new ReplaySubject(1);
  public stationReplaySubject: ReplaySubject<boolean> = new ReplaySubject(1);
  public stationCurrentlyPlaying: ReplaySubject<boolean> = new ReplaySubject(1);
  public stationType: ReplaySubject<string> = new ReplaySubject(1);

  public playSong(station) {
    this.isStationPlaying = true;
    this.stationCurrentlyPlaying.next(null);
    this.isStationPlayingReplaySubject.next(this.isStationPlaying);
    this.stationReplaySubject.next(station);
    if (station.url.includes('m3u8')) {
      this.stationType.next('VIDEO');
    } else {
      this.stationType.next('AUDIO');
      this.getMetadata(station.url);
    }
  }

  public getMetadata(url) {
    const this1 = this;
    clearInterval(this.interval);
    this1.http.get('/icy?url=' + url).subscribe(icy => {
      if (icy.hasOwnProperty('icy-title') && icy['icy-title'] !== '') {
        this1.stationCurrentlyPlaying.next( icy['icy-title'] );
      } else {
        this1.stationCurrentlyPlaying.next(null);
      }
    });
    this.interval = setInterval(function() {
      this1.http.get('/icy?url=' + url).subscribe(icy => {
        if (icy.hasOwnProperty('icy-title') && icy['icy-title'] !== '') {
          this1.stationCurrentlyPlaying.next( icy['icy-title'] );
        } else {
          this1.stationCurrentlyPlaying.next(null);
        }
      });
    }, 10000);
  }
}
