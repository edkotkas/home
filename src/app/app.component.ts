import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  private currentPage: string = 'HOME'

  openPage(event) {
    this.currentPage = event.page
  }

  isDecember() {
    return new Date().getUTCMonth() + 1 == 12
  }
}
