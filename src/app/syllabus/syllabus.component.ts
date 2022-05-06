import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {

  title = "Choose A Syllabus"

  cards = [
    {
      title: 'Functions',
      img: './assets/phase 2.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Loops',
      img: './assets/phase 3.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      path: 'lessons'
    },
    {
      title: 'Variables',
      img: './assets/phase 3.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      path: 'lessons'
    }
  ]

  constructor() { }


  ngOnInit(): void {
  }

}
