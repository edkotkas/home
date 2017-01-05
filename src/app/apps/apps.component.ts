import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openLink(link) {
    window.open(link, '_blank');
  }

}
