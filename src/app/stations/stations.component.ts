import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {FooterComponent} from '../shared/footer/footer.component';
import {StationPlayerService} from '../shared/station-player.service';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent {
  public loading = false;
  public noResults = true;

  public tableData;
  public searchIsSelected = true;
  public visibleColumns = [];

  public countries;
  public filteredCountries;

  public states;
  public filteredStates;

  public languages;
  public filteredLanguages;

  public allTags;
  public filteredTags;

  public name: string;
  public country: string;
  public state: string;
  public language: string;
  public tags: string;

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
      width: 'auto'
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
      width: '125'
    }
  ];
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private player: StationPlayerService
  ) {

    combineLatest([
      this.route.queryParams,
      this.http.get('http://www.radio-browser.info/webservice/json/countries'),
      this.http.get('http://www.radio-browser.info/webservice/json/states'),
      this.http.get('http://www.radio-browser.info/webservice/json/languages'),
      this.http.get('http://www.radio-browser.info/webservice/json/tags')
    ]).subscribe(([queryParams, countries, states, languages, tags]) => {

      if (queryParams.hasOwnProperty('search') && queryParams.search.length > 0) {
        this.name = queryParams.search;
        this.searchStations();
        this.searchIsSelected = false;
      }
      this.countries = countries;
      this.states = states;
      this.languages = languages;
      this.allTags = tags;
    });
  }

  public searchStations() {
    this.loading = true;
    const searchParams = {
      name: this.name,
      country: this.country,
      state: this.state,
      language: this.language,
      tagList: this.tags
    };
    this.http.post(
      'http://www.radio-browser.info/webservice/json/stations/search', searchParams
    ).subscribe(res => {
      this.tableData = <any[]>res;
      console.log(res);
      this.loading = false;
      this.noResults = this.tableData.length === 0;
    });
  }

  public playStation(station) {
    this.player.playSong(station);
  }

  searchCountries(event) {
    this.filteredCountries = this.countries.filter(country => country.name.toLowerCase().includes(event.query.toLowerCase()));
  }

  searchStates(event) {
    this.filteredStates = this.states.filter(state => state.name.toLowerCase().includes(event.query.toLowerCase()));
  }

  searchLanguages(event) {
    this.filteredLanguages = this.languages.filter(language => language.name.toLowerCase().includes(event.query.toLowerCase()));
  }

  searchTags(event) {
    this.filteredTags = this.allTags.filter(tag => tag.name.toLowerCase().includes(event.query.toLowerCase()));
  }
}
