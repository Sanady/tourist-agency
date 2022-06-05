import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destinations.model';
import { ArrangementsComponent } from 'src/app/components/arrangements/arrangements.component';

@Component({
  selector: 'app-europe-arrangements',
  templateUrl: './europe-arrangements.component.html',
  styleUrls: ['../arrangements.component.css']
})
export class EuropeArrangementsComponent implements OnInit {

  arrangementsComponent: ArrangementsComponent = new ArrangementsComponent();

  europeanDestinations: Destination [][] = [
    [
      {
        name: "Rhodos",
        continent: "Europe",
        flag: "gr",
        description: "Beautiful destinatio",
        price: 690.0,
        discount: 0,
        from: new Date("2022-07-01"),
        to: new Date("2022-07-12"),
        duration: 0,
        picture: "assets/images/rhodos.jpg"
      },
      {
        name: "Antalya",
        continent: "Europe",
        flag: "tr",
        description: "Beautiful turkish destination",
        price: 522.0,
        discount: 0,
        from: new Date("2022-06-01"),
        to: new Date("2022-06-10"),
        duration: 0,
        picture: "assets/images/antalya.jpg"
      },
      {
        name: "Antalya",
        continent: "Europe",
        flag: "tr",
        description: "Beautiful turkish destination",
        price: 542.0,
        discount: 0,
        from: new Date("2022-06-01"),
        to: new Date("2022-06-12"),
        duration: 0,
        picture: "assets/images/antalya2.jpg"
      },
      {
        name: "Rhodos",
        continent: "Europe",
        flag: "gr",
        description: "Beautiful destinatio",
        price: 690.0,
        discount: 0,
        from: new Date("2022-06-01"),
        to: new Date("2022-06-12"),
        duration: 0,
        picture: "assets/images/rhodos.jpg"
      },
    ],
    [
      {
        name: "Antalya",
        continent: "Europe",
        flag: "tr",
        description: "Beautiful turkish destination",
        price: 542.0,
        discount: 0,
        from: new Date("2022-08-01"),
        to: new Date("2022-08-12"),
        duration: 0,
        picture: "assets/images/antalya2.jpg"
      },
      {
        name: "Antalya",
        continent: "Europe",
        flag: "tr",
        description: "Beautiful turkish destination",
        price: 542.0,
        discount: 0,
        from: new Date("2022-09-01"),
        to: new Date("2022-09-12"),
        duration: 0,
        picture: "assets/images/antalya.jpg"
      },
      {
        name: "Rhodos",
        continent: "Europe",
        flag: "gr",
        description: "Beautiful destinatio",
        price: 690.0,
        discount: 0,
        from: new Date("2022-05-01"),
        to: new Date("2022-05-12"),
        duration: 0,
        picture: "assets/images/rhodos.jpg"
      },
      {
        name: "Rhodos",
        continent: "Europe",
        flag: "gr",
        description: "Beautiful destinatio",
        price: 690.0,
        discount: 0,
        from: new Date("2022-09-01"),
        to: new Date("2022-09-12"),
        duration: 0,
        picture: "assets/images/rhodos.jpg"
      },
    ]
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
