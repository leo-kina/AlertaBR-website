const perguntas = [
    {
        pergunta: "selecione uma palavra?",
        alternativas: [
            { texto: 'a', correcao: false },
            { texto: 'b', correcao: false },
            { texto: 'c', correcao: true },
            { texto: 'd', correcao: false },
        ]
    },
    {
        pergunta: "Escolha uma comida boa!",
        alternativas: [
            { texto: 'a', correcao: false },
            { texto: 'b', correcao: false },
            { texto: 'c', correcao: true },
            { texto: 'd', correcao: false },
        ]
    },
    {
        pergunta: "Escolha o melhor personagem de todos",
        alternativas: [
            { texto: 'goku', correcao: false },
            { texto: 'luffy', correcao: false },
            { texto: 'naruto', correcao: false },
            { texto: 'sung', correcao: true },
        ]
    },
];

const container = document.getElementById('perguntas');
const btn = document.getElementById('btn');
const pergunta = document.getElementById('pergunta');
const startBtn = document.getElementById('startBtn');

let respostaSelecionanda = null;
let contador = 0;
let correto = 0;


document.querySelector('h2').style.display = 'none';
pergunta.style.display = 'none';

const renderizarPerguntas = (index) => {
    container.innerHTML = '';
    respostaSelecionanda = null;
    pergunta.innerHTML = perguntas[index].pergunta;

    perguntas[index].alternativas.map((item) => {
        const newBtn = document.createElement('button');
        newBtn.innerHTML = item.texto;
        container.appendChild(newBtn);

        newBtn.addEventListener('click', () => {
            respostaSelecionanda = item.correcao ? 1 : 2;
            // Marca visual
            [...container.children].forEach(btn => btn.style.backgroundColor = '');
            newBtn.style.backgroundColor = '#ccc';
        });
    });
};


startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    document.querySelector('h2').style.display = 'block';
    pergunta.style.display = 'block';
    btn.style.display = 'inline-block';
    renderizarPerguntas(contador);
});

btn.addEventListener('click', () => {
    if (respostaSelecionanda === null) {
        alert('Escolha uma resposta antes');
        return;
    }

    if (respostaSelecionanda === 1) {
        correto++;
    }

    contador++;

    if (contador < perguntas.length) {
        renderizarPerguntas(contador);
    } else {
        btn.style.display = 'none';
        pergunta.innerHTML = "";
        container.innerHTML = '';
        
        const finalP = document.createElement('p');
        finalP.innerHTML = `Fim do Quiz! Você acertou ${correto} de ${perguntas.length}`;
        document.body.appendChild(finalP);

        const restartBtn = document.createElement('button');
        restartBtn.innerHTML = 'Recomeçar Quiz';
        document.body.appendChild(restartBtn);

        restartBtn.addEventListener('click', () => {
            contador = 0;
            correto = 0;
            respostaSelecionanda = null;
            finalP.remove();
            restartBtn.remove();
            renderizarPerguntas(contador);
            btn.style.display = 'inline-block';
        });
    }
});
