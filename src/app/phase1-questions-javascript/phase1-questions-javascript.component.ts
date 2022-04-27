import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { QuestionService } from '../service/question.service';
import { Question } from '../question.model';


@Component({
  selector: 'app-phase1-questions-javascript',
  templateUrl: './phase1-questions-javascript.component.html',
  styleUrls: ['./phase1-questions-javascript.component.css']
})
export class Phase1QuestionsJavascriptComponent {

  lessons = [
    {
      lesson: 'Lesson 1',
    },
    {
      lesson: 'Lesson 2',
    },
    
    {
      lesson: 'Lesson 3',
    },
    
    {
      lesson: 'Lesson 4',
    },
    
    {
      lesson: 'Lesson 5',
    },
    
    {
      lesson: 'Lesson 6',
    },
    
    {
      lesson: 'Lesson 7',
    },
    
    {
      lesson: 'Lesson 8',
    },
    
    {
      lesson: 'Lesson 9',
    },
    
    {
      lesson: 'Lesson 10',
    },
    
    
  ]

  questions: Question[] = [];
  currentQuestion: number = -1;
  incorrectTries: number = 0;
  placeHolder: string [] = [];

  isnextDisabled = true;
  ischeckDisabled = false;
  options: string [] = [];


  drop(event: CdkDragDrop<string[]>) {
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // if (event.container.data.length >= this.questions[this.currentQuestion].correctLength())
      //   return;
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
  }
  
  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questions = this.questionService.getAll();
    this.nextQuestion();
  }

  nextQuestion(){
    this.currentQuestion++;
    this.loadQuestion();
    this.isnextDisabled = true;
    this.ischeckDisabled = false;
    this.incorrectTries = 0;
  }

  previousQuestion(){
    this.currentQuestion--;
    this.loadQuestion();
    this.isnextDisabled = false;
    this.ischeckDisabled = true;
  }

  loadQuestion()
  {
    /* Loads the question with the options as well and empties the placeholder*/
    const question = this.questions[this.currentQuestion];
    this.options = question.getOptionsArray();
    this.placeHolder = [];
  }

  validateAnswer() {
    /* When check button is pressed, it checks the answer stated in the function isCorrect
    if yes, it will return true*/
    
    const option = this.questions[this.currentQuestion];    
    if(option.isCorrectSequence(this.placeHolder))
    {
      alert('good job')
      this.isnextDisabled = false;
    }else{
    alert('try again')
    this.incorrectTries++;
    // Store incorrectTries list from whatever to string
    localStorage.setItem("attempts tried",JSON.stringify(this.incorrectTries));
    console.log("Incorrect tries:", this.incorrectTries);
    }
  }

}
