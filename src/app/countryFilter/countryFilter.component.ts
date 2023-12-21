import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'country-filter',
  templateUrl: './countryFilter.component.html',
  styleUrls: ['./countryFilter.component.scss']
})

export class CountryFilter implements OnInit {
  @Input() countryList: string[];
  filterList : string[] = [];
  searchText: string = '';
  ngOnInit() {
    this.filterList = this.countryList;
  }
  searchCountry(event : any)
  {
    this.filterList = this.countryList.filter(x => x.toLocaleLowerCase().indexOf(this.searchText.toLocaleLowerCase()) >=0);
  }
}
