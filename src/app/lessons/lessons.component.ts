import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  introText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar leo eget arcu iaculis dictum. Curabitur pellentesque sapien vitae libero porta, sed tristique lorem malesuada. Aliquam et odio nulla. Sed ut lacus urna. Phasellus ac eros semper, commodo enim vitae, consequat est. Nullam aliquet eros eget dui placerat imperdiet. Aenean eu ipsum fermentum ipsum venenatis molestie. "

  constructor() { }

  ngOnInit(): void {
  }

}
