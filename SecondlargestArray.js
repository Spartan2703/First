function secondarray(num){
    var Largest=0;
    var secondLargestNumber=0;
    for(var i=0;i<=num.length;i++){
        if(num[i]>Largest){ 
            secondLargestNumber=Largest;
            Largest=num[i];

        }else if(num[i]>secondLargestNumber){
            secondLargestNumber=num[i];
        }
       
    }
    return secondLargestNumber;
}
const arr=[2,5,7,8,9,10]
console.log(secondarray(arr))
