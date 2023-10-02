//Arrays

let number: number []= [1,2,3]

console.log(number)

//any

let qualquer: any =[2, "teste", true, {nome: "kayky"}]

console.log(qualquer)

//parammetros tipados

function soma(a: number,b: number){
    console.log(a+b)
}

soma (5,3)


//retorno de função

function greeting(nome: string){
    return `olá ${nome}`
}

console.log(greeting("Kayky"))

//função anonima

setTimeout(function(){
    const sallary: number = 1500

    console.log (sallary)
}, 2000)

// tipos de objetos

function passCoordenadas(coord: {x: number, y: number}){
    console.log ("X coordenadas eh: " +coord.x)
    console.log ("Y coordenadas eh: " +coord.y)
}
const objCoord = {x: 238, y: 876}

passCoordenadas(objCoord)

//propriedades opcionais

function showNumbers(a: number, b: number, c?: number){
    console.log ("A: " +a )
    console.log ("B: " +b )
    if(c){
        console.log ("C: " +c )
    }
}
showNumbers(1,2,4)
showNumbers(1,4)

//validando argumento opcional

function nomesTeste (nome: string, sobrenome?: string ){
    if (sobrenome !== undefined){
        return console.log(`Olá,  ${nome} ${sobrenome}`)
    }

    return console.log (`Olá, ${nome}, tudo bem?`)
}

nomesTeste ("Kaykykk", "cordeiro")

//union type

function showBalance (saldo: number| string){
    console.log (`O saldo da conta é R$:${saldo}`)
}

showBalance(100)
showBalance("200")

//mais de union types

function showRole(role: string | boolean){
    if(typeof role === "boolean"){
        return "Usuario não aprovado"
    }
    return `A função do usuario é:${role}`
}

console.log(showRole(false))
console.log(showRole("Admin"))

//type alias
type ID= string| number
function ID(id: ID){
    console.log(`O ID é: ${id}`)
}

ID(45)
ID("200")

//interface

interface Point{
    x:  number
    y: number
    z: number
}

function ShowCords(obj: Point){
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj: Point={
    x: 10,
    y:5,
    z:12
}
ShowCords(coordObj)

//interface x alias

interface Person{
    nome: string
}

interface Person{
    age: number
}

const SomePerson: Person = { nome: "Kayky", age: 20}

console.log(SomePerson)

//literal types

let teste: "testando"
teste =  "testando"

console.log(teste)

function Showdirection (direction : "left"| "right" | "center"){
    console.log(`Direção: ${direction}`)
}

Showdirection("left")

//not null assertion operators 

const p =document.getElementById("some-p")

console.log(p!.innerText)