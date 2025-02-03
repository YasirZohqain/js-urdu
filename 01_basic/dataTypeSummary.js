/* 

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Reference or Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/



// Interview::::: JavaScript is a dynamically typed language. 



// *********************** Stack Memory and Heap Memory ***************************************** //


let assignEmail = 'Yasir@hotmail.com';

let superEmail = assignEmail;



superEmail = 'hero@hotmail.com'

//console.log(superEmail)

//console.log(assignEmail)




let userOne = {

       email: 'yasirzohqain@gmail.com',
       name: 'yasir'
}


let userTwo = userOne

userTwo.email = "yasir_zohqain@hotmail.com"


console.log(userTwo.email)
console.log(userOne.email)