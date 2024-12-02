//For..in loop will give key value

/*let st1={
    name:"John",
    Phone:"989958",
    Address:"India"
};

for(let val in st1)
{
   console.log(`${val}=>${st1[val]}`)

}*/

//For..of loop will give value not key

let st1={
    name:"John",
    Phone:"989958",
    Address:"India"
};

for(let val of st1)
{
   console.log(val[0])

}


