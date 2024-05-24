import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myHeading:string;
  enablebutton:boolean;
  displayCard:string;
  desc = "This is demo app";
  color = "red";
  displayOnClick:boolean = false;
  //productArray=[{name:"oneplus", tag:"reliable", stocks:0, availability: "Yes"}, {name:"samsung", tag:"durable", stocks:2, availability: "No"}, {name:"iphone", tag:"branded", stocks:4, availability: "Yes"}]
  productArray = [];
  inputValue:string;
  homecount:number = 0;
  checkoutmap = new Map(); 
  productname: string;
  productDelete: string;
  constructor(private apiservice: ApiService) {
      if(Math.random() > 0.5) {
        this.myHeading = "Product List Items";
        this.enablebutton = false;
        this.displayCard = "block";
      } else {
        this.myHeading = "Product List";
        this.enablebutton = true;
        this.displayCard = "none";
      }
  }

  displayItems() {
       this.desc = "The following products are shown for demo app";
       this.displayOnClick = !this.displayOnClick;
       //new ApiService().getValue(); // one way
       this.apiservice.getValue().subscribe((a) => {
               console.log(a);
               this.productArray = a;
             },
              (b) => {
              console.log(b);
             }
       );
  }

  filter() {
         this.productArray = this.productArray.filter((a) => {
             return this.inputValue === a.name;
         });
       };

  incrementcount(product) {
    this.homecount = this.homecount+1;
    this.productname = product.name;
  }

  deleteProduct(prodname: string) {
      this.productDelete = `Your Product ${prodname} removed successfully`;
  }

  ngOnInit(): void {
  }

}