//1
let exo1 = document.querySelector('h2');
console.log(exo1.innerHTML);

//2
exo1.innerHTML = "Exercice1";
console.log(exo1.innerHTML);

//3
let exo3 = exo1.nextElementSibling;
exo3.innerHTML = `exo1.innerHTML = "Exercice1";`;
console.log(exo3.innerHTML);

//4
let exo4 = document.querySelector('section').getAttribute('id');
console.log(exo4);

//5
let exo5 = document.querySelector('h1').getAttribute('class');
console.log(exo5);

let exo5bis = document.querySelector('h1').className;
console.log(exo5bis);

//6
let exo6 = document.querySelectorAll('h1');
exo6.forEach(e => {
    console.log(e.className);
});

//7
let exo7 = document.querySelector('input').attributes;
console.log(exo7);

//8
let exo8 = document.querySelector('input').getAttribute('type');
console.log(exo8);

//9
let exo9 = document.getElementById('inputPassword3').setAttribute("type","password")
console.log(document.getElementById('inputPassword3'));

//10
let exo10 = document.querySelector('input');
exo10.setAttribute("type","color");
console.log(exo10);