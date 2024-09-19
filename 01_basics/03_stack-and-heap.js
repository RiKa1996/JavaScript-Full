//stack and heap memory
// Stack(premitive data type) iski value change hoti rhti hai.isme hume original value ka copy milta hai.(like---deep copy)
let myName = "rishu"
let mySecondName = myName

mySecondName = "gulshan"

console.log(mySecondName);
console.log(myName);

//Heap(non-premitive data type) iski value change nhi hoti hai. jb hum non-premitive data type se value lete hai to hume copy nhi bulki uski original value ka refrenc milta hai.(like-shallow copy)
let userOne = {
    name:"rishav",
    email:"rishu@gmail.com"
}

let userTwo = userOne

userTwo.email = "rishav@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

