import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  title = "Choose  a language to learn"

  cards = [
    {
      img: './assets/javascript-icon.png',
      title: 'Javascript',
      description: 'Learn how to use the most powerful and flexible programming languages of the web that owers the dynamic behavior on most websites'
    }
  ]

  comingSoonCourses = [
    {
      title: 'Coming Soon!',
    },
    {
      title: 'Coming Soon!',
    },
    {
      title: 'Coming Soon!',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
