import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  private projects = [{
      title: "Portfolio",
      link: "#",
      image: "Placeholder",
      description: "Previously used a Wordpress Template and then after a Bootstrap Template to create the portfolio page. I now made this page from scratch to match what I felt was necessery for the page, which is simplicity."
  }, {
      title: "Blog",
      link: "#",
      image: "Placeholder",
      description: "A small project to integrate a bit of what I learned from work and studies into a self expressive piece."
  }, {
      title: "Cloud Wallpaper Rotator",
      link: "https://github.com/edkotkas/Cloud-Wallpaper-Rotator",
      image: "Placeholder",
      description: "Aims to keep your storage less cluttered by unorganised background images.You keep the images storaged on a cloud hosting service and CWR will download a single random image at aset interval to your machine.Then through the use of scripts will change your wallpaper."
  }, {
      title: "Qinetiq's Centre for Disease Control",
      link: "https://github.com/edkotkas/Qinetiq-RWP",
      image: "Placeholder",
      description: "A group project to develop an algorithm to detect potential Anthrax outbreaks and discover the individuals with intersecting paths, that might be identified as having anthrax. Managed the database set up and maintenance, developed the algorithm to simulate real life people. The program generates 3 forms of data sets, people's personal details (full name, date of birth, phone number, password and a UUID), health information (symptoms and a linking UUID), and gps location data (timestamps and longitude/latitude)."
  }, {
      title: "Py-Break",
      link: "https://github.com/edkotkas/PyBreak",
      image: "Placeholder",
      description: "A re-creation of Atari's Breakout game. Written in Python with PyGame, demonstrates a fully working game and features a custom level editor."
  }, {
      title: "Falling-PyBlocks",
      link: "https://github.com/edkotkas/Falling-PyBlocks",
      image: "Placeholder",
      description: "This project is a re-creation of Tetris. Written in Python with PyGame, features audio controls and showcases a fully functioning game."
  }]

  private skills = [{
    area: 'Development',
    items: ['Python', 'C#', 'Java', 'C++', 'HTML', 'CSS', 'JavaScript', 'PHP',
            'SQL', 'OOP', 'Android', 'Git', 'GitHub', 'ASP.NET']
  }, {
    area: 'Design',
    items: ['Photoshop', 'GIMP', 'Corel Draw', '3D Studio Max', 'Maya']
  }, {
    area: 'Office',
    items: ['MS Office Suite', 'LibreOffice Suite', 'UML Tools']
  }, {
    area: 'Soft',
    items: ['Teamwork', 'Public Speaking', 'Leadership']
  }, {
    area: 'Language',
    items: ['English', 'Russian', 'Estonian', 'German']
  }]

  ngOnInit() {
  }

}
