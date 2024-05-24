import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizs:any[];
  constructor(private apiservice: ApiService) { 
    this.apiservice.getQuizs().subscribe((a) => {
      console.log(a);
      this.quizs = a;
    },
    (b) => {
    console.log(b);
    }
  );
  }

  ngOnInit(): void {
  }

}
