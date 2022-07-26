function calculadoraDivisao(n1, n2) {
    /*NESSE EXEMPLO HOUVE UM ERRO DE SEMÂNTICA, 
POIS FOI COLOCADO UM ARGUMENTO CHAMADO N11, MAS NO BLOCO ESTÁ N1*/
    try {
        return n11 / n2
    } catch (erro) { //AQUI HAVERÁ A CAPTURA DO ERRO
        throw console.log("Erro: Está havendo algum erro de semântica!") // A MENSAGEM QUE O USUÁRIO VERÁ
    }
}

console.log(calculadoraDivisao(50, 5))