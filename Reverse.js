function rev(str){
var str1="";
for(var i=str.length-1;i>=0;i--){
    str1=str1+str.charAt(i);
}
return str1;
}
const val="Piyush";
console.log(rev(val))