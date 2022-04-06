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
  currentQuestion : number = -1;

  placeHolder: string [] = [];

  options: string [] = [];


  drop(event: CdkDragDrop<string[]>) {
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.container.data.length >= this.questions[this.currentQuestion].correctLength())
        return;
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
  }
  previousQuestion(){
    this.currentQuestion--;
    this.loadQuestion();
  }

  loadQuestion()
  {
    const question = this.questions[this.currentQuestion];
    this.options = question.getOptionsArray();
    this.placeHolder = [];
  }
}
