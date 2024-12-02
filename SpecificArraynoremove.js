var num=[1,2,3,4,5,6,7];
//num.splice(0,4);
//console.log(num)
var new1=[num.length-1];
var j=2;
var k=0;
for(var i=0;i<num.length;i++){
if(i!=j){
    new1[k]=num[i];
    k++;
}
}
console.log(new1)



