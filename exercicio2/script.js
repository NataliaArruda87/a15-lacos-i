/*Crie um programa que peça um input de número para o usuário.
Com este número, o código deve imprimir a tabuada do número, 
de 1 a 10.*/

let inputUsuario = prompt("Digite um numero:")

for(let i = 1; i <= 10; i++) {
    tabuada = i * inputUsuario
    console.log(`${inputUsuario} x ${i} = ${tabuada}`)
}
