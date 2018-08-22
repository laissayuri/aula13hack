//----------------- FUNÇÕES ----------------
// function nnome_funcao(argumento1, argumento2) { //assinatura da função
//     //qualquer coisa que a função precise executar;
//     return valor_retorno;
// }


// DECLARAÇÃO de uma função => fala que a variavel quadratica é uma função
function quadratica(numero){ // entrada
    let resultado = numero ** 2;
    return resultado; // saida
}

// CHAMADA de função => executar a função
quadratica(6) // 6 é o PARAMETRO é valor que preenche um argumento



// tira a raiz quadrada da lista
function raiz_quad(lista){
    let resultados = [];
    for(let numero of lista){
        resultados.push(Math.sqrt(numero));
    }
    return resultados;
}

// função sem ARGUMENTOS
function dizer_oi(){
    return "OOOOI!";
}