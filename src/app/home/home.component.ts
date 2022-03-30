import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Turning learning into a fun and interactive way"
  introText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus ullamcorper mauris, quis lacinia nibh consectetur sed. Etiam ultrices, enim quis viverra rhoncus, diam lectus malesuada ipsum, at pretium velit nibh eget libero. Nulla tempus posuere ipsum. Curabitur eleifend dignissim tempor. Praesent enim orci, sagittis eget nunc a, rhoncus aliquam ligula. Etiam purus nisi, ullamcorper at ullamcorper maximus, semper sed est. Sed vel sem mi. Duis nunc erat, bibendum eu efficitur facilisis, luctus a velit. Phasellus sed magna quis justo commodo porttitor. Sed congue augue non lectus laoreet, eu suscipit magna egestas. Fusce rhoncus lacinia dui non pulvinar. Quisque aliquam mattis nulla, eget viverra mauris varius ut."

  title2 = "What Is Codence?"

  title3 = "What will you be doing?"
  firstStep = "First Step ----> Choose your desired course"
  secondStep = "Second Step ----> Select your experience"
  thirdStep = "Third Step ----> Start learning at your pace"
  fourthStep = "Fourth Step ----> Earn rewards for your hard work"

  constructor() { }

  ngOnInit(): void {
  }

}
