//criando nossa lista de objetos para ser as perguntas e respotas
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
            { texto: 'c', correcao:3 },
            { texto: 'd', correcao: 4 },
        ]
    },
    {
        pergunta: "Escolha o melhor personagem de todos",
        alternativas: [
            { texto: 'goku', correcao:1 },
            { texto: 'luffy', correcao: 2 },
            { texto: 'naruto', correcao: 3},
            { texto: 'sung', correcao: 4},
        ]
    },
];
//DOM
const container = document.getElementById('perguntas');
const btn = document.getElementById('btn');
const pergunta = document.getElementById('pergunta');
const startBtn = document.getElementById('startBtn');

let respostaSelecionanda = null;
let contador = 0;
let correto = 0;
//salavdo valores para utilizar no placar e na mudanca do indice

document.querySelector('h2').style.display = 'none';
pergunta.style.display = 'none';
//nao mostrar as perguntas
//funcao para renderizar as perguntas
const renderizarPerguntas = (index) => {
    container.innerHTML = '';
    respostaSelecionanda = null;
    pergunta.innerHTML = perguntas[index].pergunta;
// usando um metodo de array, para percorrer item por item
    perguntas[index].alternativas.map((item) => {
        const newBtn = document.createElement('button');
        newBtn.innerHTML = item.texto;
        container.appendChild(newBtn);
//evento para selecioanr a resposta
        newBtn.addEventListener('click', () => {
            respostaSelecionanda = item.correcao ? 1 : 2; //um tipo de condicao 
            [...container.children].forEach(btn => btn.style.backgroundColor = ''); //metodo spread (...) ele serve para adicionar um novo item na array
            newBtn.style.backgroundColor = '#ccc';
        });
    });
};


startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    document.querySelector('h2').style.display = 'block';
    pergunta.style.display = 'block';
    btn.style.display = 'inline-block';
    renderizarPerguntas(contador); //chamando a funcao
});

btn.addEventListener('click', () => {
    //outro tipo de condicao
    if (respostaSelecionanda === null) {
        alert('Escolha uma resposta antes');
        return;
    }

    if (respostaSelecionanda === 1) {
        correto++;
    }

    contador++;
//essa condicao serve para, caso tenha mais perguntas eh para o quiz continuar caso n tenha ele finaliza
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
//botao para recomecar
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
