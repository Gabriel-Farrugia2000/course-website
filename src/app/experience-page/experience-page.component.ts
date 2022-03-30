import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css']
})
export class ExperiencePageComponent implements OnInit {
  title = "What's your experience"

  cards = [
    {
      img: './assets/javascript-icon.png',
      title: 'Beginner',
      description: 'You have little to none knowledge about the language'
    },
    {
      img: './assets/javascript-icon.png',
      title: 'Intermediate',
      description: 'You have little to none knowledge about the language'
    },
    {
      img: './assets/javascript-icon.png',
      title: 'Experienced',
      description: 'You have little to none knowledge about the language'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
