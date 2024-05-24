
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getValue() {
    return this.http.get<any>("http://localhost:3001/products");
  }

  postForm(data) {
    return this.http.post("http://localhost:3001/products", data)
  }

  getQuizs() {
    return this.http.get<any>("http://localhost:8080/api/quizes/");
  }

  getQuizQuestions(quizId) {
    return this.http.get<any>("http://localhost:8080/api/quiz-questions/"+quizId);
  }
}