var str="Tomorrow";
var str1="";
let count=0;
for(let i=0;i<str.length;i++){
    if(str.charAt(i)=='o'||str.charAt(i)=='O'){
        count++;
    for(let j=0;j<count;j++)
        str1=str1+"*";
        continue;
    
    
    } 
    str1=str1+str.charAt(i);
    
}
console.log(str1)