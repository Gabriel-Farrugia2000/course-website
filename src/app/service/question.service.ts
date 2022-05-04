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
    //converts questions to a different type of array
    const attempts = this.questions.map(q => {return { id: q.questionID, attempts: q.attempts}});
    return this.questions;
  }

  increaseAttempts()
  {
    const attempt = this.questions.find(q => q.attempts);
    if (attempt) attempt.attempts++;
    /*
    const attempt = this.attempts.find(q => q.questionID == 1);
    if (attempt) attempt.attempts++;
    console.log("Attempts", attempt);
    /*
    const option = this.options.find((option) => option.label === answer);
    if (!option) return false;
    return option.correct;
*/
/*
    const attempt = this.questions.find((attempt) => attempt.attempts)
    attempt.attempts++;
    console.log("Attempts:", attempt);

    increaseAttempts(){
        this.attempts++;
        console.log("Attempts", this.attempts);
        /*
        const attempt = this.attempts.find(q => q.questionID == 1);
        if (attempt) attempt.attempts++;
        */
    
  }
  
}
