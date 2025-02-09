// ARRAY learn in deep bcoz it will help you in nodeJs and reactJs 

const marvelHeros = ['Iron Man', 'Spider Man', 'Black Widow']
const dcHeros = ['Super Man', 'Flash', 'Bat Man']
const pkHeros = ['Ms Marvel', 'Anak wala jin']









//console.log(allHeros);

//marvelHeros.push(dcHeros)

// console.log(marvelHeros);


// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.


//const allHeros = marvelHeros.concat(dcHeros) ///////////// we only concat 2 array

const allHeros = [...marvelHeros, ...dcHeros, ...pkHeros] ///////// Here we can use multiply array

//console.log(allHeros);


const joinHeros = ['Iron Man', 'Spider Man', 'Black Widow' , ['Super Man', 'Flash', 'Bat Man', ['Ms Marvel', 'Anak wala jin']]]

//console.log(joinHeros.flat(Infinity));

console.log(Array.isArray("Yasir"))
console.log(Array.from("Yasir"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

