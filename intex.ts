// type guard
function sum(a: number| string, b: number|string){
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a)+ parseFloat(b))
    }
    else if (typeof a=== "number" && typeof b === "number"){
        console.log(a - b)
    }
    else{ 
        console.log("Não é possivel")
    }
}

sum ("73", "2")
sum(24, 294)
sum(2, "67")

//checando se o valor existe
function operations(arr: number[], operation?: string|undefined){
    if(operation){
        if (operation === "sum"){
            const sum = arr.reduce((i, total)=> i+total)
            console.log(sum)
        }
        else if(operation ==="mult"){
            const mult = arr.reduce((i,total)=> i* total)
            console.log(mult)
        }
    }
    else{
        console.log("Digite a operação a ser feita")
    }
}

operations ([2,4,5], "sum")
operations ([2,4,5], "mult")
operations ([2,4,5])

//instace of

class User{
    name

    constructor(name: string){
        this.name = name
    }
}

class SuperUser extends User{
    constructor (name: string){
        super(name)
    }
}

const jhon = new User("Jhon")
const paul = new SuperUser("Paul")

console.log(jhon)
console.log(paul)

function userGreeting (user: object){
    if (user instanceof SuperUser){
        console.log(`Olá, SuperUsuario ${user.name}`)
    } else if(user instanceof User){
        console.log(`olá, ${user.name}`)
    }
}

userGreeting(paul)
userGreeting(jhon)


//operador in

class Dog{
    name
    raca


    constructor(name: string, raca?: string){
        this.name = name
        if(raca){
            this.raca = raca
        }
    }
}

const turca =new Dog("turco")
const bob = new Dog("bob", "husky")

function detalhesdog(dog: Dog){
    if ('raca' in dog){
        console.log(`a raça eh: ${dog.raca}`)
    } else {
        console.log(`o cachorro n tem raca`)
    }
}

detalhesdog(turca)
detalhesdog(bob)