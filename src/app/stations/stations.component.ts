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

  public searchName: string;
  public searchCountry: string;
  public searchState: string;
  public searchLanguage: string;
  public searchTags: string;

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
        this.searchName = queryParams.search;
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

    let countryName = null;
    let stateName = null;
    let languageName = null;
    let tagsCommaSeperated = null;

    if (this.searchCountry !== undefined) {
      const country: any = this.searchCountry;
      countryName = country.name;
    }

    if (this.searchState !== undefined) {
      const state: any = this.searchState;
      stateName = state.name;
    }

    if (this.searchLanguage !== undefined) {
      const language: any = this.searchLanguage;
      languageName = language.name;
    }

    if (this.searchTags !== undefined && this.searchTags.length > 0) {
      const tagsArray = <any[]><unknown>this.searchTags;
      tagsCommaSeperated = tagsArray.map(tag => {
        return tag.name
      }).join();
    }

    const searchParams = {
      name: this.searchName,
      country: countryName,
      state: stateName,
      language: languageName,
      tagList: tagsCommaSeperated
    };
    console.log(searchParams);
    this.http.post(
      'http://www.radio-browser.info/webservice/json/stations/search', searchParams
    ).subscribe(res => {
      this.tableData = <any[]>res;
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

  searchAllTags(event) {
    this.filteredTags = this.allTags.filter(tag => tag.name.toLowerCase().includes(event.query.toLowerCase()));
  }
}