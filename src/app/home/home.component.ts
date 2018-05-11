import { Component, OnInit } from '@angular/core';
import { Regions } from '../regions.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  regions : string[] = [Regions.Asia, Regions.Africa, Regions.Americas, Regions.Europe, Regions.Oceania]
  constructor() { }

  ngOnInit() {
  }

}
