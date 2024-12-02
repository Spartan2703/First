function pali(str){

    var str1="";
    for(var i=str.length-1;i>=0;i--){
        str1=str1+str[i];
    }
    if(str1==str){
        console.log("is a palindrome")
    }else{
        console.log("is not a palindrome")
    }
}

pali("nitin");

