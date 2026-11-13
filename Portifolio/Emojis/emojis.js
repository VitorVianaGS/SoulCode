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

