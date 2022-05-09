import { Attribute, Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { QuestionService } from '../service/question.service';
import { Question } from '../question.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-phase1-questions-javascript',
  templateUrl: './phase1-questions-javascript.component.html',
  styleUrls: ['./phase1-questions-javascript.component.css']
})
export class Phase1QuestionsJavascriptComponent {


  syllabusID: number = 0;
  lessonID: number = 0;
  questions: Question[] = [];
  currentQuestion: number = -1;
  reachedQuestion: number = -1;
  incorrectTries: number [] = [];
  placeHolder: string [] = [];
  progress: number = 0;
  isquizCompleted: boolean = false;

  isnextDisabled: boolean = true;
  ischeckDisabled: boolean = false;
  options: string [] = [];


  drop(event: CdkDragDrop<string[]>) {
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // if (event.container.data.length >= this.questions[this.currentQuestion].correctLength())
      //   return;
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
  }
  
  constructor(private questionService: QuestionService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.syllabusID=parseInt(this.route.snapshot.params['syllabusID']);
    this.lessonID=parseInt(this.route.snapshot.params['lessonID']);
    this.questions = this.questionService.getSyllabus(this.syllabusID);
    this.lessonID=parseInt(this.route.snapshot.params['lessonID']);
    this.questions = this.questionService.getLesson(this.lessonID);
    /*
    if(this.lessonID == 0){
      this.router.navigate(['syllabus/lessons'])
    }
    */
    // this.nextQuestion();
    this.loadQuestion(this.lessonID);
  }

  nextQuestion(){
    this.router.navigate(['/syllabus/', this.syllabusID, this.lessonID + 1]);
    // this.loadQuestion(this.currentQuestion + 1);
    // this.isnextDisabled = true;
    // this.ischeckDisabled = false;
    // this.getprogressPercent();
  }

  previousQuestion(){
    this.router.navigate(['/syllabus/', this.syllabusID, this.currentQuestion - 1]);

    // this.loadQuestion(this.currentQuestion - 1);
    // this.isnextDisabled = false;
    // this.ischeckDisabled = true;
    // this.getprogressPercent();
  }

  loadQuestion(index: number)
  {
    this.currentQuestion = index;
    if(this.currentQuestion > this.reachedQuestion)
        this.reachedQuestion = this.currentQuestion;

    if(this.currentQuestion == this.questions.length){
        this.isquizCompleted = true;
    }else{
    /* Loads the question with the options as well and empties the placeholder*/
    const question = this.questions[this.currentQuestion];
    this.options = question.getOptionsArray();
    this.placeHolder = [];
  }
}

  validateAnswer() {
    /* When check button is pressed, it checks the answer stated in the function isCorrect
    if yes, it will return true*/
    
    const option = this.questions[this.currentQuestion]; 
    if(option.isCorrectSequence(this.placeHolder))
    {
      alert('good job')
      this.isnextDisabled = false;
    }else{
    alert('try again')
    const attempt = this.questions[this.currentQuestion];
    attempt.attempts++;
    console.log(attempt.attempts)
    }
  }

  getprogressPercent(){
    this.progress = (this.currentQuestion/this.questions.length) *100;
    return this.progress;
  }

  displayContainer(){
    if(this.currentQuestion == this.questions.length){
      this.isquizCompleted = true;
    }
  }
}
