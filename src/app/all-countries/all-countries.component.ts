import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Regions } from '../regions.enum';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {
  region : string 
  countries : any[] = []
  constructor(private route : ActivatedRoute, private router : Router, private httpService : HttpServiceService) {
    this.route.params
      .subscribe(
        (param : Params)=>{
          this.region = param["region"]
        },
        err => {
          console.log("There is some error")
        }
      )
   }

  ngOnInit() {
    if(this.region){
      switch(this.region){
        case Regions.Africa : {
          this.getRegion(Regions.Africa)
          break;
        }
        case Regions.Americas : {
          this.getRegion(Regions.Americas)
          break;
        }
        case Regions.Asia : {
          this.getRegion(Regions.Asia)
          break;
        }
        case Regions.Europe : {
          this.getRegion(Regions.Europe)
          break;
        }
        case Regions.Oceania : {
          this.getRegion(Regions.Oceania)
          break;
        }
        default : {
          this.router.navigate(["/"])
        }
      }
    }
  }

  getRegion(region){
    this.httpService.getCountriesOfRegion(region)
      .subscribe(
        data => {
          this.countries = data
        }
      )
  }

}
