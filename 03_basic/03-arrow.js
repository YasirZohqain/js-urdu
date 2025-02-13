




const thisKeyWordUse = {
    username: 'Yasir',
    price: 50,

    welcomeMas: function () {
        console.log(`${this.username} is buying package in ${this.price}`)
    }

}

thisKeyWordUse.welcomeMas()

thisKeyWordUse.username = "Zohqain"

thisKeyWordUse.welcomeMas()


// Fun

function a() {
    console.log('Func')
}
a()

//Func Experssion
const ab = function () {
    console.log('Func Experssion')
}

ab()


// Arrow Func
const abc = () => {
    console.log('Arrow Func')
}


abc()

// Explicit Return arrow
// const valueAdd = (num1, num2) => {
//     return num1 + num2 
// } 

// console.log(valueAdd(2, 4))


// In Javascript, Implicit Return is a way of defining functions which return a value without the need to explicitly write out “return” in the code itself.


//const valueAdd = (num1, num2) =>  num1 + num2  


//const valueAdd = (num1, num2) =>  (num1 + num2) // this use REACT

const valueAdd = (num1, num2) =>  ({objects: 'This is way to use oject into implicit arrow fun'}) // this use REACT

console.log(valueAdd(2, 4))




