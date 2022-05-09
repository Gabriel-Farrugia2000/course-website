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
  syllabusID: number = -1;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService) { }

  ngOnInit(): void {
    this.syllabusID = this.route.snapshot.params['syllabusID'];
    this.questions = this.questionService.getSyllabus(this.syllabusID);
  }



}
