//  CONFIRMAR CADASTRO
// chamar id do html 
function Cadastro() {
    let email= document.getElementById('email').value;
    let senha= document.getElementById('senha').value;
    let BancodeDados=  JSON.parse(localStorage.getItem("cadatro")) || {}
   
    if(BancodeDados [email]){
       alert('Esse email já foi cadastrado');
       return;
    }

    BancodeDados[email] = { email: email, senha: senha };
    localStorage.setItem('cadatro', JSON.stringify(BancodeDados))
    alert('Usuário cadastrado com sucesso')
    window.location.href="login.html"
}

function login(){
    let emailLogin = document.getElementById(email).value
    let senhaLogin = document.getElementById(senha).value

    if(BancodeDados[emailLogin].email=== emailLogin && BancodeDados[senhaLogin].senha=== senhaLogin)
    alert('login bem sucedido')
    window.location.href ="telaPrincipal.html"

}