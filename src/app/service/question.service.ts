import { Injectable } from '@angular/core';
import { Question } from '../question.model';
import { Lesson, lessons, Syllabus } from '../syllabus';

@Injectable({
  providedIn: 'root'
})
export class QuestionService{

  syllabus: Syllabus[] = lessons;
  
  /*
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
      'Lesson2:', 
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
      'Lesson3:',
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
      'Lesson4:',
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
      'Lesson5:',
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
      'Lesson6:',
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
      'Lesson7:',
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
      'Lesson8:',
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
      'Lesson9:',
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
      'Lesson10:',
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

  
  */
  
  getAll(): Syllabus[]
  {
      return this.syllabus;
  }

  getLessons(slug: string): Lesson[]
  {
    const syllabus = this.syllabus.find(i => i.slug === slug);
    if (syllabus === undefined) return [];
    return syllabus.lessons;
  }

  getLesson(slug: string, lessonSlug: string): Lesson | undefined
  {
    const lesson = this.getLessons(slug);
    return lesson.find(i => i.slug === lessonSlug);
    //return lessons.find(i => i.slug === lessonSlug);
  }

  /*
  getSyllabus(syllabusID: number): Question[]
  {
    //converts questions to a different type of array
    const attempts = this.questions.map(q => {return { id: q.questionID, attempts: q.attempts}});
    return this.questions.filter(i => i.syllabusID == syllabusID);
  }
  */
  
}
