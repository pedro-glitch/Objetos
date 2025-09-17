/*let nome = "Pedro"
let idade = 31
let email = "blabla@gmail.com"
let estudando = true
console.log(`Meu nome é ${nome},tenho ${idade} anos,meu e-mail é ${email} e estou estudando: ${estudando}`)
console.log(typeof nome ,typeof idade, typeof estudando)*/

/*let precoUnitario = parseFloat(prompt("Digite o preço"))
let quantidade = Number(prompt("digite a quantidade"))
let total = precoUnitario*quantidade
if(total>=100){
    total *=0.90
    console.log("Novo valor "+total)
}
else{console.log(total)}
if(quantidade%2==0){
    console.log("Quantidade é par")
}
else{
    console.log("É impar")
}
if(quantidade>=5 && quantidade<=20){
    console.log("está entre 5 e 20")
}else{
    console.log("não está entre 5 e 20")
}*/

/*let nota = Number(prompt("Digite sua nota"))
if(nota>=90&&nota<=100){
    conceito = "A"
}
else if(nota>=80&&nota<90){
    conceito = "B"
}
else if (nota>= 70 &&nota<80){
    conceito = "C"
}
else if(nota>=60 && nota<70){
    conceito = "D"
}
else if(nota<60){
    conceito = "F"
}
console.log(`O aluno tirou ${nota} e ficou com conceito ${conceito}`)*/

/*let num = Number(prompt("digite seu numero"))
for(let i = 0; i<=10; i++){
    mult=num*i
    console.log(`${num} x ${i} = ${mult}`)
}*/

/*let compra = ["pera","uva","maçã","banana","goiaba"]
for(let i=0;i<compra.length;i++){
    console.log(`${i +1}. ${compra[i]}`)
}
function imprimirRelatorio(){
    console.log(compra)
}
imprimirRelatorio()*/

/*let aluno={
    nome: "Pedro",
    idade: 31,
    curso: "computação",
    apresentar(){
        console.log(`Meu nome é ${aluno.nome}, tenho ${aluno.idade} anos`)
    },

}
aluno.apresentar()*/

/*function calcularMedia(a,b,c=0){
    media = (a*b)/2
    console.log(media)
}
function resultadoFinal(nota){
    if(nota>=60){
        console.log("aprovado")
    }
    else if (nota>=40 && nota <60){
        console.log("Recuperaçao")
    }
    else if(nota <40){
        console.log("Reprovado")
    }
}calcularMedia(10,4)*/

/*let produto1 ={
    nome: "vassoura",
    preço: 60,
    quantidade: 5
}
let produto2={
    nome: "shampoo",
    preço: 20,
    quantidade: 5
}
let produto3={
    nome: "pao",
    preço: 2,
    quantidade: 2
}
let carrinho = [produto1,produto2,produto3]
function totalCarrinho(){
    valortotal=(produto1.quantidade*produto1.preço)+(produto2.quantidade*produto2.preço)+(produto3.quantidade*produto3.preço)
    console.log(valortotal)
}totalCarrinho()
function filtrarCaros(){
    for(let i=0;i<carrinho.length;i++)
       if(carrinho[i].preço>=50){
        console.log(carrinho[i].nome)
       }
    
}filtrarCaros()*/


