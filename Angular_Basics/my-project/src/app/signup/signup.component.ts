import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform:FormGroup;
  constructor(private fb: FormBuilder, private apiservice: ApiService) { }
  
  ngOnInit(): void {
     console.log("Initialization");

     this.signupform = this.fb.group({
          name:[null,  { updateOn: 'blur', validators: [Validators.required, Validators.minLength(5)]}],
          stocks:[null,Validators.required],
          tag:[null,Validators.required]
     })

  }

  addproduct(){
    console.log(this.signupform.value);
    this.apiservice.postForm(this.signupform.value).subscribe((a) => {
       console.log("Added Successfully");
       this.signupform.reset();
    }, (b) => {
       console.log("Not Added Successfully");
    })
  }

}