"use strict";
//Arrays
let number = [1, 2, 3];
console.log(number);
//any
let qualquer = [2, "teste", true, { nome: "kayky" }];
console.log(qualquer);
//parammetros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(5, 3);
//retorno de função
function greeting(nome) {
    return `olá ${nome}`;
}
console.log(greeting("Kayky"));
//função anonima
setTimeout(function () {
    const sallary = 1500;
    console.log(sallary);
}, 2000);
// tipos de objetos
function passCoordenadas(coord) {
    console.log("X coordenadas eh: " + coord.x);
    console.log("Y coordenadas eh: " + coord.y);
}
const objCoord = { x: 238, y: 876 };
passCoordenadas(objCoord);
//propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 4);
showNumbers(1, 4);
//validando argumento opcional
function nomesTeste(nome, sobrenome) {
    if (sobrenome !== undefined) {
        return console.log(`Olá,  ${nome} ${sobrenome}`);
    }
    return console.log(`Olá, ${nome}, tudo bem?`);
}
nomesTeste("Kaykykk", "cordeiro");
//union type
function showBalance(saldo) {
    console.log(`O saldo da conta é R$:${saldo}`);
}
showBalance(100);
showBalance("200");
//mais de union types
function showRole(role) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado";
    }
    return `A função do usuario é:${role}`;
}
console.log(showRole(false));
console.log(showRole("Admin"));
function ID(id) {
    console.log(`O ID é: ${id}`);
}
ID(45);
ID("200");
function ShowCords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 5,
    z: 12
};
ShowCords(coordObj);
const SomePerson = { nome: "Kayky", age: 20 };
console.log(SomePerson);
//literal types
let teste;
teste = "testando";
console.log(teste);
function Showdirection(direction) {
    console.log(`Direção: ${direction}`);
}
Showdirection("left");
//not null assertion operators 
const p = document.getElementById("some-p");
console.log(p.innerText);
