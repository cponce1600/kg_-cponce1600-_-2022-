//This object represents the kkey value pairs that will be used 
//to compare digits to their phonetic equvlet. 
var digToLit = {"1": "One", "2": "Two", 
                      "3": "Three", "4": "Four", 
                      "5": "Five",  "6": "Six",
                      "7": "Seven", "8": "Eight", 
                      "9": "Nine",  "0": "Zero"};
//These vaiebles will be used are reused in the getPhonetic function
var sIntArr = new Array();
var sInt;

//This function will take an int array as its parameters and print
//the phonetic equivelent 
function getPhonetic(intArr){ 
  for(num in intArr){
    sInt = getDigits(intArr[num].toString());
    sIntArr.push(sInt);
  }
  
  console.log(sIntArr);
  sIntArr.length = 0;
}

//This function is only used by getPhonetic
//it takes in a string and recursivly gets the phonetic equivlent 
function getDigits(sInt){
  if(sInt == "")
    return "";
  else
    return digToLit[sInt.charAt(0)] + getDigits(sInt.substring(1));
  
}

//Here we get our pramaters from the console
var myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

//This array will be filled with the parameters given in the console 
numbers = [];
for (arg in myArgs) {
  var number = parseInt(myArgs[arg]);
  numbers.push(number);
}

//We can now get the phonetic
getPhonetic(numbers);
