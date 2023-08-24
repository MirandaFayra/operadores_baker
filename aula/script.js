//console.log('Salveeee Baker!')
/*Crie um programa que calcule o desconto de um produto e o valor final dele após o desconto.. 
O usuário deve inserir o preço original e o percentual de desconto. 
O código deve calcular o valor do desconto e imprimir o resultado no console.
Exemplo: "O valor do desconto é de R$" , valorDesconto
Ao final, deverá imprimir o valor do produto com o desconto
Exemplo: "O valor final do produto com desconto é de R$" ,  produtoComDesconto*/

// Produto custa R$ 100  | => Desconto 20% => Valor em R$ descontados => preço* (20/100) = R$ 20 | valor final = preco - desconto 

/*
let preco = Number( prompt('Insira o preço do produto'))
let percentualDeDesconto = Number(prompt('Insira a porcentagem de desonto'))
let valorDoDesconto = preco *(percentualDeDesconto/100) 
let valorFinal = preco - valorDoDesconto 

console.log(`O valor do desconto é de R$ ${valorDoDesconto}`)
console.log(`O valor final do produto com desconto é de R$ ${valorFinal}`);
*/ 

//--------------  EXERCICIO 2 ------------- 

/*Crie um programa que calcule o Índice de Massa Corporal (IMC) de uma pessoa antes e depois de praticar exercícios. 
O usuário deverá informar o seu peso (anterior e atual) e altura 
Realize o cálculo utilizando os operadores aritméticos e relacionais. O resultado deve ser impresso no console.
 No cálculo deve ser verificado:
O IMC atual é maior ou igual ao anterior?
O IMC atual é menor ou igual ao anterior?*/ 

// IMC = PESO (KG) / ALTURA (AO QUADRADO)
// IMC = PESO (KG) / ALTURA X ALTURA

/*
let pesoAtual = Number(prompt('Digite o seu peso atual em kg')) // pós exs
let altura = Number(prompt('Digite a sua altura em metros'))
let pesoAntigo = Number(prompt('Digite seu peso antes do exs'))

let imcAtual = pesoAtual / (altura * altura)
let imcAntigo = pesoAntigo / (altura * altura)

console.log(`O IMC atual é ${imcAtual}`)
console.log (`O IMC antigo é ${imcAntigo}`)

//O IMC atual é maior ou igual ao anterior? => retorna boolean 
let imcMaiorOuIgual = imcAtual >= imcAntigo

//O IMC atual é menor ou igual ao anterior? => retorna boolean 
let imcMenorOuIgual = imcAtual <= imcAntigo

console.log(` O IMC atual é maior ou igual ao antigo ? : ${imcMaiorOuIgual} . O IMC atual é menor ou igual ao antigo ? : ${imcMenorOuIgual}`) */ 


//--------------  EXERCICIO 3 ------------- 

/*Crie um programa para entrada de um cinema:
Pergunte ao usuário sobre o seu ano de nascimento e do seu acompanhante. 
Calcule a idade de cada pessoa e faça as verificações abaixo usando operadores lógicos E, OU e Não:
O usuário e o seu acompanhante tem maioridade?
O usuário ou o seu acompanhante tem maioridade?
Ambos não têm maioridade?
Imprima no console o resultado de cada uma das verificações.*/

// IDADE = ano atual - ano de nascimento

//let anoAtual = 2023
let data = new Date 
let anoAtual = data.getFullYear()

let anoNascimentoUsuarie = Number(prompt('Digite seu ano de nascimento com os 4 digitos'))

let anoNascimentoAcompanhante = Number(prompt('Digite  ano de nascimento da pessoa acompanhante com os 4 digitos'))

let idadeUsuario = anoAtual - anoNascimentoUsuarie
let idadeAcompanhante = anoAtual - anoNascimentoAcompanhante

//O usuário e o seu acompanhante tem maioridade?
let usuarioEAcompanhanteMaior = idadeUsuario >= 18 && idadeAcompanhante >=18

//O usuário ou o seu acompanhante tem maioridade?
let usuarioOuAcompanhanteMaior = idadeUsuario >=18  || idadeAcompanhante >=18

//Ambos não têm maioridade?
let ambosMenores = idadeUsuario <= 18 && idadeAcompanhante <=18

console.log(`O usuário e o seu acompanhante tem maioridade?: ${usuarioEAcompanhanteMaior}. O usuário ou o seu acompanhante tem maioridade? : ${usuarioOuAcompanhanteMaior}. Ambos não têm maioridade? :${ambosMenores}  `);

