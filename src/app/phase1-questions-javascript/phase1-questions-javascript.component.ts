import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { QuestionService } from '../service/question.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-phase1-questions-javascript',
  templateUrl: './phase1-questions-javascript.component.html',
  styleUrls: ['./phase1-questions-javascript.component.css']
})
export class Phase1QuestionsJavascriptComponent implements OnInit {

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
  currentQuestion : number = 0;

  placeHolder: any = [];
  options: { label: string; correct: boolean }[] = []

  
  
  drop
  (event: CdkDragDrop<[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
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
  }

  nextQuestion(){
    this.currentQuestion++;
  }
  previousQuestion(){
    this.currentQuestion--;
  }
}
