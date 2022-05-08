import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fun = "fun"
  interactive = "interactive"
  introText = "Learning sometimes might be boring and not fun because most of the lessons nowadays doesn't let the learner interact with the lesson itself but with Codence it might change the way of how you might look at learning new things through it's fun and approachable way. "
  paragraphText = "Codence is an interactive programming course website where learners can learn a programming language while interacting with the lesson itself because we believe that when learners get to interact with the lesson they tend to learn more and even keep remembering what they have learned."

  title2 = "What Is Codence?"

  title3 = "Why Codence?"
  reason1 = "Teaches you from the very basics."
  reason2 = "Each phase has short lessons."
  reason3 = "You get to interect with the lesson."


  constructor() { }

  ngOnInit(): void {
  }

}
