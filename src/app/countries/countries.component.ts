import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CountriesService } from '../services/countries.service';
import { Country } from '../models/country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  private sub : any;
  continent = '';
  countries: Array<Country>

  constructor(
    private route: ActivatedRoute,
    private _countriesService: CountriesService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params=> {
      this.continent = params['country'];
      this.fetchCountriesFromApi()
    });
  }

  private fetchCountriesFromApi() {
    this._countriesService.getCountries(this.continent).then(res => {
        this.countries = res as Array<Country>;
    })
  }
}