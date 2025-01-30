"use strict";

// alert(3 + 3) // it not working in node.js


//primitive data types

let userName = "Yasir" // datatype is String

let userNumber = 9999999999999999 // datatype is Number 2 power 52

let bigINT = BigInt("9999999999999999") // dataType is BigInt it use for stock Market and bitCoin etc

let isUserLogin = true // datatype is Boolean

let userPhone; // datatype is undefined

let temperatureCheck = null // dataType is NULL use when we call API and check temperature or score at any cause is not fatch or miss the value then show NULL 


console.table([userName, userNumber, bigINT, isUserLogin, userPhone, temperatureCheck])