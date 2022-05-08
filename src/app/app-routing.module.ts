import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsComponent } from './lessons/lessons.component';
import { RewardsComponent } from './rewards/rewards.component';
import { HomeComponent } from './home/home.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { Phase1QuestionsJavascriptComponent } from './phase1-questions-javascript/phase1-questions-javascript.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { LessonsOptionComponent } from './lessons-option/lessons-option.component';
import { LoopsComponent } from './loops/loops.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'lessons', component: LessonsComponent },
  {path: 'syllabus',
  children: [
      {path: '', component: SyllabusComponent},
      {path: 'functions',
        children: [
          {path: '', component: LessonsOptionComponent},
          {path: ':lessonID', component:Phase1QuestionsJavascriptComponent}
        ]
        },
      {path: 'loops',
      children: [
        {path: '', component: LoopsComponent},
        {path: ':lessonID', component:Phase1QuestionsJavascriptComponent}
      ]
      },
    ]
  },
  {path: 'rewards', component: RewardsComponent },
  {path: "experience-page", component: ExperiencePageComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
