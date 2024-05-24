import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  //template: '<p> Welcome Checkout</p> ' +
    //        '<h5>Cart Count: {{cartcount}}</h5> ',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @Input() cartcount:number = 0;
  checkoutmap = new Map<string, number>();
  cartproducts = [];

  @Output() onRegister = new EventEmitter<string>();
  
  register(productName: string) {
    this.onRegister.emit(productName);
  }
  
  @Input() set checkout(productname : string) {
    this.cartproducts = [];

    if(this.checkoutmap.size > 0) {
      for (let entry of this.checkoutmap.entries()) {  
        if(entry[0] != undefined && entry[0].localeCompare(productname) == 0)  {
          this.checkoutmap.set(productname, entry[1]+1);
        } else {
          this.checkoutmap.set(productname, 1);
        }
      }
    } else {
      this.checkoutmap.set(productname, 1);
    }
    
    
    for (let entry of this.checkoutmap.entries()) {  
      if(entry[0] != undefined)
      this.cartproducts.push({"product" : entry[0], "count": entry[1]} );
    }
  }
  
  constructor() { }

  ngOnInit(): void { }

}
