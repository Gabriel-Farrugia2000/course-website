import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { Question } from '../question.model';
import { QuestionService } from '../service/question.service';
import { lessons, Syllabus } from '../syllabus';



@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {

  title = "Choose A Syllabus"
  /*
  questions: Question[] = [];
  */
  lessons: Syllabus [] = [];

  constructor(private questionService: QuestionService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    
    this.lessons = this.questionService.getAll();

  /*
    this.slug = this.route.snapshot.params['slug'];
    this.questions = this.questionService.getSyllabus(this.slug);
*/
  }

  /*
  lessons(){
    this.router.navigate(['lessons-option'], {relativeTo:this.route});
  }
  */
}
