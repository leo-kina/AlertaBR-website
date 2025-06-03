document.addEventListener('DOMContentLoaded', () => {
  // --- Quiz ---
  const perguntas = [
    {
      pergunta: "Você mora próximo a algum curso d'água (rio, lago, canal)?",
      alternativas: [
        { texto: "Sim, a menos de 100 metros", correcao: 4 },
        { texto: "Sim, entre 100 e 500 metros", correcao: 3 },
        { texto: "Sim, mas a mais de 500 metros", correcao: 2 },
        { texto: "Não moro próximo a nenhum curso d'água", correcao: 1 },
      ],
    },
    // ... (as outras perguntas aqui, mantidas iguais) ...
    {
      pergunta: "Qual a frequência com que você recebe informações sobre prevenção a desastres na sua comunidade?",
      alternativas: [
        { texto: "Nunca recebo", correcao: 4 },
        { texto: "Raramente", correcao: 3 },
        { texto: "Ocasionalmente", correcao: 2 },
        { texto: "Frequentemente", correcao: 1 },
      ],
    },
  ];

  const afirmacoes = [
    { text: 'Você provavelmente mora em uma área de baixo risco. Continue atento e mantenha os cuidados.' },
    { text: 'Sua região apresenta risco moderado. Fique atento às condições climáticas e sinais de perigo.' },
    { text: 'Sua área pode ter alto risco. Considere medidas preventivas e fique preparado para emergências.' },
    { text: 'Você está em uma zona de risco muito alta. É importante buscar orientação e tomar todas as precauções.' },
  ];

  const container = document.getElementById('perguntas');
  const btn = document.getElementById('btn');
  const pergunta = document.getElementById('pergunta');
  const startBtn = document.getElementById('startBtn');
  const contadorPergunta = document.getElementById('contadorPergunta');

  contadorPergunta.style.color = 'yellow';

  let contador = 0;
  let somaResposta = 0;
  let respostaSelecionada = null;

  const h2 = document.querySelector('h2');
  if (h2) h2.style.display = 'none';
  pergunta.style.display = 'none';
  btn.style.display = 'none';
  contadorPergunta.style.display = 'none';

  function renderizarPerguntas(index) {
    container.innerHTML = '';
    respostaSelecionada = null;
    pergunta.textContent = perguntas[index].pergunta;
    contadorPergunta.textContent = `Pergunta ${index + 1} / ${perguntas.length}`;

    perguntas[index].alternativas.forEach(item => {
      const newBtn = document.createElement('button');
      newBtn.textContent = item.texto;
      container.appendChild(newBtn);

      newBtn.addEventListener('click', () => {
        respostaSelecionada = item.correcao;

        [...container.children].forEach(btn => btn.classList.remove('selected'));
        newBtn.classList.add('selected');
      });
    });
  }

  startBtn.addEventListener('click', () => {
    document.querySelector('.inicio').style.display = 'none';
    pergunta.style.display = 'block';
    btn.style.display = 'inline-block';
    contadorPergunta.style.display = 'block';
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
      btn.style.display = 'none';
      pergunta.textContent = '';
      container.innerHTML = '';
      contadorPergunta.style.display = 'none';

      let indiceAfirmacao;
      if (somaResposta <= 15) {
        indiceAfirmacao = 0;
      } else if (somaResposta <= 25) {
        indiceAfirmacao = 1;
      } else if (somaResposta <= 35) {
        indiceAfirmacao = 2;
      } else {
        indiceAfirmacao = 3;
      }

      const finalP = document.createElement('p');
      finalP.textContent = 'Fim do Quiz!';
      finalP.style.color = '#ffcc00';

      const respostaP = document.createElement('p');
      respostaP.textContent = afirmacoes[indiceAfirmacao].text;
      respostaP.style.color = '#ffffff';
      respostaP.style.marginTop = '10px';

      const resultadoDiv = document.createElement('div');
      resultadoDiv.classList.add('resultado-final');
      resultadoDiv.appendChild(finalP);
      resultadoDiv.appendChild(respostaP);

      const restartBtn = document.createElement('button');
      restartBtn.textContent = 'Recomeçar Quiz';
      restartBtn.style.marginTop = '20px';
      restartBtn.style.padding = '10px 20px';
      restartBtn.style.fontSize = '1rem';
      restartBtn.style.cursor = 'pointer';

      resultadoDiv.appendChild(restartBtn);
      container.appendChild(resultadoDiv);

      restartBtn.addEventListener('click', () => {
        contador = 0;
        somaResposta = 0;
        respostaSelecionada = null;

        resultadoDiv.remove();

        btn.style.display = 'inline-block';
        pergunta.style.display = 'block';
        contadorPergunta.style.display = 'block';

        renderizarPerguntas(contador);
      });
    }
  });

  // Menu hamburguer
  const hamburguerBtn = document.getElementById("hamburguerBtn");
  const navContent = document.querySelector(".navContent");

  if (hamburguerBtn && navContent) {
    hamburguerBtn.addEventListener("click", () => {
      navContent.classList.toggle("active");
      hamburguerBtn.classList.toggle("active");
    });

    navContent.addEventListener("click", (e) => {
      if (e.target.classList.contains("item-menu")) {
        navContent.classList.remove("active");
        hamburguerBtn.classList.remove("active");
      }
    });
  }
});
