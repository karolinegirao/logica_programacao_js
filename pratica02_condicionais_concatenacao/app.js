//Pergunte ao usuário qual é o dia da semana. 
// Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
alert('Boas vindas');
let diaSemana = 'Sábado';
let diaSemana2 = 'Domingo';
let qualDia = prompt('Em qual dia da semana estamos?');


if (qualDia == diaSemana) {
    console.log('Bom fim de semana!');
}
 else if (qualDia == diaSemana2) {
    console.log('Bom fim de semana!');
} else {
    console.log('Boa semana!');
}

//-------------------------------------------------//

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
// let numero = prompt('Digite um número: ');

// if (numero > 0) {
//     alert(`O número digitado foi: ${numero} e é positivo!`);
// } else if (numero < 0){
//     alert(`O número digitado foi ${numero} e é negativo!`);
// } else {
//     alert(`O número digitado foi ${numero} e é igual a zero!`);
// }

//-------------------------------------------------//

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
// Caso contrário, mostre "Tente novamente para ganhar.".

// let pontuacao = prompt('Informe a pontuação no jogo: ');

// if (pontuacao >= 100){
//     alert('Parabéns, você venceu!');
// } else{
//     alert('Tente novamente para ganhar.');
// }

//-------------------------------------------------//

//Crie uma mensagem que informa o usuário sobre o saldo da conta, 
// usando uma template string para incluir o valor do saldo.

// let saldo = Number(prompt('Informe o saldo da sua conta:'));

// alert(`Seu saldo atual é: R$${saldo}`);

//-------------------------------------------------//

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.


// let nome = prompt('Qual o seu nome ?');
// alert(`Seja bem-vindo(a) ${nome}!`)
