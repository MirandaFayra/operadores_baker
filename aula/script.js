//console.log('Salveeee Baker!')
/*Crie um programa que calcule o desconto de um produto e o valor final dele após o desconto.. 
O usuário deve inserir o preço original e o percentual de desconto. 
O código deve calcular o valor do desconto e imprimir o resultado no console.
Exemplo: "O valor do desconto é de R$" , valorDesconto
Ao final, deverá imprimir o valor do produto com o desconto
Exemplo: "O valor final do produto com desconto é de R$" ,  produtoComDesconto*/

// Produto custa R$ 100  | => Desconto 20% => Valor em R$ descontados => preço* (20/100) = R$ 20 | valor final = preco - desconto 

let preco = Number( prompt('Insira o preço do produto'))
let percentualDeDesconto = Number(prompt('Insira a porcentagem de desonto'))
let valorDoDesconto = preco *(percentualDeDesconto/100) 
let valorFinal = preco - valorDoDesconto 

console.log(`O valor do desconto é de R$ ${valorDoDesconto}`)
console.log(`O valor final do produto com desconto é de R$ ${valorFinal}`);

//-------------- 
