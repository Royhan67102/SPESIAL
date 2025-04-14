const req = {
    body: {
        name: "Royhan",
        age: 20,
        major: "Informatika",
    }
}


const family = ["Michel","Jhon","Jonas"];
// destructing key dari object diatas
const { name, age, major } = req.body;  

console.log(name, age, major); // Royhan 20 Computer Science

console.log(family[0], family[1], family[2]); // Michel Jhon Jonas
const [husband, son, wife] = family;

console.log(husband, son, wife); // Michel Jhon Jonas



// rest parameter
function sum(a,b){
    const hasil = a+b;
    return hasil;
}
sum(1,2)


//with rest parameter
function sum1(...numbers){
    let hasil = 0;
    for(const number of numbers){
        hasil += number;
    }
    return hasil;
}
console.log(sum1(1,2,3,4,5)); // 15
console.log(sum1(1,2)); // 6



// contoh without spread operator
const user = {
    name: "Royhan",
    major: "Informatika",
}
// const newUser = {
//     name: user.name,
//     major: user.major,
//     age: 20
// }


// with spread operator
const newUser = {
    ...user,
    age: 20
}