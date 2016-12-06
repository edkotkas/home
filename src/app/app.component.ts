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

  private loading: boolean = false

  isDecember() {
    return new Date().getUTCMonth() + 1 == 12
  }

  openPage(event) {
    this.pageStyles = 'fade'
    this.loading = true

    setTimeout(() => {
      this.pageStyles = ''
      this.currentPage = event.page
      this.loading = false
    }, this.timeOut);
  }
}
