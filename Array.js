let a=[12,56,8,27,3]
console.log(typeof a)
console.log(a[2])
a.push(4);
console.log(a)

let name=["Piyush", "Hunter","Ram"]
console.log(name.length)

//Loop over an array
//foreach function
name.forEach(function(item,index){
    console.log(index,"=>",item);
});

let nums=[12,13,14,25]
let sum=0;
nums.forEach(function(it,i){
      sum=sum + it;
});
console.log(sum)
name.push("Sita")
console.log(name)
name.pop()//delete element from the last in the array
console.log(name)

//delete element from the front end of the array
name.shift();
console.log(name)

//Add element from the front end
name.unshift("David")
console.log(name)

name.reverse();// reverse the string
console.log(name)

//For removing particular elemet from the position we use splice(position,n)
name.splice(0,2)
console.log(name)

//copy an array using slice()
name.slice();
console.log(name)
