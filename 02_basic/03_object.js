const userOne = {
    userName : 'Yasir',
    email : 'yasir@gmail.com',
    age : 33,
    isLogin: true,
    loginDetail: ['Monday', 'Friday']
}


//console.log(userOne)
//console.log(userOne.userName)
//console.log(userOne["email"])

userOne.email = 'zohqain@gmail.com'

//Object.freeze(userOne)

userOne.email = 'yashal@gmail.com'

//console.log(userOne)

userOne.greeting = function () {
    console.log('hello world')
}


console.log(userOne.greeting);

userOne.greeting2 = function () {
    console.log(`This my email: ${this.email}`)
}

console.log(userOne.greeting2());

// Youtube Reel Testing

// function fetchRole(roleID) {
//     switch (roleID) {
//       case 1:
//         return 'Admin';
//       case 2:
//         return 'HR';
//       case 3:
//         return 'Manager';
//       default:
//         return 'User'; // Removed unnecessary 'break'
//     }
//   }


// function fetchRole(roleID) {
//     const roles = {
//       1: 'Admin',
//       2: 'HR',
//       3: 'Manager'
//     };
  
//     return roles[roleID] || 'User';
//   }
  
//   console.log(fetchRole(2))