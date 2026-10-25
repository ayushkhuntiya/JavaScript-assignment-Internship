var name = "Alice";
let age = 25;
const isEmployed = true;
const skills = ["HTML", "CSS", "JavaScript"];

let output = "Name: " + name + " (Type: " + typeof name + ")\n";
output += "Age: " + age + " (Type: " + typeof age + ")\n";
output += "Is Employed: " + isEmployed + " (Type: " + typeof isEmployed + ")\n";
output += "Skills: " + JSON.stringify(skills) + " (Type: " + typeof skills + ")";

console.log(output);
alert(output);