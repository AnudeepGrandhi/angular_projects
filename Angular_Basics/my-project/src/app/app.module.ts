import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { SignupComponent } from './signup/signup.component';
import { PipesComponent } from './pipes/pipes.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import { QuizComponent } from './quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    HomeComponent,
    SignupComponent,
    PipesComponent,
    CourseFormComponent,
    QuizQuestionsComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
