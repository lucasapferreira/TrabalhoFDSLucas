// funcoes.js
function showMessage() {
    document.getElementById('message').innerText = "Seja bem-vindo à minha página! Mantenha-se positivo e continue aprendendo!";
}

// Adicionando o evento de clique ao botão
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botao').addEventListener('click', showMessage);
});