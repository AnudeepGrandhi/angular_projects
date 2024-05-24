console.log("Data types and Variable Declaration Start");
//variable basics
var myname;
var myage = 28;
//data type - number, string, boolean, undefined, any, array, object
myname = "string"; //string
var mynum = 23;
mynum = 23.5; //number
var istrue = true;
//explicitly define a type
var mycourse;
var othernum;
var universe;
universe = 'ee';
universe = 232;
universe = true;
console.log(mycourse);
//array and objects
var myarray = [1, 2, 4, 5];
// myarray=['a','b'] string []
var myhobbies = [23, 'cricket', true];
var myobject = { name: "sam", age: 23 };
console.log("Data types and Variable Declaration End");
console.log("-----------------------------------------------------");
console.log("Function Overloading Start");
function myfunction(a, b) {
    return a + b;
}
//function overloading
console.log(myfunction("Hello", "Anudeep"));
console.log(myfunction(1, 2));
console.log("Function Overloading End");
console.log("-----------------------------------------------------");
console.log("Classes, Functions and Arrow Functions Start");
var myarrowfun = function (a, b) {
    console.log('inisde arrow function');
    console.log(a, b);
    return b;
};
var returnedvalue = myarrowfun(2, 's');
console.log('the return value', returnedvalue);
//class
var Project = /** @class */ (function () {
    ///using access modifier is another way of declaring class variable and assigning value while object creations
    function Project(projname, cost) {
        var _this = this;
        this.projname = projname;
        this.budget = 2000;
        this.myfun = function (a, b) {
            console.log('inisde function', _this.projname);
            console.log(a, b);
            return b;
        };
        this.budget = cost;
        //this.projname=name;
    }
    Project.prototype.getvalue = function () {
        console.log('inisde function', this.projname);
        function fun(a, b) {
            console.log('inisde function', this.projname);
            console.log(a, b);
            return b;
        }
        ;
        fun(2, "5");
    };
    return Project;
}());
var obj = new Project('Anudeep', 5);
obj.getvalue();
console.log(obj.myfun(2, "5"));
console.log("Classes, Functions and Arrow Functions End");
console.log("-----------------------------------------------------");
console.log("Optional and Default Paramters Start");
var optionalreturn = function optionalParamFunction(a, b) {
    return b;
};
console.log(optionalreturn(3));
var defaultreturn = function defaultParamFunction(a, b) {
    if (a === void 0) { a = 10; }
    return a + b;
};
console.log(defaultreturn(undefined, "3"));
console.log(defaultreturn(5, "3"));
console.log("Optional and Default Paramters End");
console.log("-----------------------------------------------------");
console.log("Static functions and variables Start");
var Product = /** @class */ (function () {
    function Product() {
        this.productColor = "Red";
    }
    //static function can access only static variables
    Product.getProductName = function () {
        return "Product is " + Product.productname;
    };
    Product.prototype.getProductDetails = function () {
        return "Product is " + Product.productname + " and the color is " + this.productColor;
    };
    Product.productname = "Mobile";
    return Product;
}());
Product.productname = "Tablet";
console.log(Product.productname);
console.log(Product.getProductName());
var product = new Product();
console.log(product.getProductDetails());
console.log("Static functions and variables End");
console.log("-----------------------------------------------------");
console.log("Interface Start");
function getInterfaceProduct(prodObj) {
    return prodObj.productId + " " + prodObj.productName;
}
var prodObj = { productId: 1234, productName: 'Mobile' };
console.log("Interface Product Details: " + getInterfaceProduct(prodObj));
var prodObj2 = { productId: "1234", productName: 'Mobile' };
//console.log("Interface Product Details: "+ getInterfaceProduct(prodObj2)); --- Compiletime error
console.log("Interface End");
console.log("-----------------------------------------------------");
console.log("Interface - Duck Typing Start");
//Duck Typing - additional properties which are not part of Interface will be ignored for type checking
var prodObj3 = { productId: 1235, productName: 'Mobile', productCategory: "Smart Device" };
console.log("Interface Product Details: " + getInterfaceProduct(prodObj3));
console.log("Interface - Duck Typing End");
console.log("-----------------------------------------------------");
///Interface to a Function Type
console.log("Interface to Funtion Type Start");
// declaring a function
function CreateCustomerID(name, id) {
    return 'The customer id is ' + name + ' ' + id;
}
// creating reference variable of above declared interface
var idGenerator;
// assignment of function to interface reference variable
idGenerator = CreateCustomerID;
console.log(idGenerator('Mr.Tom', 101));
console.log("Interface to Funtion Type End");
console.log("-----------------------------------------------------");
//Extending an Interface
console.log("Extending an Interface Start");
// declaring a variable which is type of ProductList interface
var productExtDetails = {
    categoryName: 'Gadget',
    productName: 'Mobile',
    productId: 1234,
    list: ['Samsung', 'Motorola', 'LG']
};
console.log(productExtDetails);
console.log("Extending an Interface End");
console.log("-----------------------------------------------------");
console.log("Interface to a Class Type Start");
// declaring Gadget class which implements Product interface
var Gadget = /** @class */ (function () {
    function Gadget() {
    }
    Gadget.prototype.getProductDetails = function () {
        return ['Samsung', 'LG', 'Moto'];
    };
    Gadget.prototype.displayProductName = function (productId) {
        if (productId === 101) {
            return 'Product Name is Mobile';
        }
        else if (productId === 201) {
            return 'Product Name is Tablet';
        }
    };
    Gadget.prototype.getGadget = function () {
        return ['Mobile', 'Tablet', 'iPad', 'iPod'];
    };
    return Gadget;
}());
// creating instance of class of interface type
var gadget = new Gadget();
// line to populate Product name on console
console.log(gadget.displayProductName(101));
console.log("Interface to a Class Type End");
console.log("-----------------------------------------------------");
console.log("Exporting Module Start");
// export {Gadget as gadget};
// export {Gadget};
console.log("Interface to a Class Type End");
console.log("-----------------------------------------------------");
