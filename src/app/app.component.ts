import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  private timeOut: number = 250

  private currentPage: string = 'HOME'

  private pageStyles: string

  isDecember() {
    return new Date().getUTCMonth() + 1 == 12
  }

  openPage(event) {
    this.pageStyles = 'fade'
    setTimeout(() => {
      this.pageStyles = ''
      this.currentPage = event.page
    }, this.timeOut);
  }
}
