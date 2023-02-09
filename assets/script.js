// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = "abcdfghijklmnopqrstuvwxyz"
var upper = lower.toUpperCase ()
var number = "1234567890"
var special = "?!@#$%^&*"
var total = ""
console.log(lower);
console.log(upper);
// Write password to the #password input
function generatePassword() {
// ask user for password length
var passwordLength = parseInt(window.prompt("Please enter your desired length "));
console.log(passwordLength);
// check length of password is not less than 8
if (passwordLength < 8) {
  alert ("Please select a number greater than 8");
  return "Please try again"
}

if (passwordLength > 128) {
  alert ("Please select a number less than 128");
  return "Please try again"
}

if (isNaN (passwordLength)) {
  alert ("Please select a valid number");
  return "Please try again"
}

if (confirm ("Would you like lowercase letters?")) {
  total = total.concat(lower)
}

if (confirm ("Would you like uppercase letters?")) {
  total = total.concat(upper)
}

if (confirm ("Would you like symbol?")) {
  total = total.concat(special)
}

if (confirm ("Would you like numbers?")) {
  total = total.concat(number)
}

if (total.length === 0) {
  alert ("Please select at less one character type");
  return "Please try again"
}

var totalarr = total.split("")
console.log(totalarr);
var password = ""
for (var i=0; i < passwordLength; i++) {
  var index = Math.floor(Math.random() * totalarr.length)
  var character = totalarr[index]
  password = password (character)
}
// check length of password is not more than 128
// check password length is a type of number
  return "testing password";
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);