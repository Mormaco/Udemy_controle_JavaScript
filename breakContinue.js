const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(x in nums){
    if (x == 5){
        break//o break vai exercer influência sobre o bloco mais próximo dele, nesse caso foi o "for". o break causa desvio pra fora do laço corrente.
    }
    console.log(`x = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5){
        continue//causa desvio de fluxo e volta pra próxima repetição 
    }
    console.log(`${y} = ${nums[y]}`)
}