// Tema da página
const botaoTema = document.getElementById('btn-tema');
const corpoPagina = document.body;

botaoTema.addEventListener('click', () => {

  corpoPagina.classList.toggle('dark-mode');

  if (corpoPagina.classList.contains('dark-mode')) {
    botaoTema.textContent = '☀️ Modo Claro';
  } else {
    botaoTema.textContent = '🌙 Modo Escuro';
  }
});

// Botões de reação
const botaoReacao = document.querySelectorAll('.btn-reacao')

botaoReacao.forEach((botao => {
  botao.addEventListener('click', () =>{
    
    const tipoReacao = botao.dataset.reacao;
    const contador = document.getElementById(`cont-${tipoReacao}`);

    if (contador && contador.classList.contains('contador')){
      let valorAtual = Number(contador.textContent) || 0;
      contador.textContent = valorAtual + 1;
    }
  })
}))

// Lista de comentários
const formComentario = document.getElementById('form-comentario');
const inputComentario = document.getElementById('input-comentario');
const listaComentario = document.getElementById('lista-comentarios');
const totalComentario = document.getElementById('total-comentarios');

if(listaComentario && inputComentario && formComentario && totalComentario){
  formComentario.addEventListener('submit', (event) => {
    event.preventDefault();

    const texto = inputComentario.value.trim();

    if(texto === ''){
      inputComentario.focus();
      return;
    }
    
    const novoItem = document.createElement('li');
    novoItem.textContent = texto

    listaComentario.appendChild(novoItem);
    totalComentario.textContent = listaComentario.children.length
    inputComentario.value = '';
    inputComentario.focus();
  })
}