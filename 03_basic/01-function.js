function callMyName () {
    console.log('Yasir')
}

// the function is keyword "function"
// the function name "callMyName"
// the function syntex "()"
// the function scope "{}" 

//callMyName()

// the function refrence is "callMyName"
// the function excution is "()" 


// function xyz (num1, num2) {
//     let totalnum = num1 + num2
//     return totalnum;
// }

function xyz (num1, num2) {
    return num1 + num2
}

const total = xyz(2,5);

console.log(total)

function loginMassage(userName = 'zohqain') {
    if (userName === undefined) {
        console.log('Invaild user')
        return
    }
   return  `${userName} is login`
}

const msg = loginMassage()

console.log(msg)
