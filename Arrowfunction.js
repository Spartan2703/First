function sayHello(){
console.log("Hello");
console.log("How are you");

}
sayHello();
let sum=dosum(13,20);
console.log(sum)
function dosum(a,b){

    let c=a+b;
    return c;

}
let s= dosum(12,13)
console.log(s)

//Arrow Function
const toCelsius=(fahr)=>{
    let result=(5/9)*(fahr-32);
    return result;
};

let output=toCelsius(102);
console.log(output)

