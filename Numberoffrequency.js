function freq(num){
    let obj={};//declaring object
    for(let i=0;i<num.length;i++){
        if(obj[num[i]]==undefined){
            obj[num[i]]=1;
        }else{
            obj[num[i]]+=1;
        }
    }
    return obj;
}

const val="My name is Piyush";//both will work
//const val=[1,2,2,3,3,3,4,4,1,2]
console.log(freq(val))