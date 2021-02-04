var altura = 0
var largura = 0
var vidas = 1
var tempo = 40

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

    if(nivel === 'normal'){
    
        criaMosquitoTempo = 1500;
    
    } else if(nivel === 'dificil'){
    
        criaMosquitoTempo = 1000;
    
    } else if(nivel === 'impossivel'){
        
        criaMosquitoTempo = 750;
    }
        

function AdjustingGameSpace(){
    altura = window.innerHeight
    largura = window.innerWidth
    
    console.log(largura, altura)
}
AdjustingGameSpace()

Cronometro = setInterval(function(){
    tempo -= 1;
    if(tempo < 0){
        clearInterval(Cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

// POSICAO EM QUE O MOSQUITO APARECERÁ
function posicaoAleatoria(){

    //Remover o mosquio anterior (caso exista)]
        if  (document.getElementById('mosquito')) {
            document.getElementById('mosquito').remove()
            
            if( vidas > 3){
                    
                window.location.href = "fim_de_jogo.html"
            }   else{
                    document.getElementById('v' + vidas).src = "imgs/coracao_vazio.png"
                    vidas++
                }
        }   

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    console.log(posicaoX, posicaoY)

    //criando o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = "imgs/mosquito.png"
    mosquito.className = TamanhoAleatorio() + ' ' + LadoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)

}   
// TAMANHO DO MOSQUITO ALEATORIO 
function TamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
    
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2: 
            return 'mosquito3'
    }

   
}
// LADO EM QUE O MOSQUITO APARECERÁ ALEATORIO //
function LadoAleatorio(){

    var classe = Math.floor(Math.random() * 2)

    switch(classe){
    
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }

 
}