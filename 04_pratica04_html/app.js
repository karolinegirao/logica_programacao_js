//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio.';


//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function clikConsole(){
    console.log('O botão Console foi clicado!');
}


//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function clickAlert(){
    alert('Eu amo JS !');
}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
// Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function qualCidade(){
    let cidade = prompt("Digite o nome de uma cidade Brasileira:");
    if (cidade){
        alert(`Estivem em ${cidade} e lembrei de você. `)
    }
}

//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function somarNumeros(){
    let numeroUm = parseInt(prompt("Digite um número inteiro:"));
    let numeroDois = parseInt(prompt("Digite outro número inteiro:"));

    if (!isNaN(numeroUm) && !isNaN(numeroDois)){
        let soma = numeroUm + numeroDois;
        alert(`A soma de ${numeroUm} + ${numeroDois} é ${soma}.`);
    } else{
        alert("Por favor, digite apenas números inteiros válidos.");
    }
}

