// i = 10;
// j = 10;

for (var i = 0; i <= 3; i++){
    console.log(i);
}

for (let j = 0; j <= 3; j++){
    console.log(j);
    //j só existe DENTRO do if ou do while => esocpo de bloco.
}


// //---------- EX1 ------------
//let i = 10;
// let j = 15;

// function escopos(){
//     let i = 5;
// }

// escopos();

// console.log(i);
// console.log(j);




// //---------- EX2 ------------
//let i = 10;
// let j = 15;

// function escopos(){
//     let i = 5;
//     return i;
// }

// i = escopos();

// console.log(i);
// console.log(j);



// //---------- EX3 ------------
// let i = 10;
// let j = 15;

// function escopos(){
//     i = 5;
//     // não tem nenhum let ou const => nao existe um i efetivamente na função escopos
// }

// // dai ele pega o i do GLOBAL e substitui o valor, ja que nao tem um i dentro do LOCAL do escopos
// escopos();

// console.log(i);
// console.log(j);



// //---------- EX4 ------------
// let i = 10;
// let j = 15;

// function escopos(){
//     i = 5;
// }

// escopos();

// console.log(i); //cria-se uma variavel global "automaticamente"
//                 //pq nao achou o i nem no local nem no global
//                 //declarou a variavel, O JS VAI USAR A VARIAVEL DE ALGUM JEITO
// console.log(j);




// // ---------- EX5 ------------
// let i = 10;
// let j = 15;

// function escopos(i){ // i é undefined
//     i = 5; // i vira 5
// } // i morre aqui

// escopos();

// console.log(i);
// console.log(j);



// // ---------- EX6 ------------
// let i = 10;
// let j = 15;

// function escopos(i){ // i entra como 10
//     let k = 8;
//     i = 5; // i argumento vira 5
//     console.log(i);
//     console.log(j);
//     console.log(k);
// }

// escopos(i); // i global ainda é 10 na saída
//             // i global é diferente do i local

// console.log(i);
// console.log(j);
// console.log(k);





//
