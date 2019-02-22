import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private readonly _http: HttpClient) {
  }

  getCountries = (countryName: String): Promise<Country[]> => this.createPromiseFromGetRequest<Country[]>(countryName)



  //HELPERS

  private createCachedEndpointResult<T>(endpointUrl: string): () => Promise<T> {
    var promise: Promise<T>;
    return () => {
      if (promise == null) {
        promise = this.createPromiseFromGetRequest<T>(endpointUrl);
      }
      return promise;
    };
  }
  private createPromiseFromGetRequest<TResult>(continent: String): Promise<TResult> {
    const promise = this._http
      .get("https://restcountries.eu/rest/v2/region/" + continent)
      .pipe(map((response: any) => response))
      .toPromise<TResult>();
    promise.catch(response => {
      console.error(`GET request failed:, response` + response);
    });
    return promise;
  }
}
