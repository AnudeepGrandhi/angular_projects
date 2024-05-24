let pName:string = "Samsung Galaxy Note 7";
let pPrice:string = "699";
let pAvailable:string = "Available";
const pDiscount:string = "15";

// declaring enum variable and assigning default values
enum MobilePrice {BLACK = 250000, GOLD = 28000, White= 30000}
pPrice = MobilePrice.BLACK.toString();

document.getElementById("pName").innerHTML = pName;
document.getElementById("pPrice").innerHTML= pPrice;
document.getElementById("pAvailable").innerHTML= pAvailable;
document.getElementById("pDiscount").innerHTML= pDiscount;

function calculateAmount(price:number) {
    let totalAmount:number = price;
    let discount:number; 
    if(price == MobilePrice.BLACK) {
        discount = 5;
    } else if(price == MobilePrice.GOLD) {
        discount = 10;
    } else {
        discount = 15;
    }
    
    totalAmount = totalAmount - totalAmount*(discount/100);
    document.getElementById("pPrice").innerHTML= totalAmount.toString();

}