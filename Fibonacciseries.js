function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
   
        for (let i = 0; i <= num; i++) {
            console.log(num1)
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
            
        }
         
    }


fibonacci(5);
//fibonacci(8);