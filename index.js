/*
syntax and sematics
syntax is rules of the language
sematics is the words in the language

Variables
A variable is a container for storing values

Properties of a variable are
-Name
-Value
-Data type: number ( intiger, float)
string, character( a-z, 0-9,), special characters($,#,%,@), boolean (true, false)
-Scope: where is the variables accessible, variables can be of 
local scope: only accessible within the block it is declared 
global scope: accessible anywhere
note: using var gives the variable a global scope

Variabes must be declared in js using 3 key words (let, const, var)
let=> values can change but its not restricted to a block 
var=> values can change and not restricted to a block
const=> values cannot change and it is restricted to a block


*/
//(Name, Value, Data Type, scope)
let x = 5 // x, 5, intiger, global 
var y = "Philip" y, philip, string, global


// Constant variables 
// These are variables whose value that can not be changed
const z = 0.55 // z, 0.55, float

k = 8 // js allows you to use variables without declaring

x = 6 // change the value of your variables


console.log(x) // displays x
console.log(y) // displays y
console.log(z) // displays z
console.log(k) // displays k
   

//THIS STARTS THE BLOCK
if (x = 6){ //starts block
    let a = 8
    const b = "Emmanuel"
    var c = "E" 
    console.log(a) // displays a
    console.log(b) // displays b
    console.log(c) // displays c
} //THIS ENDS THE BLOCK
console.log(a) // displays a
console.log(b) // displays b
console.log(c) // displays c

