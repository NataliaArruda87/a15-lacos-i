/*Crie um array com 5 strings. Faça um programa que percorra 
este array e imprima as strings em formato de ranking, como
no exemplo abaixo: */

let paises = ["Egito", "Vietnã", "Italia", "Inglaterra", "Japão"]

for(let i = 0; i < paises.length; i++) {
    console.log(`${i+1} - ${paises[i]}`)
}
