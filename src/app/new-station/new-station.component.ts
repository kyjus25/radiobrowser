import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-new-station',
  templateUrl: './new-station.component.html',
  styleUrls: ['./new-station.component.css']
})
export class NewStationComponent {
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
      const submission = {
        name: this.name,
        url: this.url
      };
      console.log(submission);
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
