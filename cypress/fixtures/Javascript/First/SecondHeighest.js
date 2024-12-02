 function secondLargestNumber (data) {
    first = data[0];
    second = data[0];
    for (var i = 0; i < data.length; i++) {
      if (first < data[i]){
        second = first;
        first = data[i];
      }else if (second < data[i]){
        second = data[i];
      }
    }
    console.log("Second Largest Number:",second);
   }
   
   let arr = [62,33,12,90,10,28,24];
   secondLargestNumber(arr);