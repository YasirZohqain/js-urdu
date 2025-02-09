// SUMMARRY:

// 1. Array is written in brackets [  ].
// 2. Array data type is an object.
// 3. Array can contain different data types . i.e string,number,boolean,array etc.
// 4. Array is zero based indexing. It starts with zero.
// 5. Once changed its original value will also change beacause it is non primitive (refrence) type.

// ARRAY METHODs :

// 1. Push = adds value to last of an array.
// 2. Pop = removes last value of an array.
// 3. Unshift = adds value at first of an array.
// 4. Shift = removes first value of an array.
// 5. Includes = checks true or false.
// 6. IndexOf = checks the position of value in number form.
// 7. Join = converts to string.
// 8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
// 9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.



const user = 'Yasir Hussain Awan' // string


const stgToAry = user.split(' '); // string conert to arry


console.log(stgToAry)


const lastRemove = stgToAry.pop() // array last value remove

console.log(lastRemove) // if array last value want use this

console.log(stgToAry) // and array get with last value get this code




const newArray = [1,2,3,4,5,6,7,8,9]


console.log('orignal:', newArray)


console.log('slice:', newArray.slice(1, 3))


console.log('orignal after slice:', newArray)


console.log('splice:', newArray.splice(1,3))

console.log('original after splice', newArray)

