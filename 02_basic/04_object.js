const objOne = {email: 'yasir@gmail.com', ID: '656523'}
const objTwo = {emails: 'zohqain@gmail.com', IDs: '365478'}

const combineObj = {...objOne, ...objTwo}

//console.log(combineObj)

// [{}] this is we called arrray of object

const user = [
    {
        id: 1,
        user: 'Yasir'
    },
    {
        id: 2,
        user: 'Zohqain'
    },
    {
        id:3,
        user: 'Awan'
    }
]

//console.log(user[1]);

//console.log(Object.keys(combineObj))
console.log(Object.hasOwn(combineObj, 'email'))


var a = "1";
//console.log(a++);
//console.log(++a)
//console.log(a)



//console.log("1"+ 1 + 2)
//console.log(2+ 1+ '1')
//console.log('2'+ 1+ 1)

const {email: e} = objOne // de-structure

//console.log(e)


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "yasir",
            lastname: "zohqain"
        }
    }
}

 console.log(regularUser.fullname?.userfullname.firstname.toLocaleUpperCase());