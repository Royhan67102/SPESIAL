//array
const animals = ["cat", "dog", "fish","bird"];

const user = {
    name: "Royhan",
    age: 20,
    major: "Informatics Engineering"
};

console.log(user.name, user["age"]); // Royhan
// pertama memanggil key, dan yang kedua memanggil key

//with loop
// for of
for (const animal of animals) {
    console.log(`Hewan : ${animal}`);
}

// for in
for (const key in user) {
    console.log(`${key} : ${user[key]}`);
}

//without loop
console.log(animals[0],animals[2]); // cat and fish