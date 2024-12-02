function sayHello(){
    return "Hello " + this.name;
  }
          
  var obj = {name: "Sandy"};
          
  console.log(sayHello.call(obj));

  function saySomething(message){
    return this.name + " is " + message;
  }        
  var person4 = {name:  "John"};
  console.log(saySomething.apply(person4, ["awesome"]));