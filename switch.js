const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){
        case 10://no swicth o console vai ler o codigo após as sentenças, independente da quantidade.
        case 9:
            console.log('Quadro de honra')
            break
            case 8: case 7://podem ser colocadas na mesma linha que o switch entende o processo.
            console.log('Aprovado')
            break
            case 6: case 5: case 4: 
            console.log('Recuperação')
            break
            case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
            default: 
            console.log('Nota inválida')
    }
}

imprimirResultado(10)//Quadro de honra
imprimirResultado(8.9)//Aprovado
imprimirResultado(6.55)//recuperação
imprimirResultado(2.3)//reprovado
imprimirResultado(-1)//nota invalida
imprimirResultado(11)//nota invalida
