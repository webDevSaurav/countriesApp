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
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCountriesComponent,
    FirstCharCapitalPipe,
    CountryComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {"path" : "", component : HomeComponent, pathMatch : "full"},
      {"path" : "allCountries/:region", component : AllCountriesComponent},
      {"path" : "allCountries/:code", component : CountryComponent},
      {"path" : "country/:country", component : CountryComponent}
    ])
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
