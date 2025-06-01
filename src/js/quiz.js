

const perguntas = [
    {
        pergunta: "selecione uma palavra?",
        alternativas: [
            {  texto: 'a', correcao: false },
            {  texto: 'b', correcao: false },
            {  texto: 'c', correcao: true },
            {  texto: 'd', correcao: false },
        ]
    },
    {
        pergunta: "Escolha uma comida boa!",
        alternativas: [
            {  texto: 'a', correcao: false },
            {  texto: 'b', correcao: false },
            {  texto: 'c', correcao: true },
            { texto: 'd', correcao: false },
        ]
    },
    {
        pergunta: "Escolha o melhor pesonagem de todos",
        alternativas: [
            {  texto: 'goku', correcao: false },
            {  texto: 'luffy', correcao: false },
            {  texto: 'naruto', correcao: false },
            { texto: 'sung', correcao: true },
        ]
    },

];


const container = document.getElementById('perguntas')
const btn = document.getElementById('btn')
const pergunta = document.getElementById('pergunta')
let respostaSelecionanda = null
let contador = 0
let correto = 0

const renderizarPerguntas = (index) =>{
    container.innerHTML = '';
    respostaSelecionanda = null;

    pergunta.innerHTML = perguntas[index].pergunta;

perguntas[index].alternativas.map((item)=>{
    pergunta.innerHTML = perguntas[index].pergunta
    const newBtn = document.createElement('button')
    newBtn.innerHTML = item.texto
    container.appendChild(newBtn)
    newBtn.addEventListener('click', (()=>{
        if (item.correcao == true){
            respostaSelecionanda = 1
            
        }
        else{
            respostaSelecionanda = 2
       
        }
        return respostaSelecionanda
    }))
  
})
}

renderizarPerguntas(contador)

btn.addEventListener('click', (()=>{
if (respostaSelecionanda == 1){

    correto++
}
else if(respostaSelecionanda == null){
    alert('Escolha uma respota antes')
    return
}
    contador++
    
        if (contador < perguntas.length) {
        renderizarPerguntas(contador);
    } else {
        const finalBtn = document.createElement('button')
        const finalP = document.createElement('p')
        btn.style.display = "none"
        finalBtn.innerHTML = 'fim'
        finalP.innerHTML = 'Fim do Quiz!, voce acertou ' + correto
        document.body.appendChild(finalP)
         document.body.appendChild(finalBtn)
        pergunta.innerHTML = " "
        container.innerHTML = '';
        
        finalBtn.addEventListener('click', (()=>{
            
        }))
    }
}))