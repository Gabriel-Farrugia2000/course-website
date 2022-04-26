import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css']
})
export class ExperiencePageComponent implements OnInit {
  title = "Choose A Phase And Start Learning!"

  cards = [
    {
      title: 'Phase 1',
      img: './assets/phase 1.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Phase 2',
      img: './assets/phase 2.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      title: 'Phase 3',
      img: './assets/phase 3.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
