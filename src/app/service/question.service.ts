import { Injectable } from '@angular/core';
import { Question } from '../question.model';
import { Lesson, lessons, Syllabus } from '../syllabus';

@Injectable({
  providedIn: 'root'
})
export class QuestionService{

  syllabus: Syllabus[] = lessons;
  

  
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
  }

  nextQuestion(slug: string, lessonSlug: string): string
  {
    const lesson = this.getLessons(slug);
    const index = lesson.findIndex(i => i.slug === lessonSlug);
    return (index < lesson.length - 1) ? lesson[index + 1].slug : '';
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
