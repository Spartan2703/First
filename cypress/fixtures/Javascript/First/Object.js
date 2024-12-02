let ob={
name:"Piyush",

Age:29,
Address:"New Delhi",
display:function(){
console.log("Display the function");
console.log(this.name);
console.log(this.Age);
console.log(this.Address)

}


}

// console.log(ob)
// console.log(typeof ob)
// ob.display()

for(let key in ob){
    console.log(key)
}

//changing value of property
ob.name="john";
console.log(ob.name)


//dynamic adding property
ob['email']="abc@gmail.com"
console.log(ob)

//deleting property

delete ob["Age"]
console.log(ob)