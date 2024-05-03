//Arrays
let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [[0, 1, 2], ['a', 'b','c']];

//Funciones
function suma(n1, n2){
    return n1 + n2;
}
function potenciacion(p1, p2){
    return Math.pow(p1, p2);
}

function separarPalabras(palabra){
   return palabra.split(" ");
}
console.log(separarPalabras('Hola mundo mundial mundano'));

//8 Repetirstring
function repetirString(str, numrep){
    let resultadoRepetido = "";
    for(let i = 0; i < numrep; i++){
        resultadoRepetido += str;
    }
    return resultadoRepetido;
}

//9 Solo divisible entre 1 y el mismo
function esPrimo (n1){
   if(n1 <= 1 ){
    return false;
   } 
   for(let i = 2; i <= n1; i++){
    if(n1 % i === 0){
        if(i === n1){
            return true;
        }else{
            return false;
        }
    }
   }
}
console.log(esPrimo(11))

//Mezclando Arrays y funciones
let arr = [2, 5, 1, 9, 6];

function ordenarArray(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
}

function obtenerPares(arr){
    return arr.filter(function(numero){
        return numero % 2 === 0;
    })
}
//12
let array = [0, 1, 2]
function pintarArray(array){
    return '[' + array.join(", ") + ']'
}

//13
function arrayMapi(arr, func){
return arr.map(func);
}

//14
function eliminarDuplicados(array) {
    return array.filter((elemento, indice) => array.indexOf(elemento) === indice);
}



//15
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//16
let holaMundo = ['Hola', 'Mundo'];

//17
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

//18
let arrayDeArrays = [
    [756, 'nombre'],
    [225, 'apellido'],
    [298, 'direccion']
];

//Funciones
//19
function multiplicacion(n1, n2){
    return n1 * n2;
}

//20
function division(n1, n2){
    return n1 / n2;
}

//21
function esPar(number){
    return number % 2 === 0;
}

//22
function suma(n1, n2){
    return n1 + n2;
}
function resta(n1, n2){
    return n1 - n2;
}
function multiplicacion(n1, n2){
    return n1 * n2;
}
let arrayFunciones = [suma, resta, multiplicacion];

//Mezclando arrays y funciones
//23
let arr1 = [2, 4, 3, 1, 10];
function ordenarArray2(arr1){
    let arrayOrdenado2 = arr1.sort((a,b) => b - a)
    return arrayOrdenado2;
}
//24
function obtenerImpares(arr1){
    let impares = arr1.filter(function(numero){
        return numero % 2 !== 0;
    });
    return impares;
}
//25
function sumarArray(arr1){
    resultadoSuma = 0;
    for(let i = 0; i < arr1.length; i++){
        resultadoSuma += arr1[i];
    }
    return resultadoSuma;
}
//26
function multiplicarArray(arr1){
   let resultadoMultiply = 1; //Para multiplicar el primer valor
   for(let i = 0; i < arr1.length; i++){
        resultadoMultiply *= arr1[i];
   }
   return resultadoMultiply;
}