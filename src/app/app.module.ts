import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LessonsComponent } from './lessons/lessons.component';
import { HomeComponent } from './home/home.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { RewardsComponent } from './rewards/rewards.component';
import { Phase1QuestionsJavascriptComponent} from './phase1-questions-javascript/phase1-questions-javascript.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { LessonsOptionComponent } from './lessons-option/lessons-option.component';
import { LoopsComponent } from './loops/loops.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LessonsComponent,
    HomeComponent,
    ExperiencePageComponent,
    RewardsComponent,
    Phase1QuestionsJavascriptComponent,
    SyllabusComponent,
    LessonsOptionComponent,
    LoopsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatDialogModule,
    DragDropModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
