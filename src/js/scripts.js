async function main() {
//Cashier Program
  let totalcost = await input("Please enter the total cost of items: ");
let payment = await input("Please enter amount of payment: ");
let discountcode = await input("Please enter discount code (0-5): ");
switch (discountcode) {
  
  case "0":
    discountpercent = 0; //no discount
    break;

  case "1":
    discountpercent = 10; //10% discount
    break;

  case "2":
    discountpercent = 15; //15% discount

  case "3":
    discountpercent = 25; //25% discount
    break;

  case "4":
    discountpercent  = 35; //35% discount
    break;

  case "5":
    discountpercent = 40; //40% discount

}

let discountedtotal = totalcost * (discountpercent / 100);
let finaltotal = totalcost - discountedtotal;

let moneyback = payment - finaltotal;

if (moneyback < 0) {
  output("Insufficient payment");
} else {
  output(moneyback);
}

}



  

