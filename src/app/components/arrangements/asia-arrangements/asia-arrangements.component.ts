import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destinations.model';
import { ArrangementsComponent } from 'src/app/components/arrangements/arrangements.component';

@Component({
  selector: 'app-asia-arrangements',
  templateUrl: './asia-arrangements.component.html',
  styleUrls: ['../arrangements.component.css']
})
export class AsiaArrangementsComponent implements OnInit {
  arrangementsComponent: ArrangementsComponent = new ArrangementsComponent();

  asianDestinations: Destination [][] = [
    [
      {
        name: "Maldives",
        continent: "Asia",
        flag: "mw",
        description: "Maldives with beautiful houses",
        price: 1290.0,
        discount: 0,
        from: new Date("2022-10-01"),
        to: new Date("2022-10-12"),
        duration: 0,
        picture: "assets/images/maldives.jpg"
      },
      {
        name: "Liban",
        continent: "Asia",
        flag: "lb",
        description: "Liban Mix destination",
        price: 890.0,
        discount: 0,
        from: new Date("2022-05-01"),
        to: new Date("2022-05-10"),
        duration: 0,
        picture: "assets/images/liban.jpg"
      },
      {
        name: "Thailand",
        continent: "Asia",
        flag: "th",
        description: "Phuket destination",
        price: 1090.0,
        discount: 0,
        from: new Date("2022-06-01"),
        to: new Date("2022-06-11"),
        duration: 0,
        picture: "assets/images/thailand.jpg"
      },
      {
        name: "Jordan",
        continent: "Asia",
        flag: "jo",
        description: "Middle east country",
        price: 1060.0,
        discount: 0,
        from: new Date("2022-07-01"),
        to: new Date("2022-07-08"),
        duration: 0,
        picture: "assets/images/jordan.jpg"
      }
    ],
    [
      {
        name: "Liban",
        continent: "Asia",
        flag: "lb",
        description: "Liban Mix destination",
        price: 1090.0,
        discount: 0,
        from: new Date("2022-07-01"),
        to: new Date("2022-07-12"),
        duration: 0,
        picture: "assets/images/liban.jpg"
      },
      {
        name: "Jordan",
        continent: "Asia",
        flag: "jo",
        description: "Middle east country",
        price: 1260.0,
        discount: 0,
        from: new Date("2022-04-01"),
        to: new Date("2022-04-10"),
        duration: 0,
        picture: "assets/images/jordan.jpg"
      },
      {
        name: "Thailand",
        continent: "Asia",
        flag: "th",
        description: "Phuket destination",
        price: 1690.0,
        discount: 0,
        from: new Date("2022-10-01"),
        to: new Date("2022-10-15"),
        duration: 0,
        picture: "assets/images/thailand.jpg"
      },
      {
        name: "Maldives",
        continent: "Asia",
        flag: "mw",
        description: "Maldives with beautiful houses",
        price: 2290.0,
        discount: 0,
        from: new Date("2022-12-15"),
        to: new Date("2022-12-31"),
        duration: 0,
        picture: "assets/images/maldives.jpg"
      }
    ]
];
  constructor() { }

  ngOnInit(): void {
  }

}
