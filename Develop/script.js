// Assignment Code
var characters = [
    {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    },
    {
        lowercase: "abcdefghijklmnopqrstuvwxyz"
    },
    {
        numbers: "1234567890"
    },
    {
        symbols: "!@#$%^&*()_+"
    }
]

let finalPw ="";

function userPrompt() {

    var confirmNumbers = confirm("Would you like Numbers letter?");
    console.log(confirmNumbers);

    var confirmUp = confirm("Would you like Uppercase letters?");
    console.log(confirmUp);

    var confirmLow = confirm("Would you like lowercase letters?");
    console.log(confirmLow);

    var confirmSymbols = confirm("Would you like symbols?");
    console.log(confirmSymbols);

    var confirmLength = prompt("Please choose length of password. (Between 8 to 128 characters.)")
    console.log(confirmLength);

    

    if (confirmNumbers) {
        finalPw = finalPw + characters[2].numbers
       
    }

    if (confirmUp) {
        finalPw = finalPw + characters[0].uppercase
    }

    if (confirmLow) {
        finalPw = finalPw + characters[1].lowercase
    }

    if (confirmSymbols) {
        finalPw = finalPw + characters[3].symbols
    }

    console.log("FINAL PW CHAR SET: \n" ,finalPw)

    for (var i = 0; i>finalPw.length; i++) {}
    

}

var generateBtn = document.querySelector("#generate");



// Write password to the #password input


var password = function () {
    var value = finalPw[Math.floor(math.random())]
    
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    return value;
}//end password() fct def



// Add event listener to generate button
generateBtn.addEventListener("click", userPrompt);
//userPrompt();