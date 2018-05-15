import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country : string
  countryInfo
  constructor(private router : Router, private route : ActivatedRoute, private httpService : HttpServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
        this.country = data.country
        this.getCountryInfo()
      }
    )
  }

  getCountryInfo(){
    this.httpService.getACountry(this.country).subscribe(
      data => {
        this.countryInfo = data
      }
    )
  }

  goToCountry(countryCode){
    this.httpService.goToCountryUsingCode(countryCode).subscribe(
      (data : any) => {
        this.router.navigate([`/country/${data.name}`])
      }
    )
  }

}
