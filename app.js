let listaDeNumerosSorteados = [];
let maxNumeros = 10;
let numeroSecreto = numeroAleatorio ();
let tentativas = 1;
 

function exibirNaTela (tag, textoExibido) {
    let campo = document.querySelector (tag);
    campo.innerHTML = textoExibido;
    responsiveVoice.speak(textoExibido, 'Brazilian Portuguese Female', {rate:1.2});
}

textoInicial ();

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    if (chute == numeroSecreto) {
       exibirNaTela ('h1', 'Acertou!');
       let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
       let mensagemTentativas = `Parabéns! Você conseguiu acertar com ${tentativas} ${palavraTentativa}!`
       exibirNaTela ('p', mensagemTentativas);
       document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto){
         exibirNaTela('p', `O numero secreto é menor  que ${chute}`);
         }else{
         exibirNaTela('p', `O numero secreto é maior que ${chute}`);
        }
        tentativas ++
        limparCampo(); 
    }
}
function numeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random()* maxNumeros +1);
    let quantidadeNumerosDaLista = listaDeNumerosSorteados.length;

    if (quantidadeNumerosDaLista == maxNumeros){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo (){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio ();
    tentativas = 1;
    textoInicial ();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function textoInicial (){
    exibirNaTela ('h1', 'Jogo do número secreto');
    exibirNaTela ('p', 'Escolha um número de 1 a 100 se você for capaz!');
}