import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {
  quizQuesions:any;

  constructor(private apiservice: ApiService) { 
    this.apiservice.getQuizQuestions(1).subscribe((a) => {
      console.log(a);
      this.quizQuesions = a;
    },
    (b) => {
    console.log(b);
    }
  );

  }
  
  ngOnInit(): void {
    
  }

  

}
