import { Attribute, Component, OnInit } from '@angular/core';
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
  reachedQuestion: number = -1;
  incorrectTries: number [] = [];
  placeHolder: string [] = [];
  progress: number = 0;
  isquizCompleted: boolean = false;

  isnextDisabled: boolean = true;
  ischeckDisabled: boolean = false;
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
    this.loadQuestion(this.currentQuestion + 1);
    this.isnextDisabled = true;
    this.ischeckDisabled = false;
    this.getprogressPercent();
  }

  previousQuestion(){
    this.loadQuestion(this.currentQuestion - 1);
    this.isnextDisabled = false;
    this.ischeckDisabled = true;
    this.getprogressPercent();
  }

  loadQuestion(index: number)
  {
    this.currentQuestion = index;
    if(this.currentQuestion > this.reachedQuestion)
        this.reachedQuestion = this.currentQuestion;

    if(this.currentQuestion == this.questions.length){
        this.isquizCompleted = true;
    }else{
    /* Loads the question with the options as well and empties the placeholder*/
    const question = this.questions[this.currentQuestion];
    this.options = question.getOptionsArray();
    this.placeHolder = [];
  }
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
    const attempt = this.questions[this.currentQuestion];
    attempt.attempts++;
    console.log(attempt.attempts)

    /*
    const attempt = this.questions[this.currentQuestion];
    this.incorrectTries = attempt.increaseAttempts();
      

  
    /*
    localStorage.setItem("attemptsList",JSON.stringify(this.incorrectTries));
    console.log("Incorrect tries:", this.incorrectTries);
     // @ts-ignore
    JSON.parse(localStorage.getItem("attemptsList"))
    */
    }
  }

  getprogressPercent(){
    this.progress = (this.currentQuestion/this.questions.length) *100;
    return this.progress;
  }

  displayContainer(){
    if(this.currentQuestion == this.questions.length){
      this.isquizCompleted = true;
    }
  }
}
