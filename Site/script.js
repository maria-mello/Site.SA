// BOTOES

function semCadastro() { 

    window.location.href = "cadastro.html"
 } // caso nao tenha cadastro, leva da Tela de Login para a Tela de Cadastro;
 
 // botoes da tela de login!
 
function voltar() {
 
     window.location.href = "telaPrincipal.html"
 } // volta para a tela inicial caso queira voltar (obviamente);
 
function entrar() {
 
     window.location.href = "telaPrincipal.html"
 } // apos o login volta para a tela inicial para 'continuar comprando';
 
 // botoes da tela de login ADM!
 
function voltarADM() {
 
     window.location.href = "telaPrincipal.html"
} // volta para a tela inicial caso nao trabalhe na empresa (ou caso so queira voltar);
 
function ContinuarADM(){
 
   window.location.href = "estoque.html"
 } //vai da tela de Login ADM para a tela de estoque;
 
function voltarC(){
 
     window.location.href = "telaPrincipal.html"
 } //volta da Tela de Cadastro para a Tela Principal (inicial);
 
 
 // CONDICOES DA TELA DE CADASTRO 
function continuarC(){
       window.location.href = "login.html"
 }  // vai da Tela de Cadastro para a Tela de Login para entrar na conta;
 
 
 // TERMOS E CONDICOES DE USO (inacabado)
 
 // Verifica se a checkbox estava marcada ao carregar a pagina (ao voltar da pagina anterior)
 window.onload = function () {
         const checkboxAceito = localStorage.getItem('checkboxAceito') === 'true';
         termosCheckbox.checked = checkboxAceito;
         atualizarEstadoBotao(); // Atualiza o estado do botao "Continuar"
        };
 
     // Funcao para o botao "Voltar"
        
        document.addEventListener('DOMContentLoaded', function() {
            // Captura os elementos de checkbox e botao
            const termosCheckbox = document.getElementById('termos');
            const continuarButton = document.getElementById('continuar');
        
            // Funcao para habilitar ou desabilitar o botao "Continuar" baseado na checkbox
            function atualizarEstadoBotao() {
                const checkboxMarcada = termosCheckbox.checked;
                continuarButton.disabled = !checkboxMarcada;
                continuarButton.style.cursor = checkboxMarcada ? 'pointer' : 'not-allowed';
            }
        
            // Evento para detectar mudancas na checkbox e atualizar o botao "Continuar"
            termosCheckbox.addEventListener('change', function () {
                atualizarEstadoBotao();
                // Armazena o estado da checkbox no localStorage
                localStorage.setItem('checkboxAceito', termosCheckbox.checked);
            });
        
            // Ao clicar no botao "Continuar", verifica se a checkbox esta marcada
            continuarButton.addEventListener('click', function (e) {
                // Se a checkbox nao estiver marcada, impede a navegacao
                if (!termosCheckbox.checked ) {
                    e.preventDefault(); // Impede a navegacao
                } else {
                    // Se estiver marcada, pode prosseguir para a proxima pagina
                    window.location.href = "telaPrincipal.html";
                }
            });
     function voltarC() {
         window.location.href = "telaPrincipal.html"; // Trocar rota posteriormente, de acordo com o que for decidido pelo grupo.
     }
 });
 
