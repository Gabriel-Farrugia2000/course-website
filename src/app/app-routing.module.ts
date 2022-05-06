import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsComponent } from './lessons/lessons.component';
import { RewardsComponent } from './rewards/rewards.component';
import { HomeComponent } from './home/home.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { Phase1QuestionsJavascriptComponent } from './phase1-questions-javascript/phase1-questions-javascript.component';
import { SyllabusComponent } from './syllabus/syllabus.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'lessons', component: LessonsComponent },
  {path: 'syllabus', component: SyllabusComponent },
  {path: 'rewards', component: RewardsComponent },
  {path: "experience-page", 
    children: [
    {
      path: '',
      component: ExperiencePageComponent
    },
    {
      path: ':lessonID',
      children:[
        {
          //score by ID
          path: '',
          children:[
            {
              path: '',
              loadChildren: () => import('../score-details/score-details.module').then(m => m.ScoreDetailsPageModule)
            }
    }
  path: 'phase1-questions-javascript', component: Phase1QuestionsJavascriptComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
