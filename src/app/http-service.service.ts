import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpServiceService {

  constructor(private  http : HttpClient) { }
  
  baseUrl : string = "https://restcountries.eu/rest/v2/"

  getCountriesOfRegion(region) : Observable<any>{
    return this.http.get(`${this.baseUrl}region/${region}`)
  }

  getACountry(country){
    return this.http.get(`${this.baseUrl}name/${country}?fullText=true`)
  }
}
