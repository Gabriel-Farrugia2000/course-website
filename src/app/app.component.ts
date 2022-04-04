import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thesis-project';

  /*
    console.log(question.getOptionsArray());
    const isFine = question.isCorrectSequence('hello', 'world', 'teams');
  }
  */
}
