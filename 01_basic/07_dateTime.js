const myDate = new Date();

console.log(myDate.toLocaleDateString())

console.log(myDate.toLocaleTimeString())




// Date.now is can use for get exit time for test or quiz solve time, start and end time Date.now() 

const takenTime = Date.now()

console.log(takenTime)

console.log(Math.floor(takenTime/1000))