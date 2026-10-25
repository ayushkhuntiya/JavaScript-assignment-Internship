let billAmount = Number(prompt("Enter your bill amount:", "100"));
let tipPercentage = Number(prompt("Enter tip percentage:", "15"));

let tipAmount = billAmount * tipPercentage / 100;
let totalAmount = billAmount + tipAmount;

let output =
    "Subtotal: $" + billAmount +
    "\nTip Percentage: " + tipPercentage + "%" +
    "\nCalculated Tip: $" + tipAmount +
    "\nTotal Amount to Pay: $" + totalAmount;

console.log(output);
alert(output);