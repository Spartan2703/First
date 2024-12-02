 function currying(fn){
    return function(a){
      return function(b){
        return fn(a,b);
      }
    }
  }
  

  console.log(currying(4)(3)); 

  sumOfThreeElements(4, 5, 6)
  .then(result=> console.log(result))
  .catch(error=> console.log(error));
  // In the code above, the promise is fulfilled so the then() method gets executed
  
  sumOfThreeElements(7, 0, 33, 41)
  .then(result => console.log(result))
  .catch(error=> console.log(error));
  // In the code above, the promise is rejected hence the catch() method gets executed