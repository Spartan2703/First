hoistedvariable=3;
console.log(hoistedvariable);
var hoistedvariable;

//New Example
function hoist(){
    x=33;
    console.log(x);
    var x;
}

hoist();


