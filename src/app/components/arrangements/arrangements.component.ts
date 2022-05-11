import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrangements',
  templateUrl: './arrangements.component.html',
  styleUrls: ['./arrangements.component.css']
})
export class ArrangementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getDifferenceInDays(date1: Date, date2: Date): number {
    let timeInMilisec: number = date2.getTime() - date1.getTime();
    return Math.ceil(timeInMilisec / (1000 * 60 * 60 * 24));
  }
}
