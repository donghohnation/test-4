//characters sorted into object below
const characters = {
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  specialChar: "!#$%&'*+,-./:;<=>?@[\]^_`{|}~",
};

//Below: Main function for prompts.
function generatePassword() {
  //passwordCharset will accumulate all object properties from the object characters 
  var passwordCharSet = "";
  //Validating integers for length 
  var length = Number.parseInt(window.prompt("How many characters for your password?(8 - 128)"));
  console.log(length);
  if (Number.isInteger(length) === true) {
    console.log("Length is Integer");
  } else {
    window.alert("Invalid. Please try again.");
    generatePassword();
    return;
  }
  var lowerCase = window.prompt("Does your password need lowercase? Yes or No");
  //Validating lowerCase variable - yes or no responses from user
  if (lowerCase.toLowerCase() == 'yes') {
    passwordCharSet += characters.lowerCase;
    console.log("Lower case is needed.")
  } else if (lowerCase.toLowerCase() == 'no') {
    console.log("No lower case needed");
  } else {
    window.alert("Invalid entry. Please try again.");
    generatePassword();
    return;
  }
  var upperCase = window.prompt("Does your password need uppercase? Yes or No");
  //Validating upperCase variable - yes or no responses from user
  if (upperCase.toLowerCase() == 'yes') {
    passwordCharSet += characters.upperCase;
    console.log("Upper case is needed.")
  } else if (upperCase.toLowerCase() == 'no') {
    console.log("No upper case needed");
  } else {
    window.alert("Invalid entry. Please try again.");
    generatePassword();
    return;
  }
  var number = window.prompt("Does your password need numbers? Yes or No")
  //Validating number variable - yes or no responses from user
  if (number.toLowerCase() == 'yes') {
    passwordCharSet += characters.number;
    console.log("Numbers are needed.")
  } else if (number.toLowerCase() == 'no') {
    console.log('No numbers needed');
  } else {
    window.alert("Invalid entry. Please try again.");
    generatePassword();
    return;
  }
  var specialChar = window.prompt("Does your password need special characters? Yes or No");
  if (specialChar.toLowerCase() == 'yes') {
    //Validating specialChar variable for symbols - yes or no responses from user
    passwordCharSet += characters.specialChar;
    console.log("Special Characters are needed.")
  } else if (specialChar.toLowerCase() == 'no') {
    console.log("No special characters needed.");
  } else {
    window.alert("Invalid entry. Please try again.");
    generatePassword();
    return;
  }
  //For loop iterating through each value of length and placing a random character from passwordCharset
  var password = "";
  for (let i = 0; i < length; i++) {
    console.log(i);
    var rand = Math.random();
    console.log('Random number is: ' + rand.toString());
    var index = Math.floor(rand * passwordCharSet.length);
    console.log('Result of floor is: ' + index.toString());
    console.log(passwordCharSet[index]);
    console.log(passwordCharSet);
    password += passwordCharSet[index];
  }
  //return result of for loop
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);