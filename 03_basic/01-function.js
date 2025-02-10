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


function xyz (num1, num2) {
    const total = num1 + num2
    return total;
}

// function xyz (num1, num2) {
//     return num1 + num2
// }

const total = xyz(2,5);

console.log(total)

function loginMassage(userName = 'zohqain') {
    if (userName === undefined) /* (!userName)*/ {
        console.log('Invaild user')
        return
    }
   return  `${userName} is login`
}


const msg = loginMassage()

console.log(msg)



//...items when use DOT DOT DOT then name is call rest oprator
function addToCart(...items) {
    return items
}


const cartData = addToCart(100,500,600,2000);

console.log(cartData)


const objValue = {
    naam: 'Yasir',
    phone: '03002831911'
}

function anyObj (getObj) {
    return getObj
}

console.log(anyObj(objValue.naam))

const arrvalue = [200,500,600,200,900]

function anyArr (getArr) {
    return getArr
}

console.log(anyArr(arrvalue))