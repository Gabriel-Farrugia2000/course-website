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
      1,
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
      1,
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
    ),
    new Question(
      1,
      4,
      'Test4:',
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
      1,
      5,
      'Test5:',
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
      1,
      6,
      'Test6:',
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
      1,
      7,
      'Test7:',
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
      1,
      8,
      'Test8:',
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
      1,
      9,
      'Test9:',
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
      1,
      10,
      'Test10:',
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
      1,
      'Loops:', 
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
  ];
  
  getAll(): Question[]
  {
    //converts questions to a different type of array
    const attempts = this.questions.map(q => {return { id: q.questionID, attempts: q.attempts}});
    return this.questions
  }

  getLesson(lessonID: number): Question[]
  {
    //converts questions to a different type of array
    const attempts = this.questions.map(q => {return { id: q.questionID, attempts: q.attempts}});
    return this.questions.filter(i => i.questionID == lessonID);
  }

  getSyllabus(syllabusID: number): Question[]
  {
    //converts questions to a different type of array
    const attempts = this.questions.map(q => {return { id: q.questionID, attempts: q.attempts}});
    return this.questions.filter(i => i.syllabusID == syllabusID);
  }
}
