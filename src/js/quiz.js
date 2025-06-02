const perguntas = [
    {
        pergunta: "selecione uma palavra?",
        alternativas: [
            { texto: 'a', correcao: 1 },
            { texto: 'b', correcao: 2 },
            { texto: 'c', correcao: 3 },
            { texto: 'd', correcao: 4 },
        ]
    },
    {
        pergunta: "Escolha uma comida boa!",
        alternativas: [
            { texto: 'a', correcao: 1 },
            { texto: 'b', correcao: 2 },
            { texto: 'c', correcao: 3 },
            { texto: 'd', correcao: 4 },
        ]
    },
    {
        pergunta: "Escolha o melhor personagem de todos",
        alternativas: [
            { texto: 'goku', correcao: 1 },
            { texto: 'luffy', correcao: 2 },
            { texto: 'naruto', correcao: 3 },
            { texto: 'sung', correcao: 4 },
        ]
    },
];

const afirmacoes = [
    { text: 'Você tem coisa1' },
    { text: 'Você tem coisa2' },
    { text: 'Você tem coisa3' },
    { text: 'Você tem coisa4' },
];

const container = document.getElementById('perguntas');
const btn = document.getElementById('btn');
const pergunta = document.getElementById('pergunta');
const startBtn = document.getElementById('startBtn');

let contador = 0;
let somaResposta = 0;
let respostaSelecionada = null;

// Inicialmente esconde perguntas e botão enviar, só mostra o botão start
document.querySelector('h2').style.display = 'none';
pergunta.style.display = 'none';
btn.style.display = 'none';

function renderizarPerguntas(index) {
    container.innerHTML = '';
    respostaSelecionada = null;
    pergunta.textContent = perguntas[index].pergunta;

    perguntas[index].alternativas.forEach(item => {
        const newBtn = document.createElement('button');
        newBtn.textContent = item.texto;
        container.appendChild(newBtn);

        newBtn.addEventListener('click', () => {
            respostaSelecionada = item.correcao;

            // Remove a marcação de todos os botões
            [...container.children].forEach(btn => btn.style.backgroundColor = '');

            // Marca o botão clicado
            newBtn.style.backgroundColor = '#ccc';
        });
    });
}

startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    document.querySelector('h2').style.display = 'block';
    pergunta.style.display = 'block';
    btn.style.display = 'inline-block';
    renderizarPerguntas(contador);
});

btn.addEventListener('click', () => {
    if (respostaSelecionada === null) {
        alert('Escolha uma resposta antes');
        return;
    }

    somaResposta += respostaSelecionada;
    contador++;

    if (contador < perguntas.length) {
        renderizarPerguntas(contador);
    } else {
        // Final do quiz
        btn.style.display = 'none';
        pergunta.textContent = '';
        container.innerHTML = '';

        // Define qual mensagem vai aparecer conforme somaResposta
        let indiceAfirmacao;
        if (somaResposta <= 3) {
            indiceAfirmacao = 0;
        } else if (somaResposta <= 6) {
            indiceAfirmacao = 1;
        } else if (somaResposta <= 9) {
            indiceAfirmacao = 2;
        } else {
            indiceAfirmacao = 3;
        }

        const finalP = document.createElement('p');
        finalP.textContent = `Fim do Quiz! ${afirmacoes[indiceAfirmacao].text}`;
        document.body.appendChild(finalP);

        const restartBtn = document.createElement('button');
        restartBtn.textContent = 'Recomeçar Quiz';
        document.body.appendChild(restartBtn);

        restartBtn.addEventListener('click', () => {
            contador = 0;
            somaResposta = 0;
            respostaSelecionada = null;

            finalP.remove();
            restartBtn.remove();

            btn.style.display = 'inline-block';
            renderizarPerguntas(contador);
        });
    }
});
