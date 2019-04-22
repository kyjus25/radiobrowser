import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-new-station',
  templateUrl: './new-station.component.html',
  styleUrls: ['./new-station.component.css']
})
export class NewStationComponent {
  public selectMode = true;

  public countries;
  public filteredCountries;

  public states;
  public filteredStates;

  public languages;
  public filteredLanguages;

  public allTags;
  public filteredTags;

  public name: string;
  public url: string;
  public homepage: string;
  public favicon: string;
  public country: string;
  public state: string;
  public language: string;
  public tags: string;
  public tagsString;

  constructor(
    private http: HttpClient
  ) {
    combineLatest([
      this.http.get('http://www.radio-browser.info/webservice/json/countries'),
      this.http.get('http://www.radio-browser.info/webservice/json/states'),
      this.http.get('http://www.radio-browser.info/webservice/json/languages'),
      this.http.get('http://www.radio-browser.info/webservice/json/tags')
    ]).subscribe(([countries, states, languages, tags]) => {
      this.countries = countries;
      this.states = states;
      this.languages = languages;
      this.allTags = tags;
    });
  }

  public submitStation() {
    if (
      this.name !== '' && this.name !== undefined &&
      this.url !== '' && this.url !== undefined
    ) {

      let countryName = null;
      let stateName = null;
      let languageName = null;
      let tagsCommaSeperated = null;

      if (this.country !== undefined) {
        const country: any = this.country;
        countryName = country.name;
      }

      if (this.state !== undefined) {
        const state: any = this.state;
        stateName = state.name;
      }

      if (this.language !== undefined) {
        const language: any = this.language;
        languageName = language.name;
      }

      if (this.tags !== undefined && this.tags.length > 0 && this.selectMode) {
        const tagsArray = <any[]><unknown>this.tags;
        tagsCommaSeperated = tagsArray.map(tag => {
          return tag.name;
        }).join();
      }

      if (this.tagsString !== undefined && this.tagsString.length > 0 && !this.selectMode) {
        tagsCommaSeperated = this.tagsString;
      }


      const submission = {
        name: this.name,
        url: this.url,
        homepage: this.homepage,
        favicon: this.favicon,
        tags: tagsCommaSeperated,
        language: languageName,
        state: stateName,
        country: countryName
      };
      console.log(submission);
      this.http.post('http://www.radio-browser.info/webservice/json/add', submission).subscribe(res => {
        this.name = '';
        this.url = '';
        this.homepage = '';
        this.favicon = '';
        this.tags = '';
        this.tagsString = '';
        this.language = '';
        this.state = '';
        this.country = '';
        console.log(res);
      });
    }
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

  public hasContent(element) {
    return this[element] !== '';
  }
}
