"use strict";
// ============================================================================
// FUNCIONALIDADE A — ALTERNÂNCIA DE TEMA (DARK MODE)
// ============================================================================
// 1. Seleção tipada do botão de alternância de tema utilizando union type (HTMLButtonElement | null)
const btnTema = document.querySelector('#btn-tema');
// 2. Registro do escutador de evento 'click' utilizando encadeamento opcional (?.)
// Caso o botão não exista no DOM, nenhuma exceção será lançada em tempo de execução.
btnTema?.addEventListener('click', () => {
    // 3. Alterna a classe 'dark-mode' no elemento <body> e armazena o estado atual (true/false)
    const modoEscuroAtivo = document.body.classList.toggle('dark-mode');
    // Atualiza o texto do botão para refletir a próxima ação disponível ao usuário
    btnTema.textContent = modoEscuroAtivo ? '☀️ Modo Claro' : '🌙 Modo Escuro';
});
// ============================================================================
// FUNCIONALIDADE B — ADIÇÃO DINÂMICA DE PROJETOS OU HABILIDADES
// ============================================================================
// 1. Seleção dos elementos do formulário e da lista com Type Casting explícito
const formItem = document.querySelector('#form-item');
const inputItem = document.querySelector('#input-item');
const listaItens = document.querySelector('#lista-itens');
// 2. Verificação de segurança (Type Guard) garantindo que nenhum dos elementos é nulo
if (formItem && inputItem && listaItens) {
    // 3. Interceptação do evento de envio 'submit' com tipagem explícita (SubmitEvent)
    formItem.addEventListener('submit', (event) => {
        // Impede o comportamento padrão do navegador de recarregar a página
        event.preventDefault();
        // 4. Captura o valor digitado e remove espaços em branco nas extremidades com .trim()
        const novoTexto = inputItem.value.trim();
        // Bloqueia a inserção caso o campo contenha apenas espaços ou esteja vazio
        if (novoTexto === '') {
            inputItem.focus();
            return;
        }
        // 5. Criação de um novo nó <li> em memória com tipagem HTMLLIElement
        const novoElementoLi = document.createElement('li');
        // Define o conteúdo textual de forma segura (evitando injeção de HTML)
        novoElementoLi.textContent = novoTexto;
        // Insere o novo item ao final da lista <ul> na árvore DOM
        listaItens.appendChild(novoElementoLi);
        // 6. Limpa o campo de entrada e devolve o foco para facilitar novas inserções
        inputItem.value = '';
        inputItem.focus();
    });
}
