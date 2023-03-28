// Let se puede reasignar
// Js permite cambiar el tipo de la variable
// tipado debil

// Js tiene tipos dinamicos lo cual determina
// el tipo de una varibale de forma automatica
let firstName = 'Juan'

// Las variables no ya que son varibales solo de lectura
var secondName = 'Juan'

// El scope de estas son distintos siendo var 
// accesible desde fuera de la funcion donde la declares


// 7 tipos primitivos : num, string, boolean, undefined, null, bigInt, symbol
// Estos tipos son inmutables: de tal forma que no puedes cambiar el valor de una
// variable al usar una funcion pero si reasignarle el valor cambiado

// No primitivos y mutables : objetos, array, funciones
// Son mutables y pueden cambiar su valor
// un array declarado como constante se le puede añadir valores 
// pero no se puede reasignar Ejp:
const list = []
// Se añadiria el valor 1 a la constante mutandolo
list.push(1)
// Para insetar un elemento sin mutar
const anotherList = list.concat(3)

// Objetos

const persona ={
    name: 'Juan',
    age: 19,
    gender: 'male',
    isDeveloper: false
}

// referenciar propiedades de un objeto con una variable
const edad = 'age'
// devolveria (19) es decir el valor de age
console.log(persona[edad])

// Funciones
// Pueden guardarse en variables y pasarse como parametros
const sumar = (num1, num2) =>{
return num1+num2
}

// Forma de declarar funcion
// Esta funcion se podria usar arriba del codigo ( Hoisting)
function restar (a,b){
    return a-b
}
const result = sumar(5,2)
