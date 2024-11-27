// BOTÃO DOS ÍCONES
function seguirADM(){
    window.location.href = "loginADM.html"
}

function seguirLogin(){
    window.location.href = "login.html"
}

// JS da tela de Login usuário (com verificação)
function voltar() {
     window.location.href = "telaPrincipal.html"
 } // volta para a tela inicial caso queira voltar (obviamente);
 
function entrar() {
    let email = document.getElementById('emailU').value
    let senha = document.getElementById('senhaU').value

    if(!email || !senha){
        alert('Preencha todas as informações!')
        return; // impede de prosseguir se não estiverem preenchidos 

    } else{
        const usuarios = JSON.parse(localStorage.getItem('cadastro'));
        console.log(usuarios);

        if (usuarios) {
            for (const chaveDoOBJ in usuarios) {
                let usuarioExiste = false;

                console.log('chaveDoOBJ', chaveDoOBJ);

                const usuario = usuarios[chaveDoOBJ];
                
                console.log('usuario', usuario);

                if (usuario.email === email && usuario.senha === senha) {
                    window.location.href = "telaPrincipal.html"  // apos o login volta para a tela inicial para 'continuar comprando';
                    alert('Bem Vindo(a)!')
                    usuarioExiste = true;
                    break;
                } else {
                    alert('Usuário ou senha incorretos!')
                }
            }
        } else {
            alert('Usuário não cadastrado!')
        }
    }

 } 

function semCadastro() { 
    window.location.href = "cadastro.html"
 } // caso nao tenha cadastro, leva da Tela de Login para a Tela de Cadastro;



//JS da tela de LoginADM (com condições)
        function voltarADM() {
            window.location.href = "telaPrincipal.html"
        } // volta para a tela inicial caso nao trabalhe na empresa (ou caso so queira voltar);

       function ContinuarADM(){
            
        let email = document.getElementById('email').value;
        let dominioPermitido = '@cafeterialotus.com';
        let senha = 'Lotus1980';
        const cargoSelecionado = document.getElementById('cargo').value; //pega o cargo selecionado

            localStorage.setItem('email', email);
            localStorage.setItem('cargo', cargoSelecionado);

        //verifica se o dominio do email esta correto para entrar na tela de cadastro
        if(senha === senha && email.includes(dominioPermitido) && cargoSelecionado === 'gerenteDeEstoque'|| cargoSelecionado === 'administrador'){
            alert ('Bem vindo(a)!')
            window;location.href = "cadastroProdutos.html";
             // se for adm ou gerente de estoque            
        }else if(senha === senha && email.includes(dominioPermitido) && cargoSelecionado === 'gerente' || cargoSelecionado === 'estagiario'){ // se for gerente ou estagiario
            window.location.href = 'telaPrincipal.html';
            alert('Bem Vindo(a)!')
        }else{
            alert('Confira se todas as informações estão corretas!')
            return;
        }
        }


// JS para a tela de Cadastro Produtos (para os produtos aparecerem na tela principal)

        //Botão para adicionar o produto a lista
        function cadastrarProduto() {
            const nome = document.getElementById('nome').value;
            const preco = document.getElementById('preco').value;
            const descricao = document.getElementById('descricao').value;
            const urlImage = document.getElementById('urlImage').value;

            const produto = {
                nome,
                preco,
                descricao,
                urlImage
            };

            if (produto.nome && produto.preco && produto.descricao) {
                let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
                produtos.push(produto);
                localStorage.setItem('produtos', JSON.stringify(produtos));

                limparFormulario();
                exibirProdutos();
            } else {
                alert('Preencha todos os campos para cadastrar o produto!');
            }
        }

        //Botão para limpar o formulario, mandando as informações para a lista 
        function limparFormulario() {
            document.getElementById('nome').value = '';
            document.getElementById('preco').value = '';
            document.getElementById('descricao').value = '';
            document.getElementById('urlImage').value = '';
        }

        function exibirProdutos() {
            const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
            const listaProdutos = document.getElementById('listaProdutos');
            listaProdutos.innerHTML = '';

            for (let i in produtos) {
                const produto = produtos[i];
                const li = document.createElement('li');
                
                const img = document.createElement('img');
                img.src = produto.urlImage;
                img.style.margin = '10px';
                img.style.width = '100px';
                img.style.height = 'auto';

                li.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao}`;

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Deletar';
                deleteBtn.classList.add('delete-btn');
                deleteBtn.onclick = () => deletarProduto(i);

                li.appendChild(img);
                li.appendChild(deleteBtn);
                listaProdutos.appendChild(li);
            }
        }

        //Botão para deletar os produtos da lista, um de cada vez
        function deletarProduto(index) {
            let produtos = JSON.parse(localStorage.getItem('produtos'));
            produtos.splice(index, 1); // Remove o produto no índice especificado
            localStorage.setItem('produtos', JSON.stringify(produtos));
            exibirProdutos(); // Atualiza a lista exibida
        }

        //Botão para limpar os produtos da lista 
        function limparProdutos() {
            localStorage.removeItem('produtos');
            exibirProdutos();
        }

        window.onload = exibirProdutos;

        //Produtos cadastrados para tela de login 
        function exibirProdutos() {
            const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
            const listaProdutos = document.getElementById('listaProdutos');

            for (let produto of produtos){
                const li = document.createElement('li');
                li.classList.add('produto-item');

                const img = document.createElement('img');
                img.src = produto.urlImage;
                img.alt = produto.nome;
                img.classList.add('produto-img');

                const nome = document.createElement('p');
                nome.textContent = produto.nome; 

                const preco = document.createElement('p');
                preco.innerHTML = `<strong> Preço: </strong> R$${produto.preco}`;

                const descricao = document.createElement('p');
                descricao.innerHTML = `<strong>Descrição:</strong> ${produto.descricao}`; 

                li.appendChild(img);
                li.appendChild(nome);
                li.appendChild(descricao);
                li.appendChild(preco);

                listaProdutos.appendChild(li);

            }

        }

        window.onload = exibirProdutos;

           //Botão para voltar para a tela inicial
           function voltar() {
            window.location.href = "telaPrincipal.html"
        }

