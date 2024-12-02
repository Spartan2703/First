function sumarray(num){
   var sum=0;
   for(var i=0;i<num.length;i++){
    sum=sum+num[i];
   }

return sum;

}

const value=[1,2,3,4,5];
console.log(sumarray(value))