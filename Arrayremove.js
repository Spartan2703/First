let arr=[1,9,6,92,1];
let arr1=[];
arr=arr.filter(num=>{
    if(num==9||num.toString().startsWith('9')){
        arr1.push(num);
        return false;
    }
    return true;
});

console.log("updated array:",arr);
console.log("updated array start with 9:",arr1);