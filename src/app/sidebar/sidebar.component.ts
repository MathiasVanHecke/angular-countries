import { Component, OnInit } from '@angular/core';

import { _continents } from '../mock/continents';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  continents = _continents;

  selectedContinent: String;
  
  onSelect(continentName : String): void{
    this.selectedContinent = continentName
  }

  constructor() { }

  ngOnInit() {
  }

}
