// if variable declare in main file is called golbal scope

// let a = 10
// const b = 10 
// var c = 10

// when varible declair in {} like function, condition or loop is local scope


if(true) {
    const a = 10
    let b = 20
    var c = 30 
}


//// DO NOT USE """VAR""" syntax becuse local scope exchange to global value and also it run out site local

//console.log(a)
//console.log(b)
console.log(c)


//Closures

function one() {
    const username = 'Yasir'
    function two() {
        const lastName = ' Hussain'
        console.log(username + lastName)
    }
    two()
}
console.log(one())


// const FUNCTION_EXPERSSION = function one() {
//     const username = 'Yasir'
//     function two() {
//         const lastName = ' Hussain'
//         console.log(username + lastName)
//     }
//     two()
// }
// console.log(one())


