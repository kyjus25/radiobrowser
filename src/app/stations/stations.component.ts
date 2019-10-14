import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FooterComponent} from '../shared/footer/footer.component';
import {StationPlayerService} from '../shared/station-player.service';
import {combineLatest, Subject} from 'rxjs';
import {MessageService} from 'primeng/api';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent {
  public loading = false;
  public noResults = true;

  public first = 0;
  public rows = 10;

  public interval;
  public icyUnsubscribe: Subject<void> = new Subject<void>();

  public displayStationModal = false;
  public displayHistoryModal = false;
  public displayedStation;

  public tableData;
  public searchIsSelected = true;

  public countries;
  public filteredCountries;

  public states;
  public filteredStates;

  public languages;
  public filteredLanguages;

  public allTags;
  public filteredTags;

  public searchName: string;
  public searchCountry: string;
  public searchState: string;
  public searchLanguage: string;
  public searchTags: string;

  public searchClicks = false;
  public searchVotes = false;
  public searchPlayed = false;
  public searchNewness = false;
  public searchBroken = false;
  public searchImprovable = false;

  public cols = [
    {
      header: 'Logo',
      field: 'logo',
      show: true,
      sortable: false,
      width: 'auto'
    },
    {
      header: 'Votes',
      field: 'votes',
      show: true,
      sortable: true,
      width: '50'
    },
    {
      header: 'Name',
      field: 'name',
      show: true,
      sortable: true,
      width: '200'
    },
    {
      header: 'Stream Info',
      field: 'stream-info',
      show: true,
      sortable: false,
      width: 'auto'
    },
    {
      header: 'Tags',
      field: 'tags',
      show: true,
      sortable: false,
      width: 'auto'
    },
    {
      header: 'Country',
      field: 'country',
      show: false,
      sortable: true,
      width: 'auto'
    },
    {
      header: 'Last Online Check (CEST)',
      field: 'last-online-check',
      show: false,
      sortable: true,
      width: 'auto'
    },
    {
      header: 'Last Contact (CEST)',
      field: 'last-contact',
      show: false,
      sortable: true,
      width: 'auto'
    },
    {
      header: 'Last Change (CEST)',
      field: 'last-change',
      show: false,
      sortable: true,
      width: 'auto'
    },
    {
      header: 'Actions',
      field: 'actions',
      show: true,
      sortable: false,
      width: '170'
    }
  ];
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private player: StationPlayerService
  ) {

    this.listenStationPlayingChanges();

    combineLatest([
      this.http.get('https://www.radio-browser.info/webservice/json/countries'),
      this.http.get('https://www.radio-browser.info/webservice/json/states'),
      this.http.get('https://www.radio-browser.info/webservice/json/languages'),
      this.http.get('https://www.radio-browser.info/webservice/json/tags')
    ]).subscribe(([countries, states, languages, tags]) => {
      const queryParams = this.route.snapshot.queryParams;
      console.log('params', queryParams);
      if (Object.keys(queryParams).length > 0) {
        this.searchName = queryParams.name;
        this.searchCountry = queryParams.country;
        this.searchState = queryParams.state;
        this.searchLanguage = queryParams.language;
        this.searchTags = queryParams.tags ? queryParams.tags.split(',') : '';

        this.searchClicks = !!queryParams.clicks;
        this.searchVotes = !!queryParams.votes;
        this.searchPlayed = !!queryParams.played;
        this.searchNewness = !!queryParams.newness;
        this.searchBroken = !!queryParams.broken;
        this.searchImprovable = !!queryParams.improvable;

        this.first = parseInt(queryParams.first, 10);
        this.rows = parseInt(queryParams.rows, 10);

        this.setParams();
      }

      this.countries = countries;
      this.states = states;
      this.languages = languages;
      this.allTags = tags;
    });
  }

  public searchStations(params) {
    this.loading = true;
    this.searchIsSelected = false;

    if (this.searchBroken) {
      this.showBroken();
      return;
    }

    if (this.searchImprovable) {
      this.showImprovable();
      return;
    }

    let orderBy = null;
    if (this.searchVotes) { orderBy = 'votes'; }
    if (this.searchClicks) { orderBy = 'clickcount'; }
    if (this.searchNewness) { orderBy = 'lastchange'; }
    if (this.searchPlayed) { orderBy = 'clicktrend'; }

    const searchParams = {
      name: params['name'] ? params['name'] : null,
      country: params['country'],
      state: params['state'],
      language: params['language'],
      tagList: params['tags'],
      order: orderBy,
      reverse: false
    };
    this.http.post(
      'https://www.radio-browser.info/webservice/json/stations/search', searchParams
    ).subscribe(res => {
      const tableData = <any[]>res;
      tableData.forEach(data => {
        data.url = data.url.replace('http://', 'https://');
        data.favicon = data.favicon.replace('http://', 'https://');
        data.votes = parseInt(data.votes, 10);
      });
      this.tableData = tableData;
      this.loading = false;
      this.noResults = this.tableData.length === 0;
    });
  }

  public showBroken() {
    this.disableOtherSorting('Broken');
    this.wipeSearches();
    this.http.get(
      'https://www.radio-browser.info/webservice/json/stations/broken'
    ).subscribe(res => {
      this.tableData = <any[]>res;
      this.tableData.map(data => data.votes = parseInt(data.votes, 10));
      this.loading = false;
      this.noResults = this.tableData.length === 0;
    });
  }

  public showImprovable() {
    this.disableOtherSorting('Improvable');
    this.wipeSearches();
    this.http.get(
      'https://www.radio-browser.info/webservice/json/stations/improvable'
    ).subscribe(res => {
      this.tableData = <any[]>res;
      this.tableData.map(data => data.votes = parseInt(data.votes, 10));
      this.loading = false;
      this.noResults = this.tableData.length === 0;
    });
  }

  public listenStationPlayingChanges() {
    combineLatest([
      this.player.stationReplaySubject,
      this.player.stationCurrentlyPlaying
    ]).subscribe(([station, playing]) => {
      if (this.tableData && playing) {
        const foundRow = this.tableData.find(data => data['id'] === station['id']);
        if (foundRow) {
          foundRow.playing = playing;
        }
      }
    });
  }

  public setParams(setPage?) {
    const params = {};
    if ( this.searchName) {params['name'] = this.searchName; }
    if ( this.searchCountry ) {params['country'] = this.searchCountry; }
    if ( this.searchState ) {params['state'] = this.searchState; }
    if ( this.searchLanguage ) {params['language'] = this.searchLanguage; }
    if ( this.searchTags ) {params['tags'] = this.searchTags; }
    if ( this.searchClicks ) { params['clicks'] = this.searchClicks; }
    if ( this.searchVotes ) { params['votes'] = this.searchVotes; }
    if ( this.searchPlayed ) { params['played'] = this.searchPlayed; }
    if ( this.searchNewness ) { params['newness'] = this.searchNewness; }
    if ( this.searchBroken ) { params['broken'] = this.searchBroken; }
    if ( this.searchImprovable ) { params['improvable'] = this.searchImprovable; }

    params['rows'] = this.rows;
    params['first'] = this.first;

    if (setPage) {
      this.pageChange({first: 0, rows: this.rows});
      params['rows'] = this.rows;
      params['first'] = 0;
    }

    this.router.navigate(['.'], {queryParams: params, queryParamsHandling: '', relativeTo: this.route}).then();
    this.searchStations(params);
  }


  public wipeSearches() {
    this.searchName = '';
    this.searchCountry = '';
    this.searchState = '';
    this.searchLanguage = '';
    this.searchTags = '';
  }

  public disableOtherSorting(leaveAlone?) {
    this.searchClicks = false;
    this.searchNewness = false;
    this.searchPlayed = false;
    this.searchVotes = false;
    this.searchBroken = false;
    this.searchImprovable = false;
    if (leaveAlone) {
      this['search' + leaveAlone] = true;
    }
  }

  public getKeys(station) {
    return Object.keys(station);
  }

  public playStation(station) {
    this.player.playSong(station);
  }

  public voteStation(station) {
    this.http.get('https://www.radio-browser.info/webservice/json/vote/' + station.id).subscribe(res => {
      this.messageService.add({severity: 'success', summary: 'Vote Added', detail: 'Thanks for voting for ' + station.name});
    });
  }

  public displayStation(station) {
    this.displayedStation = station;
    this.displayStationModal = true;
  }

  public displayHistory(station) {
    this.http.get('https://www.radio-browser.info/webservice/json/stations/changed/' + station.stationuuid).subscribe(history => {
      const historyArray = <any[]>history;
      this.displayedStation = [];
      for (let i = 0; i < historyArray.length; i++) {
        if (i === 0) {
          const map = {
            name: 'undefined -> ' + historyArray[i]['name'],
            url: 'undefined -> ' + historyArray[i]['url'],
            homepage: 'undefined -> ' + historyArray[i]['homepage'],
            favicon: 'undefined -> ' + historyArray[i]['favicon'],
            tags: 'undefined -> ' + historyArray[i]['tags'],
            country: 'undefined -> ' + historyArray[i]['country'],
            state: 'undefined -> ' + historyArray[i]['state'],
            language: 'undefined -> ' + historyArray[i]['language']
          };
          this.displayedStation.push(map);
        } else {
          const map = {
            name: historyArray[i - 1]['name'] + ' -> ' + historyArray[i]['name'],
            url: historyArray[i - 1]['url'] + '-> ' + historyArray[i]['url'],
            homepage: historyArray[i - 1]['homepage'] + ' -> ' + historyArray[i]['homepage'],
            favicon: historyArray[i - 1]['favicon'] + ' -> ' + historyArray[i]['favicon'],
            tags: historyArray[i - 1]['tags'] + ' -> ' + historyArray[i]['tags'],
            country: historyArray[i - 1]['country'] + ' -> ' + historyArray[i]['country'],
            state: historyArray[i - 1]['state'] + ' -> ' + historyArray[i]['state'],
            language: historyArray[i - 1]['language'] + ' -> ' + historyArray[i]['language']
          };
          this.displayedStation.push(map);
        }
      }
      this.displayHistoryModal = true;
    });
  }

  searchCountries(event) {
    this.filteredCountries = this.countries.filter(country => country.name.toLowerCase().includes(event.query.toLowerCase())).map(country => country.value);
  }

  searchStates(event) {
    this.filteredStates = this.states.filter(state => state.name.toLowerCase().includes(event.query.toLowerCase())).map(state => state.value);
  }

  searchLanguages(event) {
    this.filteredLanguages = this.languages.filter(language => language.name.toLowerCase().includes(event.query.toLowerCase())).map(language => language.value);
  }

  searchAllTags(event) {
    this.filteredTags = this.allTags.filter(tag => tag.name.toLowerCase().includes(event.query.toLowerCase())).map(tag => tag.value);
  }

  public pageChange(event) {
    this.router.navigate(['.'], {queryParams: {first: event.first, rows: event.rows}, queryParamsHandling: 'merge', relativeTo: this.route}).then()
    this.rows = event.rows;
    this.first = event.first;

    this.icyUnsubscribe.next();
    this.icyUnsubscribe.complete();

    clearInterval(this.interval);
    this.getIcy(event);
    this.interval = setInterval(() => {
      this.getIcy(event);
    }, 60000);
  }

  private getIcy(event) {
    for (let i = 0; i < event.rows; i++) {
      if (this.tableData[event.first + i]) {
        this.http.get('https://icy.radio-browser.live/icy.php?url=' + this.tableData[event.first + i].url)
          .pipe( takeUntil(this.icyUnsubscribe) )
          .subscribe(icy => {
            if (icy && icy.hasOwnProperty('icy-title') && icy['icy-title'] !== '') {
              this.tableData[event.first + i].playing = icy['icy-title'];
            }
          });
      }
    }
  }
}
