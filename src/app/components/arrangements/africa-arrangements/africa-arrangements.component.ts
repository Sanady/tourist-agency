import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destinations.model';
import { ArrangementsComponent } from 'src/app/components/arrangements/arrangements.component';

@Component({
  selector: 'app-africa-arrangements',
  templateUrl: './africa-arrangements.component.html',
  styleUrls: ['../arrangements.component.css']
})
export class AfricaArrangementsComponent implements OnInit {
  arrangementsComponent: ArrangementsComponent = new ArrangementsComponent();

  africaDestinations: Destination [][] = [
      [
        {
          name: "Hurghada",
          continent: "Africa",
          flag: "eg",
          description: "Long beach test",
          price: 650.0,
          discount: 0,
          from: new Date("2022-04-01"),
          to: new Date("2022-04-12"),
          duration: 0,
          picture: "assets/images/egypt.jpg"
        },
        {
          name: "Morocco",
          continent: "Africa",
          flag: "ma",
          description: "Test desc",
          price: 950.0,
          discount: 500.0,
          from: new Date("2022-05-01"),
          to: new Date("2022-05-10"),
          duration: 0,
          picture: "assets/images/morocco.jpg"
        },
        {
          name: "Hurghada",
          continent: "Africa",
          flag: "eg",
          description: "Long beach test",
          price: 500.0,
          discount: 0,
          from: new Date("2022-06-01"),
          to: new Date("2022-06-11"),
          duration: 0,
          picture: "assets/images/egypt2.jpg"
        },
        {
          name: "Hurghada",
          continent: "Africa",
          flag: "eg",
          description: "Long beach test",
          price: 500.0,
          discount: 0,
          from: new Date("2022-07-01"),
          to: new Date("2022-07-08"),
          duration: 0,
          picture: "assets/images/egypt3.jpg"
        }
      ],
      [
        {
          name: "Morocco",
          continent: "Africa",
          flag: "ma",
          description: "Test desc",
          price: 600.0,
          discount: 0,
          from: new Date("2022-08-01"),
          to: new Date("2022-08-12"),
          duration: 0,
          picture: "assets/images/morocco.jpg"
        },
        {
          name: "Morocco",
          continent: "Africa",
          flag: "ma",
          description: "Test desc",
          price: 600.0,
          discount: 0,
          from: new Date("2022-09-01"),
          to: new Date("2022-09-12"),
          duration: 0,
          picture: "assets/images/morocco.jpg"
        },
        {
          name: "Morocco",
          continent: "Africa",
          flag: "ma",
          description: "Test desc",
          price: 600.0,
          discount: 0,
          from: new Date("2022-10-01"),
          to: new Date("2022-10-12"),
          duration: 0,
          picture: "assets/images/morocco.jpg"
        },
        {
          name: "Morocco",
          continent: "Africa",
          flag: "ma",
          description: "Test desc",
          price: 600.0,
          discount: 0,
          from: new Date("2022-11-01"),
          to: new Date("2022-11-12"),
          duration: 0,
          picture: "assets/images/morocco.jpg"
        },
      ]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
