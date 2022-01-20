//usado para quando é necessário uma repetição indeterminada, a repetição só cessa quando é colocada uma codição até parar...ex: o código só para de funcionar quando o usuário colocar -1, se não ouver esse valor ele funciona repetidamente.

function getInteriroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0 

while (opcao != -1) {
    opcao = getInteriroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')
//nesse exemplo o código no console vai gerar números aleatórios até que cai o "-1" para ser interrompido.