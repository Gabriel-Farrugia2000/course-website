import { Question } from "./question.model";

export interface Syllabus
{
    name: string;
    slug: string;
    lessons: Lesson[];
    lastLessonIndex?: number;
}

export interface Lesson
{
    lessonID: number;
    name: string;
    slug: string;
    question: Question;
}

export const lessons: Syllabus[] = [{
    name: 'Functions',
    slug: 'functions',
    lessons: [
    {
            lessonID: 1,
            name: 'Lesson 1',
            slug: 'lesson-1',
            question: new Question(
              'Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it. A function consists of the name of the function, a list of parameters to the function, enclosed in parentheses and separated by commas, and the JavaScript statements that define the function, enclosed in curly brackets.',
              'Put these in an order that creates a function',
                [
                    {
                      order: 0,
                      label: 'function myFunction(p1, p2)',
                      correct: true
                    },
                    {
                      order: 3,
                      label: '}',
                      correct: true
                    },
                    {
                      order: 2,
                      label: 'return p1 * p2',
                      correct: true
                    },
                    {
                      label: 'myFunction(p1, p2):',
                      correct: false
                    },
                    {
                      label: 'p1 * p2',
                      correct: false
                    },
                    {
                      order: 1,
                      label: '{',
                      correct: true
                    }
                  ]
            )
        },
        {
          lessonID: 2,
          name: 'Lesson 2',
          slug: 'lesson-2',
          question: new Question(
            'Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it. A function consists of the name of the function, a list of parameters to the function, enclosed in parentheses and separated by commas, and the JavaScript statements that define the function, enclosed in curly brackets.',
              'Put these in order that creates a function that will return an output of 12',
              [
                  {
                    order: 0,
                    label: 'let x = myFunction(4, 3);',
                    correct: true
                  },
                  {
                    order: 3,
                    label: 'return a * b; ',
                    correct: true
                  },
                  {
                    order: 1,
                    label: 'function myFunction(a, b)',
                    correct: true
                  },
                  {
                    label: 'return (a * b); ',
                    correct: false
                  },
                  {
                    order: 2,
                    label: '{',
                    correct: true
                  },
                  {
                    label: 'let x = myFunction(4, 3)',
                    correct: false
                  },
                  {
                    order: 4,
                    label: '}',
                    correct: true
                  }
                ]
          )
      },
      {
        lessonID: 3,
        name: 'Lesson 3',
        slug: 'lesson-3',
        question: new Question(
          'Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it. A function consists of the name of the function, a list of parameters to the function, enclosed in parentheses and separated by commas, and the JavaScript statements that define the function, enclosed in curly brackets.',
            'Put these in order that creates a function and calls the function',
            [
                {
                  label: '("Hello there");',
                  correct: false
                },
                {
                  order: 3,
                  label: '} ',
                  correct: true
                },
                {
                  order: 0,
                  label: 'function greet()',
                  correct: true
                },
                {
                  order: 4,
                  label: 'greet();',
                  correct: true
                },
                {
                  order: 2,
                  label: 'console.log("Hello there");',
                  correct: true
                },
                {
                  order: 1,
                  label: '{',
                  correct: true
                }
              ]
        )
    },
    {
      lessonID: 4,
      name: 'Lesson 4',
      slug: 'lesson-4',
      question: new Question(
        'Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it. A function consists of the name of the function, a list of parameters to the function, enclosed in parentheses and separated by commas, and the JavaScript statements that define the function, enclosed in curly brackets.',
          'Put these in order that creates a function and calls all of the functions',
          [
              {
                order: 2,
                label: ' console.log(a + b);',
                correct: true
              },
              {
                label: 'plus(2,9);',
                correct: false
              },
              {
                order: 3,
                label: '}',
                correct: true
              },
              {
                order: 4,
                label: 'add(3,4);',
                correct: true
              },
              
              {
                label: '(a + b);',
                correct: false
              },
              {
                order: 1,
                label: '{',
                correct: true
              },
              {
                order: 5,
                label: 'add(2,9);',
                correct: true
              },
              {
                order: 0,
                label: 'function add(a, b)',
                correct: true
              }
            ]
          )
        },
        {
          lessonID: 5,
          name: 'Lesson 5',
          slug: 'lesson-5',
          question: new Question(
            'Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it. A function consists of the name of the function, a list of parameters to the function, enclosed in parentheses and separated by commas, and the JavaScript statements that define the function, enclosed in curly brackets.',
              'Put these in order that define variables in the global scope, a function to multiply between 2 numbers and outputs 60 as result',
              [
                  {
                    order: 0,
                    label: 'var num1 = 20,',
                    correct: true
                  },
                  {
                    order: 3,
                    label: '{',
                    correct: true
                  },
                  {
                    order: 1,
                    label: 'num2 = 3;',
                    correct: true
                  },
                  {
                    label: 'num2 = 4;',
                    correct: false
                  },
                  {
                    order: 4,
                    label: 'return num1 * num2;',
                    correct: true
                  },
                  {
                    order: 2,
                    label: 'function multiply()',
                    correct: true
                  },
                  {
                    label: 'name = Chamakh;',
                    correct: false
                  },
                  {
                    order: 5,
                    label: '}',
                    correct: true
                  },
                  {
                    order: 6,
                    label: 'multiply();',
                    correct: true
                  },
                ]
              )
            },   
            {
              lessonID: 6,
              name: 'Lesson 6',
              slug: 'lesson-6',
              question: new Question(
                'Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it. A function consists of the name of the function, a list of parameters to the function, enclosed in parentheses and separated by commas, and the JavaScript statements that define the function, enclosed in curly brackets.',
                  'Put these in order which uses multiple return statements in a function to return different values based on conditions',
                  [
                      {
                        order: 2,
                        label: ' return -1;',
                        correct: true
                      },
                      {
                        order: 1,
                        label: 'if (a > b) {',
                        correct: true
                      },
                      {
                        order: 3,
                        label: ' } else if (a < b) {',
                        correct: true
                      },
                      {
                        order: 4,
                        label: 'return 1;',
                        correct: false
                      },
                      {
                        order: 0,
                        label: 'function compare(a, b) {',
                        correct: true
                      },
                      {
                        order: 5,
                        label: '} return 0;',
                        correct: true
                      },
                      {
                        label: 'if ( b > c) {',
                        correct: false
                      },
                      {
                        order: 6,
                        label: '}',
                        correct: true
                      },
                      {
                        label: 'return 2;',
                        correct: false
                      },
                    ]
                  )
                }    
              ]
    },
  {
      name: 'Loops',
      slug: 'loops',
      lessons: [
        {
            lessonID: 1,
            name: 'Lesson 1',
            slug: 'lesson-1',
            question: new Question(
                'Test',
                'Put these in an order that creates a for loop:',
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
        }
    ]
  }
  ];



