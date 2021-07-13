//DESTRUCTURING


var data = {
    name: 'Jeferson',
    surname: 'Macedo',
    age: 29,
    blog: 'http://www.jegersonblog.com',
    social: {
        twitter: 'http://twitter.com/jefersonmmacedo/',
        facebook: 'http://facebook.com/jefersonmmacedo/'
    }
}

// const name = data.name;
// const surname = data.surname;
// const age = data.age;
// const twitter = data.social.twitter;

// console.log(name)
// console.log(surname)
// console.log(age)
// console.log(twitter)

const {name, surname, age} = data;
const {facebbok, twitter} = data.social;

console.log(name, surname)


//DESTRUCTURING EM ARRAY

const arr = ['Jeferson', 'Macedo', 26, 'Rio Bonito'];

const [name2, surname2, age2, city2] = arr;

console.log(name2, surname2, age2, city2)


// SWAP de variáveis com destructuring
let a = 100;
let b = 250;

console.log( a + " - " + b);

[a, b] = [b, a];

console.log( a + " - " + b);


// spread operator - Introdução

let front = ['React', 'Vue', 'Angular'];
let back = ['Java', 'Node', 'Pyton']

console.log([...'jeferson']);
console.log(...'jeferson');

console.log(...front);
console.log([...back]);

// spread operator - Funções
function lanche(pão, carne, salada) {
    console.log(`Meu lanche tem ${pão}, ${carne} e ${salada}`);
}

const igredientes = ['Pão Autraliano', 'Blend 100g', 'Alfaçe e Tomate Roxo'];

console.log(lanche(...igredientes));

//Rest prams
function multiply(mult, arg1, arg2, arg3) {

}
// Promises
var defer = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(true) {
            resolve('Jeferson Macedo - Aceito')
        } else {
            reject('Jeferson Macedo - Rejeitado')
        }
    }, 1000)

});

defer.then((data) => {
    console.log(data)
}).catch(error => {
    console.log(error)
})

///////------------------------------------///////

// Herança prototipal

// //Class
// function Animal(kind, sound) {
//     //Constructor
//     this.kind = kind;
//     this.sound = sound;
// }

// //Method
// Animal.prototype.hello = function() {
//     console.log(`O meu ${this.kind} adora ${this.sound} quando está feliz!`)
// }


//CRIANDO CLASSES ES6
class Animal {
    constructor(kind, sound) {
        this.kind = kind;
        this.sound = sound;
    }

    hello() {
        console.log(`O meu ${this.kind} adora ${this.sound} quando está feliz!`)
    }

    static info() {
        console.log('Method Class Animal')
    }

    get name() {
        console.log('Meu nome é Olaf');

    }
 }



const Cachorro = new Animal('Cachorro', 'Latir');
const Gato = new Animal('Gato', 'Miar');

console.log(Cachorro.hello());
console.log(Cachorro.name);
console.log(Gato.hello());
console.log(Animal.info())
