import { Question } from "./question.model";

export interface Syllabus
{
    name: string;
    slug: string;
    lessons: Lesson[];
}

export interface Lesson
{
    name: string;
    slug: string;
    question: Question;
}

export const EXAMPLE: Syllabus[] = [{
    name: 'Functions',
    slug: 'functions',
    lessons: [
        {
            name: 'Lesson 1',
            slug: 'lesson-1',
            question: new Question(
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
},
// {
//     name: 'Loops'
// }
]