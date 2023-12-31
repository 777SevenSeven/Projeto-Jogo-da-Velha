window.alert('Bem vindo(s)^^ Recomendação: jogue com 2 jogadores (Não há bot)');

function colocarMusiquinha() {
    var audio = document.getElementById("myAudio");
    audio.volume = 0.1;

    // Verifica se a música está pausada, se estiver, reproduz;
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Função para colocar 'X' ou 'O' no quadrado clicado
function colocarXO(quadrado) {
    // Verifica se o quadrado já está preenchido
    if (!quadrado.innerHTML.trim()) {
        // Se estiver vazio, coloca 'X' ou 'O' dependendo do valor de Round
        if (Round % 2 === 0) {
            quadrado.innerHTML = 'O';
            quadrado.style.color = '#FF5E00';
            NOempate++;
        } else {
            quadrado.innerHTML = 'X';
            NOempate++;
        }

        // Incrementa a variável Round após a jogada
        Round++;
    }
}

// Função para verificar se há uma vitória
function verificarVitoria() {
    const tabuleiro = [
        document.getElementById('quadrado1').innerText,
        document.getElementById('quadrado2').innerText,
        document.getElementById('quadrado3').innerText,
        document.getElementById('quadrado4').innerText,
        document.getElementById('quadrado5').innerText,
        document.getElementById('quadrado6').innerText,
        document.getElementById('quadrado7').innerText,
        document.getElementById('quadrado8').innerText,
        document.getElementById('quadrado9').innerText,
    ];

    // Verificar linhas
    for (let i = 0; i < 9; i += 3) {
        if (tabuleiro[i] !== '' && tabuleiro[i] === tabuleiro[i + 1] && tabuleiro[i] === tabuleiro[i + 2]) {
            return true;
        }
    }

    // Verificar colunas
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i] !== '' && tabuleiro[i] === tabuleiro[i + 3] && tabuleiro[i] === tabuleiro[i + 6]) {
            return true;
        } 
    }

    // Verificar diagonais
    if (tabuleiro[0] !== '' && tabuleiro[0] === tabuleiro[4] && tabuleiro[0] === tabuleiro[8]) {
        return true;
    } 

    if (tabuleiro[2] !== '' && tabuleiro[2] === tabuleiro[4] && tabuleiro[2] === tabuleiro[6]) {
        return true;
    } 

    return false;
}

let Round = 1;
let NOempate = 1;

// Adiciona evento de clique para cada quadrado
for (let i = 1; i < 10; i++) {
    const quadrado = document.getElementById('quadrado' + i);

    quadrado.addEventListener('click', function(event) {
        const elementoClicado = event.currentTarget;
        colocarXO(elementoClicado);
        
        setTimeout(function () {
            // Verificar vitória após o atraso de, por exemplo, 3 segundos
            if (verificarVitoria()) {
                const victoryAudio = document.getElementById('victoryCharmanderAudio');
                const victoryAudio2 = document.getElementById('victoryBulbasaurAudio');
                if(Round % 2 !== 0) {
                    window.alert('Vitória do Charmander! O tabuleiro será limpado. (feche a mensagem)');
                    myAudio.pause();
                    victoryAudio.play();
                    victoryAudio.volume = 0.1;
                    NOempate = 0;
                }
                else if(Round % 2 == 0) {
                    window.alert('Vitória do Bulbasaur! O tabuleiro será limpado. (feche a mensagem)');
                    myAudio.pause();
                    victoryAudio2.play();
                    victoryAudio2.volume = 0.1;
                    NOempate = 0;
                }
                
                // Recarrega a página após a vitória
                setTimeout(function () {
                    window.location.reload();
                }, 10000); // Tempo de espera antes de recarregar a página - 10 segundos
            } 
            if(Round == 10 && NOempate == 10)  {
                window.alert('Empataram (feche a mensagem)');
                setTimeout(function () {
                window.location.reload();
                }, 5000); // Tempo de espera antes de recarregar a página - 5 segundos
            }
                
        }, 500); //meio segundo de delay para aparecer as mensagems de vitória e a musica
    }
    )
}

