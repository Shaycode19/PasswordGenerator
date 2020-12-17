// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables and arrays created for information to create random characters//

var characters = "0123456789"
var special = "!#$%&'()*+,-./:;<=>?@][/^_`{|}~"
var lowercase ="abcdefghijklmnopqrstuvwxyz"
var uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var passwordlength= ""

// Write password to the #password input//
//? Uppercase Lowercase etc length.




if (parameter >128){
  alert("Password too long! Please choose a number lower than 128");
  else if (parameter <128){

  }
  //console.log("Password is too long");//


}
  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

 for (var i = 8); i< parameter
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
