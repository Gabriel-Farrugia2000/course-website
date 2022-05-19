import { Attribute, Component, OnDestroy, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { QuestionService } from '../service/question.service';
import { Question } from '../question.model';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { Lesson, lessons, Syllabus } from '../syllabus';
import { findIndex, Subscription } from 'rxjs';

declare var Swal: any;

@Component({
  selector: 'app-phase1-questions-javascript',
  templateUrl: './phase1-questions-javascript.component.html',
  styleUrls: ['./phase1-questions-javascript.component.css']
})
export class Phase1QuestionsJavascriptComponent implements OnInit, OnDestroy
{

  lessonID = '';
  slug!: string;
  lessonSlug!: string;
  questions: Question[] = [];
  currentQuestion: number = 0;
  reachedQuestion: number = -1;
  incorrectTries: number [] = [];
  placeHolder: string [] = [];
  progress: number = 0;
  isquizCompleted: boolean = false;
  syllabus: Syllabus | undefined;
  lesson: Lesson | undefined;
  lessons: Lesson[] = [];
  nextSlug: string = '';
  routerSubscription!: Subscription;
  

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
  
  constructor(private questionService: QuestionService, private route:ActivatedRoute, private router:Router) { 
    this.routerSubscription = router.events.subscribe(e => {
      if(e instanceof NavigationEnd) this.ngOnInit();
      
    });
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.lessonSlug = this.route.snapshot.params['lessonSlug'];
    this.lessons = this.questionService.getLessons(this.slug);
    this.lesson = this.questionService.getLesson(this.slug, this.lessonSlug);
    this.nextSlug = this.questionService.nextQuestion(this.slug, this.lessonSlug);
    this.syllabus = this.questionService.getSyllabus(this.slug);
    // this.lessonID = this.questionService.getLessonIndex(this.slug, this.lessonSlug);
    this.loadQuestion();
    this.isnextDisabled = true;
    console.log(this.lessonID);
    

    
    // const currentLesson = this.lessons.findIndex(s => s.slug === this.lesson.findIndex( ))
  
    
    //this.options = (this.lesson as Lesson).question.getOptionsArray();

      //this.options = this.lesson.question.getOptionsArray();

    //this.options = question.getOptionsArray(this.options);
    //this.placeHolder = [];
    // const question = this.questions[this.currentQuestion];
    // this.options = question.getOptionsArray();
    //console.log(this.options);
    
    /*
    this.syllabusID=parseInt(this.route.snapshot.params['slug']);
    this.lessons = this.questionService.getLesson(this.slug);
    /*
    this.lessonID=parseInt(this.route.snapshot.params['lessonID']);
    this.questions = this.questionService.getLesson(this.lessonID);
    /*
    if(this.lessonID == 0){
      this.router.navigate(['syllabus/lessons'])
    }
    */
    // this.nextQuestion();
    //this.loadQuestion(this.lessonID);
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  nextQuestion(){
    this.nextSlug = this.questionService.nextQuestion(this.slug, this.lessonSlug);
    this.getprogressPercent();
    
    // if (typeof(this.lesson) === 'object')
    // {
    // const currentID = this.lesson.findIndex(e => e.slug === this.slug);
    // return currentID + 1;
    // // const currentID = this.lesson.findIndex(e => e.slug === this.lessonSlug);
    // // return currentID + 1;
    // }

    // const options = this.lesson.question;
    // if(options.isCorrectSequence(this.placeHolder))
    // {
    //   alert('good job')
    //   this.isnextDisabled = false;
    
    //this.loadQuestion(this.currentQuestion + 1);
    // this.isnextDisabled = true;
    // this.ischeckDisabled = false;
    // this.getprogressPercent();
  }

  previousQuestion(){
    //this.router.navigate(['/syllabus/', this.slug,  this.lessonSlug- 1]);

    // this.loadQuestion(this.currentQuestion - 1);
    // this.isnextDisabled = false;
    // this.ischeckDisabled = true;
    // this.getprogressPercent();
  }

  loadQuestion()
  {
    if (typeof(this.lesson) === 'object')
    {
      const options = this.lesson.question;
      this.options = options.getOptionsArray();
      this.placeHolder = [];
    }
    // if(this.currentQuestion > this.reachedQuestion)
    //     this.reachedQuestion = this.currentQuestion;

    // if(this.currentQuestion == this.questions.length){
    //     this.isquizCompleted = true;
    // }else{
    /* Loads the question with the options as well and empties the placeholder*/
    // const question = this.questions[this.currentQuestion];
    // this.options = question.getOptionsArray();
    // this.placeHolder = [];
  //}
}

  validateAnswer() {
    /* When check button is pressed, it checks the answer stated in the function isCorrect
    if yes, it will return true*/
    
    if (typeof(this.lesson) === 'object')
    {
      const options = this.lesson.question;
      if(options.isCorrectSequence(this.placeHolder))
      {
        Swal.fire(
          'Well Done!',
          '',
          'success'
        )
        this.isnextDisabled = false;
        // get lesson index
        const syllabusSlug = this.route.snapshot.params['slug'];
        this.questionService.setLastLesson(syllabusSlug, this.lessonSlug);
      }else{
        Swal.fire(
          'Incorrect',
          'Try Again!',
          'error'
        )
      this.lesson.question.attempts++;
      }
    }
  }

  getprogressPercent(){
    if (typeof(this.lesson) === 'object')
    {
      this.progress = (this.lessons.length/ this.questions.length) *100;
    }
    return this.progress;
  }

  displayContainer(){
    /*
    this.lessonID = this.nextSlug;
      if(this.nextSlug == this.lessons.length){
        this.isquizCompleted = true;
    }  
    */
  }
}

