/*let str1 = "Hello this is my car";
function isPalindrome(str) {
    let rev = str.split("").reverse().join("");
    console.log(rev);
}
 
new isPalindrome(str1)*/

//2nd method
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString);
    //return newString;
}
reverseString('hello');


//3rd method 
function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  reverseString("hello");

 

