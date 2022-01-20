const imprimirResultado = function (nota) {
    if (nota > 7){
        console.log('Aprovado!')
    }else {
        console.log('Reprovado!')
    }
}

imprimirResultado(8.5)
imprimirResultado(4.5)
imprimirResultado('Epa')//nesse caso é pra ter cuidado por que o JavaScript ao invés de dar erro ele imprimi 'Reprovado' por ser diferente do resultado esperado na condição.JavaScript é uma linguagem fracamente tipada.