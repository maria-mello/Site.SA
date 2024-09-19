// BOTÕES

function semCadastro() { 

    window.location.href = "cadastro.html"
 } // caso não tenha cadastro, leva da Tela de Login para a Tela de Cadastro;
 
 // botões da tela de login!
 
function voltar() {
 
     window.location.href = "telaPrincipal.html"
 } // volta para a tela inicial caso queira voltar (obviamente);
 
function entrar() {
 
     window.location.href = "telaPrincipal.html"
 } // após o login volta para a tela inicial para 'continuar comprando';
 
 // botões da tela de login ADM!
 
function voltarADM() {
 
     window.location.href = "telaPrincipal.html"
} // volta para a tela inicial caso não trabalhe na empresa (ou caso só queira voltar);
 
function ContinuarADM(){
 
   window.location.href = "estoque.html"
 } // AINDA NÃO TEM UMA TELA DE ESTOQUE, MAS QUANDO TIVER O JS TEM Q LEVAR DA TELA LOGIN ADM PARA LÁ!!;
 
function voltarC(){
 
     window.location.href = "telaPrincipal.html"
 } //volta da Tela de Cadastro para a Tela Principal (inicial);
 
 
 // CONDIÇÕES DA TELA DE CADASTRO 
function continuarC(){
       window.location.href = "login.html"
 }  // vai da Tela de Cadastro para a Tela de Login para entrar na conta;
 
 
 // TERMOS E CONDIÇÕES DE USO (inacabado)
 
 document.addEventListener('DOMContentLoaded', function() {
     // Captura os elementos de checkbox e botão
     const termosCheckbox = document.getElementById('termos');
     const continuarButton = document.getElementById('continuar');
 
     // Função para habilitar ou desabilitar o botão "Continuar" baseado na checkbox
     function atualizarEstadoBotao() {
         const checkboxMarcada = termosCheckbox.checked;
         continuarButton.disabled = !checkboxMarcada;
         continuarButton.style.cursor = checkboxMarcada ? 'pointer' : 'not-allowed';
     }
 
     // Evento para detectar mudanças na checkbox e atualizar o botão "Continuar"
     termosCheckbox.addEventListener('change', function () {
         atualizarEstadoBotao();
         // Armazena o estado da checkbox no localStorage
         localStorage.setItem('checkboxAceito', termosCheckbox.checked);
     });
 
     // Ao clicar no botão "Continuar", verifica se a checkbox está marcada
     continuarButton.addEventListener('click', function (e) {
         // Se a checkbox não estiver marcada, impede a navegação
         if (!termosCheckbox.checked) {
             e.preventDefault(); // Impede a navegação
         } else {
             // Se estiver marcada, pode prosseguir para a próxima página
             window.location.href = "telaPrincipal.html";
         }
     });
 
     // Verifica se a checkbox estava marcada ao carregar a página (ao voltar da página anterior)
     window.onload = function () {
         const checkboxAceito = localStorage.getItem('checkboxAceito') === 'true';
         termosCheckbox.checked = checkboxAceito;
         atualizarEstadoBotao(); // Atualiza o estado do botão "Continuar"
     };
 
     // Função para o botão "Voltar"
     function voltarC() {
         window.location.href = "telaPrincipal.html"; // Trocar rota posteriormente, de acordo com o que for decidido pelo grupo.
     }
 });
 
 
 
 // Vai ser explicado na próxima aula!
 
 // const campoEmail = document.getElementById ('email');
 // const campoSenha = document.getElementById ('senha');
 // const botaoSemCadastro = document.getElementById ('semCadastro')
 // const botaoEntrar = document.getElementById ('entrar')
 // const botaoVoltar = document.getElementById ('voltar')
 
 // let email = campoEmail.value;
 // let senha = campoSenha.value;
 // let semCadastro = botaoSemCadastro.value;
 // let entrar = botaoEntrar.value;
 // let voltar = botaoVoltar.value;
 
 // let mensagem = "Usuário ou senha incorreta!"
 
 // const campoNovoNome = document.getElementById ('novoNome');
 // const campoNovoTelefone = document.getElementById ('novoTelefone');
 // const campoNovoCPF = document.getElementById ('novoCPF');
 // const campoNovoGenero = document.getElementById ('genero');
 // const campoTermos = document.getElementById ('termos');
 
 // let bancoDeDados= JSON.parse(localStorage.getItem("bandoDeDados"));
 // if (bancoDeDados == null){
 
 //     mensagem = "Nenhum usuário cadastrado até o momento"
 
 // } else {
 //     // Lógica para verifixcar as credenciais de login;
 // }
 
 
 // CÓDIGO Q VAI EMBAIXO DA FUNCTION 'CONTINUAR()'(possivelmente)
 
 // let campoNovoNome = document.getElementById ('novoNome').value;
 // let campoNovoTelefone = document.getElementById ('novoTelefone').value;
 // let campoNovoCPF = document.getElementById ('novoCPF').value;
 // let campoEmail = document.getElementById ('email').value;
 // let termos = document.getElementById('termos').checked;
 
 // let campoNovoGenero = document.querySelector("input[name='genero']:checked").value;
 
 //  if(campoNovoNome 
 //  ){
 //      alert ('Seu cadastro foi concluido com sucesso!')
 //     }else if("!novoNome // !novoTelefone // !novoCPF // !novoEmail //  " ){
 //      alert ('Todos os campos devem ser preenchidos!')
 //  } 