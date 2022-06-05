import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { AfricaArrangementsComponent } from "./components/arrangements/africa-arrangements/africa-arrangements.component";
import { AsiaArrangementsComponent } from "./components/arrangements/asia-arrangements/asia-arrangements.component";
import { EuropeArrangementsComponent } from "./components/arrangements/europe-arrangements/europe-arrangements.component";
import { NorthAmericaArrangementsComponent } from "./components/arrangements/north-america-arrangements/north-america-arrangements.component";
import { SouthAmericaArrangementsComponent } from "./components/arrangements/south-america-arrangements/south-america-arrangements.component";
import { Destination } from 'src/app/models/destinations.model';

export interface OptionDestinations {
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  africanComponent: AfricaArrangementsComponent = new AfricaArrangementsComponent();
  asianComponent: AsiaArrangementsComponent = new AsiaArrangementsComponent();
  europiumComponent: EuropeArrangementsComponent = new EuropeArrangementsComponent();
  northAmericanComponent: NorthAmericaArrangementsComponent = new NorthAmericaArrangementsComponent();
  southAmericanComponent: SouthAmericaArrangementsComponent = new SouthAmericaArrangementsComponent();

  title = 'tourist-agency';
  myControl = new FormControl();
  options: OptionDestinations[] = [];
  filteredOptions: Observable<OptionDestinations[]> | undefined;

  ngOnInit() {
    this.options = this.addElementsToOptions(this.options, this.africanComponent.africaDestinations);
    this.options = this.addElementsToOptions(this.options, this.asianComponent.asianDestinations);
    this.options = this.addElementsToOptions(this.options, this.europiumComponent.europeanDestinations);
    this.options = this.addElementsToOptions(this.options, this.southAmericanComponent.southAmericaDestinations);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
  }

  displayFn(destination: OptionDestinations): string {
    return destination && destination.name ? destination.name : '';
  }

  private _filter(name: string): OptionDestinations[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  private addElementsToOptions(destination: OptionDestinations[], locations: Destination[][]): OptionDestinations[]  {
    locations.forEach(location => {
      location.forEach(item => {
        destination.push({name: item.name, price: item.price});
      });   
    });
    return destination;
  }
}
