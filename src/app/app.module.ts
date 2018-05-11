import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { FirstCharCapitalPipe } from './first-char-capital.pipe';
import { HttpServiceService } from './http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './country/country.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCountriesComponent,
    FirstCharCapitalPipe,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {"path" : "", component : HomeComponent, pathMatch : "full"},
      {"path" : "allCountries/:region", component : AllCountriesComponent}
    ])
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
