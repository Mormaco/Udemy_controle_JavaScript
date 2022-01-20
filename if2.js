function teste1(num) {
    if (num > 7)
    console.log(num)//o if ele pode ser executado sem as chaves, porém é uma boa prática colocar chaves

console.log('Final')
} 

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); //não usar ';' com bloco if ou nenhuma estrutura de controle, por que ele não deixa a condição ser inclusa no bloco
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)


