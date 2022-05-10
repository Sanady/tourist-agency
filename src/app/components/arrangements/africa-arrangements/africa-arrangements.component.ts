import { Component, OnInit } from '@angular/core';
import { Destination } from 'src/app/models/destinations.model';

@Component({
  selector: 'app-africa-arrangements',
  templateUrl: './africa-arrangements.component.html',
  styleUrls: ['../arrangements.component.css']
})
export class AfricaArrangementsComponent implements OnInit {
  currentDestination = 'test';

  africaDestinations: Destination [][] = [
      [
        {
          name: "Hurghada",
          continent: "Africa",
          flag: "eg",
          description: "Long beach test",
          price: 5000.0
        },
        {
          name: "Morocco",
          continent: "Africa",
          flag: "ma",
          description: "Test desc",
          price: 6000.0
        },
        {
          name: "Hurghada",
          continent: "Africa",
          flag: "eg",
          description: "Long beach test",
          price: 5000.0
        },
        {
          name: "Hurghada",
          continent: "Africa",
          flag: "eg",
          description: "Long beach test",
          price: 5000.0
        }
      ],
      [
        {
          name: "Morocco",
          continent: "Africa",
          flag: "ma",
          description: "Test desc",
          price: 6000.0
        },
        {
          name: "Morocco",
          continent: "Africa",
          flag: "ma",
          description: "Test desc",
          price: 6000.0
        },
        {
          name: "Morocco",
          continent: "Africa",
          flag: "ma",
          description: "Test desc",
          price: 6000.0
        },
        {
          name: "Morocco",
          continent: "Africa",
          flag: "ma",
          description: "Test desc",
          price: 6000.0
        },
      ]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
