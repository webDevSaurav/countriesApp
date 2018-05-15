import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpServiceService {

  constructor(private  http : HttpClient) { }
  //base url of the api
  baseUrl : string = "https://restcountries.eu/rest/v2/"
  //gets countries by region
  getCountriesOfRegion(region) : Observable<any>{
    return this.http.get(`${this.baseUrl}region/${region}`)
  }
  //gets a single country
  getACountry(country){
    return this.http.get(`${this.baseUrl}name/${country}?fullText=true`)
  }
  //gets a singe country using country code
  goToCountryUsingCode(code){
    return this.http.get(`${this.baseUrl}alpha/${code}`)
  }
  //gets all countries using currency code
  getCountriesUsingCurrency(code){
    return this.http.get(`${this.baseUrl}currency/${code}`)
  }
  //gets all countries using language code
  getCountriesUsingLanguage(code){
    return this.http.get(`${this.baseUrl}lang/${code}`)
  }
}
