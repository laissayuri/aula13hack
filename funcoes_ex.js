// let lista = [];

// for (exercicio in exercicios){
//     lista.push (`Escreva uma função que ${exercicios[exercicio]}`);
// }

// let exercicios ={
//     exercicio1: "Recebe um valor (lista) de números e procure o número 3 na lista. Se achar retorna true, senão retorna false",
//     exercicio2: "Receba uma frase e uma letra, e retorna o número de vezes em que essa letra aparece na palavra",
//     exercicio3: "Seja igual à função anterior, mas ignores maiúsculas/minúsculas (not case-sensitive)"
//     exercicio4: "caso receba uma lista, procure o numero 3 na lista. caso receba uma frase, retorne
//     o numero de vezes em que a primeira letra da frase aparece nela toda, caso contrario, retorne 0"
// }



// // ------------- EXERCÍCIO 1 -------------------

// let lista = [];
// let tam_lista = Number(prompt("Qual é o tamanho da lista?"));

// for(let i = 0; i < tam_lista; i++) {
//     lista[i] = Math.floor(Math.random() * tam_lista);
// }
// console.log(lista);

// function achar_3() {
//     for (let i = 0; i < 10; i++){
//         if (lista[i] === 3){
//             return true;
//         }
//     }
//     return false;
// }

// function achar_3(lista){
//     for (let item of lista){
//         if (item === 3) {
//             return true;
//         }
//     }
//     return false;
// }

// achar_3(lista);

// console.log(achar_3(lista));




// // ------------- EXERCÍCIO 2 ----------------


// let frase = prompt("Digite a frase");
// let letra = prompt("Digite a letra");

// function achar_letra(frase, letra){
//     let quantidade = 0;
//     for (let caracter of frase){
//         if (caracter === letra){
//             quantidade++;
//         }
//     }
//     return quantidade;
// }

// achar_letra(frase, letra);
// console.log(achar_letra(frase, letra));

// // function achar_letra(){
// //     for(let i = 0; i < frase.length; i++){
// //         if (frase.charAt(i) === letra){
// //             quantidade++;
// //             console.log(quantidade);
// //         }
// //     }
// //     return quantidade;
// // }



// ------------- EXERCICIO 3 -------------------

// let frase = prompt("Digite a frase");
// let letra = prompt("Digite a letra");

// function achar_letra(frase, letra){
//     let quantidade = 0;
//     for (let caracter of frase.toLowerCase()){
//         if (caracter === letra.toLowerCase()){
//             quantidade++;
//         }
//     }
//     return quantidade;
// }

// achar_letra(frase, letra);
// console.log(achar_letra(frase, letra));



// ------------ Ex 4 -------------

let frase = prompt("Digite a frase");

function achar_3(lista){
    for (let item of lista){
        if (item === 3) {
            return true;
        }
    }
    return false;
}

function achar_letra(frase, letra){
    let quantidade = 0;
    for (let caracter of frase.toLowerCase()){
        if (caracter === letra.toLowerCase()){
            quantidade++;
        }
    }
    return quantidade;
}

function buscar(frase){
    if(typeof(frase) === "string"){
        return achar_letra(frase, frase.charAt(0));
    }
    else if (Array.isArray(frase)){
        return achar_3(frase);
    }
    return 0;
}
