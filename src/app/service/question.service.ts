import { Injectable } from '@angular/core';
import { Question } from '../question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService
{
  questions: Question[] = [
    new Question(
      1,
      'Put these in an order that creates a for loop:', 
      0,
    [
      {
        order: 0,
        label: 'for (var i = 0; i < 10; i++)',
        correct: true
      },
      {
        order: 1,
        label: '{',
        correct: true
      },
      {
        order: 2,
        label: 'console.log(i);',
        correct: true
      },
      {
        label: 'console.log(j);',
        correct: false
      },
      {
        order: 3,
        label: '}',
        correct: true
      }
    ]
    ),
    new Question(
      2,
      'Test2:', 
      0,
    [
      {
        order: 0,
        label: 'for (var i = 0; i < 10; i++)',
        correct: true
      },
      {
        order: 1,
        label: '{',
        correct: true
      },
      {
        order: 2,
        label: 'console.log(i);',
        correct: true
      },
      {
        label: 'console.log(j);',
        correct: false
      },
      {
        order: 3,
        label: '}',
        correct: true
      }
    ]
    ),
    new Question(
      3,
      'Test3:',
      0,
    [
      {
        order: 0,
        label: 'for (var i = 0; i < 10; i++)',
        correct: true
      },
      {
        order: 1,
        label: '{',
        correct: true
      },
      {
        order: 2,
        label: 'console.log(i);',
        correct: true
      },
      {
        label: 'console.log(j);',
        correct: false
      },
      {
        order: 3,
        label: '}',
        correct: true
      }
    ]
    )
  ];
  
  getAll(): Question[]
  {
    return this.questions;
  }
  
  
}
