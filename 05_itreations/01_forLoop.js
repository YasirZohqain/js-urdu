
// basic loop

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(element)
// }


// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if (i == 5) {
//         console.log('5 is best')
//     }
//     console.log(element)
// }


// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(element)
//     if (i == 5) {
//         console.log('5 is best')
//     }

// }


// for (let i = 2; i <= 5; i++) {
//     console.log(`Table No. ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }

const table = 5
//const tableRange = [1,2,3,4,5,6,7,8,9,10]

const tableRange = 10

//console.log(tableRange.length, table.length)


// for (let i = 2; i <= table; i++) {
//     console.log(`Table No. ${i}`)
//     for (let j = 1; j <= tableRange; j++) {
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }



let heroList = [2, 3, 4, 5, 6, 7, 7, 8, 9];

for (let index = 0; index < heroList.length; index++) {
    if (heroList[index] == 7) {
        console.log('find');
        continue;
    }
    const element = heroList[index];
    console.log(element);
}




