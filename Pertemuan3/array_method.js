const names = ["Michel","Jhon","Hannah","Jonas"];

// panggil iterasi method foreach
names.forEach(function(name){
    console.log(`Name ${name}`);
});


const formattedNames = names.map(function(name){
    return `Mr/Mrs ${name}`;
});
console.log(formattedNames);    