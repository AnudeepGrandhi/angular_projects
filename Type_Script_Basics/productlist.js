var pName = "Samsung Galaxy Note 7";
var pPrice = "699";
var pAvailable = "Available";
var pDiscount = "15";
// declaring enum variable and assigning default values
var MobilePrice;
(function (MobilePrice) {
    MobilePrice[MobilePrice["BLACK"] = 250000] = "BLACK";
    MobilePrice[MobilePrice["GOLD"] = 28000] = "GOLD";
    MobilePrice[MobilePrice["White"] = 30000] = "White";
})(MobilePrice || (MobilePrice = {}));
pPrice = MobilePrice.BLACK.toString();
document.getElementById("pName").innerHTML = pName;
document.getElementById("pPrice").innerHTML = pPrice;
document.getElementById("pAvailable").innerHTML = pAvailable;
document.getElementById("pDiscount").innerHTML = pDiscount;
function calculateAmount(price) {
    var totalAmount = price;
    var discount;
    if (price == MobilePrice.BLACK) {
        discount = 5;
    }
    else if (price == MobilePrice.GOLD) {
        discount = 10;
    }
    else {
        discount = 15;
    }
    totalAmount = totalAmount - totalAmount * (discount / 100);
    document.getElementById("pPrice").innerHTML = totalAmount.toString();
}
