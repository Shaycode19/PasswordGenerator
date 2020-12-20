//Arrays created for information to create random characters//
var numbers = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@][/^_`{|}~";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var answers = "";
var passwordOption = "";
var combinedPw = "";
var confirmSpecial = "";
var confirmNumbers = "";
var confirmUppercase = "";
var confirmLowerase = "";
var password = "";
var passwordText = document.getElementById("password");
// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", start);
function start() {
  reset();
  password = "";
  passwordText.value = password;
  writePassword();
  createPW();
}
//generate inpuput for password.
function writePassword() {
  //Get user input-details for password- First confirm number of characters.
  answers = parseInt(prompt("How many characters would you like your password to be? Choose between 8-128"));
  if (answers == false) {
    alert("Error! Cannot be empty Pick a password lenght between 8 and 128!");
  }
  else if (answers >= 8 && answers <= 128) {
    alert("Your password will have " + answers + " characters");
    confirmNumbers = confirm("Would you like any numbers");
    confirmSpecial = confirm("Would you like any special characters?");
    confirmLowercase = confirm("Any lowercase letters?");
    confirmUppercase = confirm("Any uppercase letters?");
  }
  if (confirmNumbers == false && confirmSpecial == false && confirmLowercase == false && confirmUppercase == false) {
    passwordOption = alert("Must have at least one");
  }
  else if (confirmNumbers == true && confirmSpecial == true && confirmLowercase == true && confirmUppercase == true) {
    //concat- merges two arrays
    passwordOption = numbers.concat(special, lowercase, uppercase);
  }
  // Else if statements for confirm statements.
  else if (confirmNumbers && confirmUppercase && confirmLowercase) {
    passwordOption = number.concat(uppercase, lowercase);
  }
  else if (confirmSpecial && confirmNumbers && confirmLowercase) {
    passwordOption = special.concat(number, lowercase);
  }
  else if (confirmSpecial && confirmLowercase && confirmUppercase) {
    passwordOption = special.concat(lowercase, uppercase);
  }
  else if (confirmNumbers && confirmLowercase && confirmUppercase) {
    passwordOption = number.concat(lowercase, uppercase);
  }
  //
  else if (confirmSpecial && confirmNumbers) {
    passwordOption = special.concat(number);
  } else if (confirmSpecial && confirmLowercase) {
    passwordOption = special.concat(lowercase);
  } else if (confirmSpecial && confirmUppercase) {
    passwordOption = special.concat(uppercase);
  }
  else if (confirmLowercase && confirmNumbers) {
    passwordOption = lowercase.concat(number);
  } else if (confirmLowercase && confirmUppercase) {
    passwordOption = lowercase.concat(Uppercase);
  } else if (confirmNumbers && confirmUppercase) {
    passwordOption = number.concat(uppercase);
  }
  // Else if for single choice password
  else if (confirmSpecial) {
    passwordOption = special;
  }
  else if (confirmNumbers) {
    passwordOption = number;
  }
  else if (confirmLowercase) {
    passwordOption = lowercase;
  }
  else if (confirmUppercase) {
    passwordOption = (uppercase);
  };
}
// password variable is an array placeholder for user generated amount of length
function createPW() {
  // Start random selection variables:
  // Random selection for all variables:
  // This also combines the password characters after picking from the chosen string
  for (var i = 0; i < answers; i++) {
    combinedPW = passwordOption[Math.floor(Math.random() * passwordOption.length)];
    password = password + combinedPW;
  }
  passwordText.value = password;
}
//added reset function
function reset() {
  var answers = "";
  var passwordOption = "";
  var combinedPw = "";
  var confirmSpecial = "";
  var confirmNumbers = "";
  var confirmUppercase = "";
  var confirmLowerase = "";
  var password = "";
}
