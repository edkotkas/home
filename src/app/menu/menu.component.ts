import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() currentPageChanged = new EventEmitter();

  constructor() { }

  private pages = ['EXPERIMENTS', 'APPS', 'HOME', 'BLOG', 'PORTFOLIO']

  private currentPage = 'HOME'

  ngOnInit() {
  }

  openPage(event, page) {
    this.currentPageChanged.emit({
      event: event,
      page: page,
    })

    this.currentPage = page
  }
}
