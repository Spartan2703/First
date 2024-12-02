function num(a){
   var flag=false;
   for(var i=2;i<=a/2;i++){
      if(a%i==0){
         flag=true;
         break;
        }   
   }
   if(!flag){
      console.log(a+" is a prime no")
   }else{
      console.log(a+" is not a prime no")
   }
  
}

num(18);