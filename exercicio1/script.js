/*Utilizando o laço while, escreva um código que recebe um prompt perguntando se a pessoa deseja comer mais coxinhas. 
“S” deve representar “sim”, e “N” deve representar “não”. Crie também uma let conta para guardar o valor total.
Toda vez que a resposta for sim, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. 
Quando a resposta não for sim, devemos imprimir o valor total da conta.*/

let salgado = prompt("Você deseja comer mais coxinhas?")
let soma = 0
while (salgado === "sim") {
    soma = soma + 2.50
    salgado = prompt("Você deseja comer mais coxinhas?")
}

console.log(`Valot total da conta = ${soma}`)