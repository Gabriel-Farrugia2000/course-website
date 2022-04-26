import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fun = "fun"
  interactive = "interactive"
  introText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pulvinar leo eget arcu iaculis dictum. Curabitur pellentesque sapien vitae libero porta, sed tristique lorem malesuada. Aliquam et odio nulla. Sed ut lacus urna. Phasellus ac eros semper, commodo enim vitae, consequat est. Nullam aliquet eros eget dui placerat imperdiet. Aenean eu ipsum fermentum ipsum venenatis molestie. "

  title2 = "What Is Codence?"

  title3 = "Why Codence?"
  reason1 = "Teaches you from the very basics."
  reason2 = "Each phase has short lessons."
  reason3 = "You get to interect with the lesson."


  constructor() { }

  ngOnInit(): void {
  }

}
