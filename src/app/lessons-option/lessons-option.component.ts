import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { Question } from '../question.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lessons-option',
  templateUrl: './lessons-option.component.html',
  styleUrls: ['./lessons-option.component.css']
})
export class LessonsOptionComponent implements OnInit {

  title = "Choose a lesson"
  questions: Question[] = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questions = this.questionService.getSyllabus(1);
  }



}
