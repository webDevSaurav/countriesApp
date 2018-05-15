import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Regions } from '../regions.enum';
import { HttpServiceService } from '../http-service.service';
import { Location } from "@angular/common";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css'],
  providers: [Location]
})
export class AllCountriesComponent implements OnInit, OnDestroy {
  title : string
  titlePreText : string
  region: string
  currencyFilter: boolean = false
  languageFilter: boolean = false
  countries: any[] = []
  subRegion: Subscription
  subCurrency: Subscription
  constructor(private route: ActivatedRoute, private router: Router, private httpService: HttpServiceService, private location: Location) {
  }

  ngOnInit() {
    this.subCurrency = this.route.queryParams
      .subscribe(
        params => {
          if (params["currency"]) {
            this.currencyFilter = true
            this.getCountriesByCurrency(params["currency"])
            this.titlePreText = "Countries with currency"
            this.title = params["name"]
          } else if(params["language"]){
            this.languageFilter = true
            this.getCountriesByLanguage(params["language"])
            this.titlePreText = "Countries with language"
            this.title = params["name"]
          } else {
            this.currencyFilter = false
            this.region = this.route.snapshot.paramMap.get("region")
            this.titlePreText = "Countries in"
            this.title = this.region
            console.log(this.region)
            if (this.region) {
                      switch (this.region.toLowerCase()) {
                        case Regions.Africa: {
                          this.getRegion(Regions.Africa)
                          break;
                        }
                        case Regions.Americas: {
                          this.getRegion(Regions.Americas)
                          break;
                        }
                        case Regions.Asia: {
                          this.getRegion(Regions.Asia)
                          break;
                        }
                        case Regions.Europe: {
                          this.getRegion(Regions.Europe)
                          break;
                        }
                        case Regions.Oceania: {
                          this.getRegion(Regions.Oceania)
                          break;
                        }
                        default: {
                          this.router.navigate(["/"])
                        }
                      }
                  }      
          }
        });
  }

  getRegion(region) {
    this.httpService.getCountriesOfRegion(region)
      .subscribe(
        data => {
          this.countries = data
        }
      )
  }

  getCountriesByCurrency(code){
    this.httpService.getCountriesUsingCurrency(code)
      .subscribe(
        (data : any[]) => {
          this.countries = data
        }
      )
  }

  getCountriesByLanguage(code){
    this.httpService.getCountriesUsingLanguage(code)
      .subscribe(
        (data : any[]) => {
          this.countries = data
        }
      )
  }

  goBack() {
    this.location.back()
  }

  ngOnDestroy(): void {
    // this.subRegion.unsubscribe()
    this.subCurrency.unsubscribe()
  }

}
