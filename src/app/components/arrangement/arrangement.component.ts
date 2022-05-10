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

  constructor() { }

  ngOnInit(): void {
  }

}
