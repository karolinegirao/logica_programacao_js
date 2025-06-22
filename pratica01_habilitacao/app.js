alert('Boas vindas ao nosso site!');

let nomePergunta = prompt('Qual o nome do usuário ?'); //variável
let idadePergunta = prompt('Qual a sua idade ?'); //variável

if(idadePergunta >= 18){
    alert(`${nomePergunta} pode tirar a habilitação!`)
}
else{
    alert(`${nomePergunta} ainda não tem idade para tirar a habilitação!`)
}
