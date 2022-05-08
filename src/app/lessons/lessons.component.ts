import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  introText = "JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more. It allows you to implement dynamic features on web pages that cannot be done with only HTML and CSS. "
  introText2 = "JavaScript is one of the most popular coding languages, and together with HTML and CSS, it forms the base of modern web development. HTML codes the structure of a website, CSS dictates its style, and JavaScript enables its interactivity. "

  constructor() { }

  ngOnInit(): void {
  }

}
