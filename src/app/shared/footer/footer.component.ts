import {Component, ElementRef, ViewChild} from '@angular/core';
import {StationPlayerService} from '../station-player.service';
import * as Hls from 'hls.js';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @ViewChild('video') video: ElementRef;

  public isPlayingStation = false;
  public station;
  public currentlyPlaying = null;
  public stationType = null;

  constructor(
    private player: StationPlayerService
  ) {
    this.player.stationType.subscribe(res => {
      this.stationType = res;
      if (this.stationType === 'Video') {
        setTimeout(() => { this.createHLS(); }, 3000);
      }
    });

    this.player.stationCurrentlyPlaying.subscribe(res => {
      this.currentlyPlaying = res;
    });

    this.player.stationReplaySubject.subscribe(res => {
      const this1 = this;
      this.isPlayingStation = false;
      setTimeout(function() {
        this1.station = res;
        this1.isPlayingStation = true;
      }, 1000);
    });
  }

  private createHLS() {
    if (Hls.isSupported()) {
      const video = this.video.nativeElement;
      const hls = new Hls();
      // bind them together
      hls.attachMedia(video);
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        console.log('video and hls.js are now bound together !');
        hls.loadSource(this.station.url);
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
          console.log('manifest loaded, found ' + data.levels.length + ' quality level');
          video.play();
        });
      });
    }
  }
}
