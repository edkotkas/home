import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {

  private timeOut: number = 1500
  private active: boolean = true

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => { this.active = false }, this.timeOut);
  }

}