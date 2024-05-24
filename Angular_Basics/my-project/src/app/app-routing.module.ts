import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { PipesComponent } from './pipes/pipes.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
     {path:"home",component:HomeComponent},
     {path:"", redirectTo:"home", pathMatch:"prefix"},
     {path:"signup",component:SignupComponent},
     {path:"pipes",component:PipesComponent},
     {path:"forms",component:CourseFormComponent},
     {path:"quizs",component:QuizComponent},
     {path:"quiz-questions",component:QuizQuestionsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }