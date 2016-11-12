import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {

  private timeOut: number = 2000
  private active: boolean = true

  constructor() {
    this.timeOut = 2000
    this.active = true
  }

  ngOnInit() {
    setTimeout(() => { this.active = false }, this.timeOut);
  }

}