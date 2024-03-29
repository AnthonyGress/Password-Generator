// add dropdown 5-128?

var specialChars = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];
// Array of numeric characters to be included in password
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
// Array of uppercase characters to be included in password
var upperCase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];
// define blank global variable for the generated password array so all functions can r/w
var generatedPassword= [];
var passwordText = document.querySelector("#password");

// This is the original function using the JS prompts as input for generator
function generatePW() {
  // create array for included characters
  var included = [];
  
  //add validation for user input <8 >128
  var passwordLen = prompt("Enter length of password");
    if (passwordLen < 8){
      alert("Password must be AT LEAST 8 characters in length.")
      return;
    }
    else if (passwordLen > 128){
      alert("Password must LESS THAN 128 characters in length.")
      return;
    }
  console.log(passwordLen);
  var hasSpecialChars = confirm("Click ok to include Special Characters.");
  // if true add these characters to the included array
  if (hasSpecialChars == true){
    var included = included.concat(specialChars);
    console.log(included);}

  var hasNumbers = confirm("Click ok to include Numbers.");
  // if true add these characters to the included array
  if (hasNumbers == true){
    var included = included.concat(numbers);
    console.log(included);}

  var hasLowerCase = confirm("Click ok to include Lowercase Characters.");
  // if true add these characters to the included array
  if (hasLowerCase == true){
    var included = included.concat(lowerCase);
    console.log(included);}

  var hasUpperCase = confirm("Click ok to include Uppercase Characters.");
  // if true add these characters to the included array
  if (hasUpperCase == true){
    var included = included.concat(upperCase);
    console.log(included);}


  // loop through included characters array *passwordLen* number of times
  for (let i = 0; i < passwordLen; i++) {
    // randomly select an index from the array
    var random = Math.floor(Math.random() * (included.length));
    console.log(random);
    // get value of the randomly chosen character and store it
    var chosenChar = included[random];
    console.log(chosenChar);
    // add the randomly chosen character from the included array to the generated password
    generatedPassword.push(chosenChar);
  }
  console.log(generatedPassword);
}

// This is the updated function using the checkbox values for included char sets instead of prompts
function altGeneratePW (){
  // create blank array of included char types
  var included = [];
  var inputBorder = document.querySelector("#passLen");
  // store value from html text box for password len
  var passwordLen = document.getElementById("passLen").value;
  // convert text to number
  passwordLen = Number(passwordLen);

  // check if password len is a number
  if (isNaN(passwordLen)){
    inputBorder.style.borderColor = "red";
    alert("ERROR Password length must be a NUMBER");
    return;
  }
  // check to see if password len is between 5-128
  else if (passwordLen < 8){
    inputBorder.style.borderColor = "red";
    alert("ERROR Password must be AT LEAST 8 characters in length");
    return;
  }
  else if (passwordLen > 128){
    inputBorder.style.borderColor = "red";
    alert("ERROR Password must LESS THAN 128 characters in length");
    return;
  }


  // check to see if special characters checkbox is checked
  var hasSpecialChars = document.getElementById("SpecialChars");
 
  // if checked, add to included characters array
  if (hasSpecialChars.checked == true){
    var included = included.concat(specialChars);

  }
  // check to see if numbers checkbox is checked
  var hasNumbers = document.getElementById("Numbers");
  // if checked, add to included characters array
  if (hasNumbers.checked == true){
    var included = included.concat(numbers);

  }
  // check to see if numbers checkbox is checked
  var hasLowerCase = document.getElementById("Lowercase");
  // if checked, add to included characters array
  if (hasLowerCase.checked == true){
    var included = included.concat(lowerCase);
  
  }
  // check to see if numbers checkbox is checked
  var hasUpperCase = document.getElementById("Uppercase");
  // if checked, add to included characters array
  if (hasUpperCase.checked == true){
    var included = included.concat(upperCase);
  
  }
  // if none of the character sets are selected, return error
  if (hasSpecialChars.checked != true && hasNumbers.checked != true && hasLowerCase.checked != true && hasUpperCase.checked != true) {
    alert("ERROR You must check at least 1 box");
    return;
  }

  // loop through included characters array *passwordLen* number of times
  for (let i = 0; i < passwordLen; i++) {
    // randomly select an index from the array
    var random = Math.floor(Math.random() * (included.length));
    
    // get value of the randomly chosen character and store it
    var chosenChar = included[random];
  
    // add the randomly chosen character from the included array to the generated password
    generatedPassword.push(chosenChar);
  }
 
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {
  // first clear the text field on screen
  generatedPassword = [];
  // call the generate function
  altGeneratePW();
  // remove commas from array x,y,z to xyz
  var password = generatedPassword.join("");
  
  //write generated password to page
  console.log(password);
  passwordText.value = password;
  
}

// assign copy function to button
function copyPW (){
  var copyText = document.getElementById("password");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  // copy text
  document.execCommand("copy");
    /* Alert the copied text */
    alert("Copied the password: " + copyText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPW);


