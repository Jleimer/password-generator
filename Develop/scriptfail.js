// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {

var passwordText = document.querySelector("#password");
var value = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
var password = "";

for (var i = 0; i <= passwordText; i++) {
  password = password + value.charAt(Math.floor(math.random() * math.floor(value.length - 1)));
}

passwordText.value = password;

}




// Add event listener to generate button
//document.getElementById("password").value = password;
document.getElementById("generate").addEventListener("click", writePassword);




