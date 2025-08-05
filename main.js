// Mensagem no console
console.log('Olá mundo!');

// Criando título glam
let titulo = document.createElement('h1');
titulo.innerText = '✨ Bem-vinda, Paty Queen! ✨';
titulo.style.color = 'hotpink';
titulo.style.textShadow = '2px 2px 5px purple';
titulo.style.fontFamily = 'cursive';
titulo.style.textAlign = 'center';
document.body.appendChild(titulo);

// Criando botão paty
let botao = document.createElement('button');
botao.innerText = 'Clique para uma frase de diva 💋';
botao.style.backgroundColor = 'pink';
botao.style.border = 'none';
botao.style.color = 'white';
botao.style.padding = '15px 25px';
botao.style.fontSize = '18px';
botao.style.marginTop = '20px';
botao.style.borderRadius = '10px';
botao.style.cursor = 'pointer';
botao.style.boxShadow = '0 0 10px hotpink';
botao.style.transition = '0.3s';
botao.onmouseover = () => botao.style.backgroundColor = 'deeppink';
botao.onmouseout = () => botao.style.backgroundColor = 'pink';
document.body.appendChild(botao);

// Criando espaço para frases
let fraseElemento = document.createElement('p');
fraseElemento.style.fontSize = '22px';
fraseElemento.style.marginTop = '30px';
fraseElemento.style.textAlign = 'center';
fraseElemento.style.color = 'deeppink';
fraseElemento.style.fontStyle = 'italic';
document.body.appendChild(fraseElemento);

// Lista de frases bem paty
let frases = [
  '“Espelho, espelho meu, existe alguém mais paty do que eu?” 💄',
  '“Toda diva tem seu brilho próprio ✨”',
  '“Não nasci pra ser básica 💅”',
  '“Se não for pra causar, nem saio de casa 💖”',
  '“Café? Só se for rosa e com glitter ☕✨”',
];

// Evento ao clicar no botão
botao.addEventListener('click', () => {
  let index = Math.floor(Math.random() * frases.length);
  fraseElemento.innerText = frases[index];
});

// Estilizando o fundo
document.body.style.background = 'linear-gradient(to right, #ffe6f0, #ffccf2)';
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.padding = '40px';
