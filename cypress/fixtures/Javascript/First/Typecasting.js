let a=12;
console.log(typeof a);
//String Conversion
let as=String(a);//string() convert number into string
console.log(typeof as);
console.log(as.length);

//Numeric conversion
let value="1224"
console.log(parseInt(value)+5);

//Boolean Conversion

let flag="false"
console.log(Boolean(flag))

function isPalindrome(str) {
    let rev = str.split("").reverse().join("");
 
    if (rev == str) {
        return true
    }
    return false
 
}
 
let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
 
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));