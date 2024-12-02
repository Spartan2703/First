function armstrng(num){
     let remainder=0;
     let result=0;
     let originalnum=num;
     while(originalnum!=0){
        remainder=originalnum%10;
        result+=Math.pow(remainder,3);
        originalnum=Math.floor(originalnum/10);
        
     }
     if(result==num){
        console.log(num+" is a palindrome");
     }else{
        console.log(num+" is a not palindrome");
     }


}
armstrng(371)
