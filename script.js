// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);
var lowercaseList = "abcdefghijklmnopqrstuvwxyz"
var uppercaseList = lowercaseList.toUpperCase(); 
var specialist = "!@#$%^&*()_+";
var numberList = "0123456789";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}


function generatePassword(){
  var length = prompt("How many characters do you want in your password");
  console.log(length);
  if (length > 128 || length < 8) {
    alert("Please add a password that is between 128 and 8 characters")
    return;
  }
 
  var uppercase = confirm("You want uppers?");
  console.log(uppercase) 

  var lowercaseList = confirm("Lowercase?");
  console.log(lowercaseList)

  var SpecialCharacters = confirm("Would you like special characters");
  console.log(SpecialCharacters)

  var NumChar = confirm("Do you want any special numbers?")
  console.log(NumChar)


if (uppercase === false && lowercaseList === false && SpecialCharacters === false && NumChar === false) {
  alert("Must select one or more characters types ")
  return;
}




    var item = uppercaseList[Math.floor(Math.random() * uppercaseList.length)];
  } 

  var allChar = lowercaseList + uppercaseList + specialist +numberList;

  function createPassword () 
    let password = "";
    password += lowercaseList[Math.floor(Math.random() * lowercaseList.length)]
    password += uppercaseList[Math.floor(Math.random() * uppercaseList.length)]
    password += specialist[Math.floor(Math.random() * specialist.length)]
    password += numberList[Math.floor(Math.random() * numberList.length)]

    while(length > pass) {
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//pull a value from our uppercase list




