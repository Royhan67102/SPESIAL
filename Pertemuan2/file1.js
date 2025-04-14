const name = "Royhan Audy Akbar"; 
const major = "Informatics Engineering";
const bod = "2005";


//template literal
const greetting = `
hello, My name is ${name}.Umur saya ${2025 - bod}`;


//conditional   
const result = 95;  
if (result >= 90) {
    console.log("Grade :A");
}else if (result >= 80) {
    console.log("Grade :B")
}else if (result >= 70) {
    console.log("Grade :C")     
}else {
    console.log("Grade :D");
}


//ternary
const age = 19;
age >= 21 ? console.log("Dewasa") : console.log("Belum Dewasa");

//looping for
console.log("Perulangan 1"); // akan menampilkan tulisan "Perulangan 1"
console.log("Perulangan 2"); // akan menampilkan tulisan "Perulangan 2"
for (let i = 1; i < 11; i++) {
    console.log(`Perulangan ke-${i}`);  
}  // akan menampilakn angka 1 sampai 10


//looping while
let i = 1; // s

while (i < 11) {
    console.log(`Perulangan While ke-${i}`);
    i++;
}  // akan menampilkan angka 1 sampai 10


//function declaration
function umur (bod) {
    // paramater adalah  variable sementara yang digunakan dalam function
    // yang suatu saat nanti dapat diberikan nilai atau value
    const year = 2025;
    const age = year - bod;
    //return value  
    return age;
}
console.log(umur(2005)); // akan menampilkan umur 20
console.log(umur(2000)); // akan menampilkan umur 25


//funnction expression
    // function expression adalah function yang disimpan dalam variable
    // function expression tidak bisa diakses sebelum deklarasi
const eksAge = function (bod1) {
    const years = 2025;
    const age1 = years - bod1;
    return age1;
}
console.log(eksAge(2004)); // akan menampilkan umur 20
console.log(eksAge(2001)); // akan menampilkan umur 25


//arrow function
    // arrow function adalah function yang lebih ringkas
    // arrow function tidak bisa menggunakan this
const arrAge = (bod2) => 2022 - bod2;
console.log(arrAge(1999)); // akan menampilkan umur 18
console.log(arrAge(2002)); // akan menampilkan umur 21



console.log(greetting);
console.log(name, major);