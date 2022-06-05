import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destinations.model';
import { ArrangementsComponent } from 'src/app/components/arrangements/arrangements.component';

@Component({
  selector: 'app-south-america-arrangements',
  templateUrl: './south-america-arrangements.component.html',
  styleUrls: ['../arrangements.component.css']
})
export class SouthAmericaArrangementsComponent implements OnInit {

  arrangementsComponent: ArrangementsComponent = new ArrangementsComponent();

  southAmericaDestinations: Destination [][] = [
    [
      {
        name: "Colombia",
        continent: "South America",
        flag: "co",
        description: "Beautiful destinatio",
        price: 1690.0,
        discount: 0,
        from: new Date("2022-07-01"),
        to: new Date("2022-07-12"),
        duration: 0,
        picture: "assets/images/colombia.jpg"
      },
      {
        name: "Rio de Janeiro",
        continent: "South America",
        flag: "br",
        description: "Beautiful brazilian destination",
        price: 1522.0,
        discount: 0,
        from: new Date("2022-07-01"),
        to: new Date("2022-07-10"),
        duration: 0,
        picture: "assets/images/rio.jpg"
      },
      {
        name: "Colombia",
        continent: "South America",
        flag: "co",
        description: "Beautiful destinatio",
        price: 1690.0,
        discount: 0,
        from: new Date("2022-08-01"),
        to: new Date("2022-08-12"),
        duration: 0,
        picture: "assets/images/colombia.jpg"
      },
      {
        name: "Colombia",
        continent: "South America",
        flag: "co",
        description: "Beautiful destinatio",
        price: 1690.0,
        discount: 0,
        from: new Date("2022-09-01"),
        to: new Date("2022-09-12"),
        duration: 0,
        picture: "assets/images/colombia.jpg"
      },
    ],
    [
      {
        name: "Colombia",
        continent: "South America",
        flag: "co",
        description: "Beautiful destinatio",
        price: 1690.0,
        discount: 0,
        from: new Date("2022-10-01"),
        to: new Date("2022-10-12"),
        duration: 0,
        picture: "assets/images/colombia.jpg"
      },
      {
        name: "Colombia",
        continent: "South America",
        flag: "co",
        description: "Beautiful destinatio",
        price: 1690.0,
        discount: 0,
        from: new Date("2022-06-01"),
        to: new Date("2022-06-12"),
        duration: 0,
        picture: "assets/images/colombia.jpg"
      },
      {
        name: "Colombia",
        continent: "South America",
        flag: "co",
        description: "Beautiful destinatio",
        price: 1690.0,
        discount: 0,
        from: new Date("2022-11-01"),
        to: new Date("2022-11-12"),
        duration: 0,
        picture: "assets/images/colombia.jpg"
      },
      {
        name: "Rio de Janeiro",
        continent: "South America",
        flag: "br",
        description: "Beautiful brazilian destination",
        price: 1522.0,
        discount: 0,
        from: new Date("2022-08-01"),
        to: new Date("2022-08-10"),
        duration: 0,
        picture: "assets/images/rio.jpg"
      },
    ]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
