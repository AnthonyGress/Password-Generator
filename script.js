var specialChars = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];
// Array of numeric characters to be included in password
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
// Array of uppercase characters to be included in password
var upperCase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
//math.random for loop to randomly grab chars concat all selected arrays into one massive array
// pull out # of chars from concat array length
function generatePW() {
  //add validation for user input <5 >128
  var passwordLen = prompt("Enter length of password");
  console.log(passwordLen);

  var hasSpecialChars = confirm("Click ok to include Special Characters.");
  console.log(hasSpecialChars);

  var hasNumbers = confirm("Click ok to include Numbers.");
  console.log(hasNumbers);

  var hasLowerCase = confirm("Click ok to include Lowercase Characters.");
  console.log(hasLowerCase);

  var hasUpperCase = confirm("Click ok to include Uppercase Characters.");
  console.log(hasUpperCase);
}

generatePW();

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //write this function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
