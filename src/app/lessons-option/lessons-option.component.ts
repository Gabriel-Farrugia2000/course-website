import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { Question } from '../question.model';
import { ActivatedRoute } from '@angular/router';
import { Lesson } from '../syllabus';


@Component({
  selector: 'app-lessons-option',
  templateUrl: './lessons-option.component.html',
  styleUrls: ['./lessons-option.component.css']
})
export class LessonsOptionComponent implements OnInit {

  title = "Choose a lesson"
  lesson: Lesson | undefined;
  lessons: Lesson[] = [];
  slug!: string;
  test = 0;
  

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.lessons = this.questionService.getLessons(this.slug);
    this.test = this.questionService.getLastLesson(this.slug);
    console.log(this.test);
    
  }



}
