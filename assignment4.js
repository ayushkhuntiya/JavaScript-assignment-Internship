let output = "-- Multiplication Table of 5 --\n";
for (let i = 1; i <= 5; i++) {
    output += "5 x " + i + " = " + (5 * i) + "\n";
}
let num = 11;
while (true) {
    if (num > 10 && num % 6 === 0) {
        output += "\n-- First number > 10 divisible by 6 --\n";
        output += "Found: " + num + "\n";
        break;
    }
    num++;
}
output += "\n-- Do...While Loop with Continue --\n";
let j = 0;
do {
    j++;
    if (j === 3) {
        continue;
    }
    output += "Number: " + j + "\n";
} while (j < 5);
console.log(output);
alert(output);