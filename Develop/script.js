// Assignment Code
var characters = [
    {
    uppercase: (97, 122)
    },
    {lowercase: (65, 90)
    },
    {numbers: (48, 57)
    },
    {symbols: (33, 47)
    }
]

function userPrompt() {
    var confirmNumbers = window.confirm("Would you like Numbers letter?");
    console.log(confirmNumbers);
    
    var confirmUp = window.confirm("Would you like Uppercase letters?");
    console.log(confirmUp);
    
    var confirmLow = window.confirm("Would you like lowercase letters?");
    console.log(confirmLow);
    
    var confirmSymbols = window.confirm("Would you like symbols?");
    console.log(confirmSymbols);

    var confirmLength = window.prompt("Please choose length of password. (Between 8 to 128 characters.)")
    console.log(confirmLength);

    for(var i = 0; i <= characters.length; i++ )
    if(confirmNumbers === true) {
        confirmNumbers = characters.numbers
    }
    if(confirmUp === true) {
        confirmUp = characters.uppercase
    }
    
    if(confirmLow === true) {
        confirmLow = characters.lowercase
    }
    
    if(confirmSymbols === true) {
        confirmSymbols = characters.symbols
    }
    

}

var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword(userPrompt) {

var password = function () { 
        var value = characters[Math.floor(math.random())]

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} 
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
userPrompt();