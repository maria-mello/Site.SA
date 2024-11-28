//  CONFIRMAR CADASTRO
// função para cadastrar um novo usuário
function Cadastro() {
    // chamar id do html e obtém os valores
    let email= document.getElementById('email').value;
    let senha= document.getElementById('senha').value;
    let termos= document.getElementById('termos');
    let bancodeDados=  JSON.parse(localStorage.getItem("cadastro")) || {}
    // Obtém o banco de dados de cadastros do localStorage ou cria um objeto vazio
   
    // verifica se o email já está cadastrado
    if(bancodeDados[email]){
       alert('Esse email já foi cadastrado!');
       return;
    }
    // verifica se todos os campos estão preenchidos
    else if(email && senha && termos.checked){
        // Adiciona o novo usuário ao banco de dados
        bancodeDados[email] = { email: email, senha: senha };
        // Salva o banco de dados atualizado no localStorage
        localStorage.setItem('cadastro', JSON.stringify(bancodeDados))
        alert('Usuário cadastrado com sucesso!')
        window.location.href="telaPrincipal.html"
    }
    else{
        alert('Preencha todas as informações!')
    }
}

// MODAL CADASTRO
// Seleciona os elementos do DOM relacionados ao modal
const abrirModal = document.getElementById("botaoabrir");
const fecharModal = document.getElementById("botaofechar");
const modal = document.getElementById("modal");
const fundo = document.getElementById("fundo");

// abrir o modal quando o botão for clicado
abrirModal.addEventListener("click", () => {
    modal.classList.remove("sumir");
    // Remove a classe 'sumir' para mostrar o modal
    fundo.classList.remove("sumir");
    // Remove a classe 'sumir' do fundo
});

// fechar o modal quando o botão de fechar for clicado
fecharModal.addEventListener("click", () => {
    modal.classList.add("sumir"); // Adiciona a classe 'sumir' para esconder o modal
    fundo.classList.add("sumir"); // Adiciona a classe 'sumir' ao fundo
});
// fechar o modal quando o fundo for clicado
fundo.addEventListener("click", (e) => {
    if (e.target === fundo) { // Verifica se o alvo do clique é o fundo
        modal.classList.add("sumir"); // Adiciona a classe 'sumir' para esconder o modal
        fundo.classList.add("sumir"); // Adiciona a classe 'sumir' ao fundo
    }
});
function voltarC(){
    window.location.href = "telaPrincipal.html"
}