import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-station-history',
  templateUrl: './station-history.component.html',
  styleUrls: ['./station-history.component.css']
})
export class StationHistoryComponent {

  public loading = true;
  public couldNotFind = false;
  public history;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      const stationuuid = params.stationuuid;
      if (stationuuid === undefined) {
        history.go(-1);
      } else {
        this.http.get('http://www.radio-browser.info/webservice/json/stations/changed/' + stationuuid).subscribe(history => {
          const historyArray = <any[]>history;
          if (historyArray.length === 0) {
            this.loading = false;
            this.couldNotFind = true;
          } else {
            this.loading = false;
            this.couldNotFind = false;
            this.history = history;
          }
        });
      }
    });
  }

  public getFilteredHistory() {
    const send = [];
    for (let i = 0; i < this.history.length; i++) {
      const filtered = {
        name: 'undefined -> ' + this.history[i]['name'],
        url: 'undefined -> ' + this.history[i]['url'],
        homepage: 'undefined -> ' + this.history[i]['homepage'],
        favicon: 'undefined -> ' + this.history[i]['favicon'],
        tags: 'undefined -> ' + this.history[i]['tags'],
        country: 'undefined -> ' + this.history[i]['country'],
        state: 'undefined -> ' + this.history[i]['state'],
        language: 'undefined -> ' + this.history[i]['language']
      };
      send.push(filtered);
    }
    return send;
  }
}
