console.log("Data types and Variable Declaration Start");
//variable basics
let myname;
const myage=28;
//data type - number, string, boolean, undefined, any, array, object
myname="string";//string
let mynum =23;
mynum=23.5;//number
let istrue = true;
//explicitly define a type
let mycourse:string;
let othernum:number;
let universe:any;
universe='ee';
universe=232;
universe=true;


console.log(mycourse);
//array and objects
let myarray:number[] =[1,2,4,5];
// myarray=['a','b'] string []
let myhobbies :any[]=[23,'cricket',true]
let myobject:{name:string,age:number} ={name:"sam",age:23}
console.log("Data types and Variable Declaration End");
console.log("-----------------------------------------------------");

console.log("Function Overloading Start");
//function overloading
function myfunction(a:string,b:string):string;
function myfunction(a:number,b:number):number;
function myfunction(a:any, b:any):any {
    return a+b; 
}
//function overloading
console.log(myfunction("Hello", "Anudeep"));
console.log(myfunction(1,2));
console.log("Function Overloading End");
console.log("-----------------------------------------------------");

console.log("Classes, Functions and Arrow Functions Start");
const myarrowfun = (a:number,b:string):string =>  {     //arrow function
    console.log('inisde arrow function');
    console.log(a,b);
    return b;
};

let returnedvalue = myarrowfun(2,'s')
console.log('the return value', returnedvalue);

//class
class Project {
    budget =2000;

    ///using access modifier is another way of declaring class variable and assigning value while object creations
    constructor(private projname:string, cost){
    this.budget=cost; 
    //this.projname=name;
    }
    getvalue(){
        console.log('inisde function', this.projname);  
        function fun(a:number,b:string)  {     //arrow function
            console.log('inisde function', this.projname);
            console.log(a,b);
            return b;
        };
        fun(2,"5");
    }

    myfun = (a:number,b:string) =>  {     //arrow function
        console.log('inisde function', this.projname);
        console.log(a,b);
        return b;
    };

}

let obj = new Project('Anudeep', 5);
obj.getvalue();
console.log(obj.myfun(2,"5"));
console.log("Classes, Functions and Arrow Functions End");
console.log("-----------------------------------------------------");

console.log("Optional and Default Paramters Start");
let optionalreturn = function optionalParamFunction(a:number, b?:string):string {
    return b; 
}

console.log(optionalreturn(3));

let defaultreturn = function defaultParamFunction(a:number=10, b?:string):string {
    return a+b; 
}

console.log(defaultreturn(undefined,"3"));
console.log(defaultreturn(5,"3"));
console.log("Optional and Default Paramters End");
console.log("-----------------------------------------------------");

console.log("Static functions and variables Start");
class Product {
    static productname:String = "Mobile";
    productColor:String = "Red";

    //static function can access only static variables
    static getProductName():string {
        return "Product is "+ Product.productname;
    }

    getProductDetails():string {
        return "Product is "+ Product.productname+ " and the color is "+ this.productColor;
    }
}

Product.productname = "Tablet";
console.log(Product.productname);
console.log(Product.getProductName());
let product = new Product();
console.log(product.getProductDetails());
console.log("Static functions and variables End");
console.log("-----------------------------------------------------");

console.log("Interface Start");
///interface
interface ProductInterface {
    productId:number;
    productName:string;
}

function getInterfaceProduct(prodObj:ProductInterface):string {
     return prodObj.productId +" "+ prodObj.productName;
}

let prodObj = {productId:1234, productName:'Mobile'};
console.log("Interface Product Details: "+ getInterfaceProduct(prodObj));

let prodObj2 = {productId:"1234", productName:'Mobile'};
//console.log("Interface Product Details: "+ getInterfaceProduct(prodObj2)); --- Compiletime error
console.log("Interface End");
console.log("-----------------------------------------------------");

console.log("Interface - Duck Typing Start");
//Duck Typing - additional properties which are not part of Interface will be ignored for type checking
let prodObj3 = {productId:1235, productName:'Mobile', productCategory:"Smart Device"};
console.log("Interface Product Details: "+ getInterfaceProduct(prodObj3));
console.log("Interface - Duck Typing End");
console.log("-----------------------------------------------------");

///Interface to a Function Type
console.log("Interface to Funtion Type Start");
// declaring a function
function CreateCustomerID(name: string, id: number): string {
    return 'The customer id is ' + name + ' ' + id;
}

    // declaring a interface with function type
interface StringGenerator {
    (chars: string, nums: number): string;
}

    // creating reference variable of above declared interface
let idGenerator: StringGenerator;

    // assignment of function to interface reference variable
idGenerator = CreateCustomerID;

console.log(idGenerator('Mr.Tom', 101));
console.log("Interface to Funtion Type End");
console.log("-----------------------------------------------------");

//Extending an Interface
console.log("Extending an Interface Start");
// declaring a Category interface
interface Category {
    categoryName: string;
}

// declaring a Product interface
interface ProductExt {
        productName: string;
        productId: number;
}

// declaring a ProductList interface which is extends from Category and Product interfaces
interface ProductList extends Category, ProductExt {
        list: Array<string>;
}

// declaring a variable which is type of ProductList interface
let productExtDetails: ProductList = {
        categoryName: 'Gadget',
        productName: 'Mobile',
        productId: 1234,
        list: ['Samsung', 'Motorola', 'LG']
    };

console.log(productExtDetails);
console.log("Extending an Interface End");
console.log("-----------------------------------------------------");

console.log("Interface to a Class Type Start");
// declaring a Product interface
interface ProductClass {
    displayProductName: (prouctId: number) => string;
    getProductDetails(): string[];
}

// declaring Gadget class which implements Product interface
class Gadget implements ProductClass {
    getProductDetails(): string[] {
        return ['Samsung', 'LG', 'Moto'];
    }
    displayProductName(productId: number): string {
        if (productId === 101) {
            return 'Product Name is Mobile';
        } else if ( productId === 201) {
            return 'Product Name is Tablet';
        }
    }

    getGadget(): string[] {
        return ['Mobile', 'Tablet', 'iPad', 'iPod'];
    }
}

// creating instance of class of interface type
let gadget: ProductClass = new Gadget();

// line to populate Product name on console
console.log(gadget.displayProductName(101));

console.log("Interface to a Class Type End");
console.log("-----------------------------------------------------");

console.log("Exporting Module Start");
// export {Gadget as gadget};
// export {Gadget};
console.log("Interface to a Class Type End");
console.log("-----------------------------------------------------");