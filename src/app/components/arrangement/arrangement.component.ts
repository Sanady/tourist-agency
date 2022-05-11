import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrangement',
  templateUrl: './arrangement.component.html',
  styleUrls: ['./arrangement.component.css']
})
export class ArrangementComponent implements OnInit {

  @Input() name: string = "";
  @Input() continent: string = "";
  @Input() flag: string = "";
  @Input() description: string = "";
  @Input() price: number = 0;
  @Input() discount: number = 0;
  @Input() from: Date = new Date();
  @Input() to: Date = new Date();
  @Input() duration: number = 0;
  @Input() picture: string = "";

  constructor() { }

  ngOnInit(): void {
  }
}
