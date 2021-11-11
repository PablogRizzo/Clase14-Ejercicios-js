const log = console.log;

// 1-
//  str = "origin"
//   cambiar las vocales por el numero 1
//   output => 1r1g1n
log("Ejercicio 1");

let str = "origin"

str = str.replace(/[aeiou]/ig,"1");

log(str);
// ===========================================================

// 2-
//  Crear una función que acepte un parámetro con los valores desde 1 hasta 5
//  si valor numérico ingresado es 1 mostrar una lista del 1 al 10, si es 2 mostrar del 2 al 10,
//  teniendo en cuenta el limite es 10
//   posibles salidas esperadas:
//   output => 1...10
//   output => 2...10
//   output => 3...10
//   output => 4...10
//   output => 5...10
// ===========================================================
log("Ejercicio 2");

var arr = [1,2,3,4,5,6,7,8,9,10];
function listaNumeros(num){
    if(num <= 5){
        let i = num-1;

        switch(num) {
        case 1: for(; i <= 9; i++){
                    log(arr[i]);
                }
                break;
        case 2: for(; i <= 9; i++){
                    log(arr[i]);
                }
                break;
        case 3: for(; i <= 9; i++){
                    log(arr[i]);
                }
                break;
        case 4: for(; i <= 9; i++){
                    log(arr[i]);
                }
                break;
        case 5: for(; i <= 9; i++){
                    log(arr[i]);
                }
                break;
        }
    }else{
        log("Numero incorrecto...");
    }
}

listaNumeros(5);

// 3-
//   arr = [10, "20", 30, "40", 50]
//   verificar cada elemento sea de  tipo number y sino lo es cambiar su  tipo
//   a number
//   output => [10, 20, 30, 40, 50]
// ===========================================================

log("Ejercicio 3");

let arreglo = [10, "20", 30, "40", 50];

function convertirANumber(array){
    for(let i=0; i < array.length; i++){
        if(typeof array[i] != "Number"){
            array[i] = Number([i]);
        }
    }
    return array;
}

log(convertirANumber(arreglo));

// 4-
//  arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"]
//  eliminar los elementos repetidos, nota: (el segundo elemento repetido)
//  output => [2, 4, 7, 1, "foo", "bar", "qux", 3]

log("Ejercicio 4");

let arrayy = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"];

log(new Set(arrayy));