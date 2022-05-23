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

  getSyllabus(slug: string): Syllabus | undefined
  {
    return this.syllabus.find(i => i.slug === slug);
  }

  getLessons(slug: string): Lesson[]
  {
    const syllabus = this.getSyllabus(slug);
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

  getLessonIndex(slug: string, lessonSlug: string): number
  {
    const lesson = this.getLessons(slug);
    const index = lesson.findIndex(i => i.slug === lessonSlug);
    return index;
  }

  getLastLesson(slug: string): number
  {
    const syllabus = this.getSyllabus(slug);

    if (syllabus === undefined) return 0;
    return syllabus.lastLessonIndex || 0;
  }

  setLastLesson(slug: string, lessonSlug: string)
  {
    const syllabus = this.getSyllabus(slug);

    if (syllabus !== undefined)
    {
      const index = syllabus.lessons.findIndex(i => i.slug === lessonSlug);
      syllabus.lastLessonIndex = index;
    }
  }

  isComplete(slug: string): boolean
  {
    const syllabus = this.getSyllabus(slug);

    if (syllabus !== undefined && syllabus.lastLessonIndex !== undefined)
    {
      return syllabus.lastLessonIndex >= syllabus.lessons.length - 1;
    }
    return false;
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
