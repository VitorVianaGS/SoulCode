const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cep = document.getElementById('cep');
const senha = document.getElementById('senha');
const confirmaSenha = document.getElementById('confirma-senha');
const form = document.getElementById('form-cadastro');
function validarNome(input) {
    if (input.validity.valueMissing) {
        return "O nome é obrigatório!";
    }
    if (input.validity.tooShort) {
        return "O nome deve conter ao menos 3 caracteres!";
    }
    return "";
}
function validarEmail(input) {
    const valor = input.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (valor === "") {
        return "O E-mail é obrigatório!";
    }
    if (!regexEmail.test(valor)) {
        return "Digite um valor válido!";
    }
    return "";
}
function validarCep(input) {
    const valor = input.value.trim();
    const regexCep = /^\d{5}-?\d{3}$/;
    if (valor === "") {
        return "O CEP é obrigatório!";
    }
    if (!regexCep.test(valor)) {
        return "Digite um CEP válido!";
    }
    return "";
}
function validarSenha(input) {
    const senha = input.value;
    if (senha.length < 8) {
        return "A senha deve conter pelo menos 8 caracteres";
    }
    if (!/\d/.test(senha)) {
        return "A senha deve conter ao menos 1 numero";
    }
    return "";
}
function validarConfirmacaoSenha(senhaInput, confirmaInput) {
    const senha = senhaInput.value;
    const confirmacao = confirmaInput.value;
    if (confirmacao === "") {
        return "A senha não pode ser vazia!";
    }
    if (senha !== confirmacao) {
        return "As senhas não coincidem";
    }
    return "";
}
function exibirErro(input, span, mensagem) {
    const temErro = mensagem !== "";
    span.textContent = mensagem;
    input.classList.toggle("borda-erro", temErro);
    input.setAttribute("aria-invalid", String(temErro));
}
const nomeErro = nome.nextElementSibling;
const emailErro = email.nextElementSibling;
const cepErro = cep.nextElementSibling;
const senhaErro = senha.nextElementSibling;
const confirmaSenhaErro = confirmaSenha.nextElementSibling;
// Eventos blur (ao sair do campo)
nome.addEventListener("blur", () => {
    const mensagem = validarNome(nome);
    exibirErro(nome, nomeErro, mensagem);
});
email.addEventListener("blur", () => {
    const mensagem = validarEmail(email);
    exibirErro(email, emailErro, mensagem);
});
cep.addEventListener("blur", () => {
    const mensagem = validarCep(cep);
    exibirErro(cep, cepErro, mensagem);
});
senha.addEventListener("blur", () => {
    const mensagem = validarSenha(senha);
    exibirErro(senha, senhaErro, mensagem);
});
confirmaSenha.addEventListener("blur", () => {
    const mensagem = validarConfirmacaoSenha(senha, confirmaSenha);
    exibirErro(confirmaSenha, confirmaSenhaErro, mensagem);
});
// Eventos input (limpa o erro enquanto o usuário corrige)
nome.addEventListener("input", () => {
    if (nome.getAttribute("aria-invalid") === "true") {
        const mensagem = validarNome(nome);
        exibirErro(nome, nomeErro, mensagem);
    }
});
email.addEventListener("input", () => {
    if (email.getAttribute("aria-invalid") === "true") {
        const mensagem = validarEmail(email);
        exibirErro(email, emailErro, mensagem);
    }
});
cep.addEventListener("input", () => {
    if (cep.getAttribute("aria-invalid") === "true") {
        const mensagem = validarCep(cep);
        exibirErro(cep, cepErro, mensagem);
    }
});
senha.addEventListener("input", () => {
    if (senha.getAttribute("aria-invalid") === "true") {
        const mensagem = validarSenha(senha);
        exibirErro(senha, senhaErro, mensagem);
    }
});
confirmaSenha.addEventListener("input", () => {
    if (confirmaSenha.getAttribute("aria-invalid") === "true") {
        const mensagem = validarConfirmacaoSenha(senha, confirmaSenha);
        exibirErro(confirmaSenha, confirmaSenhaErro, mensagem);
    }
});
// Evento submit (validação geral, foco no primeiro erro e envio)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const erroNome = validarNome(nome);
    const erroEmail = validarEmail(email);
    const erroCep = validarCep(cep);
    const erroSenha = validarSenha(senha);
    const erroConfirma = validarConfirmacaoSenha(senha, confirmaSenha);
    exibirErro(nome, nomeErro, erroNome);
    exibirErro(email, emailErro, erroEmail);
    exibirErro(cep, cepErro, erroCep);
    exibirErro(senha, senhaErro, erroSenha);
    exibirErro(confirmaSenha, confirmaSenhaErro, erroConfirma);
    if (erroNome !== "") {
        nome.focus();
        return;
    }
    if (erroEmail !== "") {
        email.focus();
        return;
    }
    if (erroCep !== "") {
        cep.focus();
        return;
    }
    if (erroSenha !== "") {
        senha.focus();
        return;
    }
    if (erroConfirma !== "") {
        confirmaSenha.focus();
        return;
    }
    alert("Cadastro realizado com sucesso!");
    form.reset();
});
export {};
//# sourceMappingURL=main.js.map