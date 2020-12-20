//Arrays created for information to create random characters//
var numbers = "0123456789"
var special = "!#$%&'()*+,-./:;<=>?@][/^_`{|}~"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var answers = ""
var passwordOption = ""
var passwordLength = "";
var confirmSpecial = "";
var confirmNumbers = "";
var confirmUppercase = "";
var confirmLowerase = "";
// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", start);
function start() {
    var ps = writePassword();
    document.getElementById("Password").placeholder = ps;
}
//generate inpuput for password.
function writePassword() {
    //Get user input-details for password- First confirm number of characters.
    answers = parseInt(prompt("How many characters would you like your password to be? Choose between 8-128"));
    if (!enter) {
        alert("Error! Cannot be empty Pick a password lenght between 8 and 128!");
    }
    else if (parseInt(parameter >= 8 && parameter <= 128)) {
        alert("Your password will have ${passwordLenght} characters");
    }
 else {
        var confirmNumbers = (confirm("Would you like any numbers"));
        var confirmSpecial = (confirm("Would you like any special characters?"));
        var confirmLowercase = (confirm("Any lowercase letters?"));
        var confirmUppercase = (confirm("Any uppercase letters?"));
    }
}
if (!confrimNumbers && !confrimSpecial && !confirmLowercase && !confirmUppercase) {
    passwordOption = alert("Must have at least one");
}
else if (confirmNumber && confirmSpecial && confirmLowercase && confirmUppercase) {
    //concat- merges two arrags
    passwordOption = numbers.concat(special, lowercase, uppercase);
}
// Else if statements for confirm statements.
else if (confirmNumber && confirmUppercase && confirmLowercase) {
    passwordOption = number.concat(uppercase, lowercase);
}
else if (confirmSpecial && confirmNumber && confirmLowercase) {
    passwordOption = special.concat(number, lowercase);
}
else if (confirmSpecial && confirmLowercase && confirmUppercase) {
    passwordOption = special.concat(lowercase, uppercase);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
    passwordOption = number.concat(lowercase, uppercase);
}
//
else if (confirmSpecial && confirmNumber) {
    passwordOption = special.concat(number);
} else if (confirmSpecial && confirmLowercase) {
    passwordOption = special.concat(lowercase);
} else if (confirmSpecial && confirmUppercase) {
    passwordOption = special.concat(uppercase);
}
else if (confirmLowercase && confirmNumber) {
    passwordOption = lowercase.concat(number);
} else if (confirmLowercase && confirmUppercase) {
    passwordOption = lowercase.concat(Uppercase);
} else if (confirmNumber && confirmUppercase) {
    passwordOption = number.concat(uppercase);
}
// Else if for single choice password
else if (confirmSpecial) {
    passwordOption = special;
}
else if (confirmNumber) {
    passwordOption = number;
}
else if (confirmLowercase) {
    passwordOption = lowercase;
}
else if (confirmUppercase) {
    passwordOption = (uppercase);
};
// password variable is an array placeholder for user generated amount of length
var password = [];
// Start random selection variables:
// Random selection for all variables:
for (var i = 0; i < enter; i++) {
    var answers = passwordOption[Math.floor(Math.random() * passwordOption.length)];
    password.push(answers);
}
// This joins the password array and converts it to a string
var ps = password.join("");
UserInput(ps);
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}
// var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;