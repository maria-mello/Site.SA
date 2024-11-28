    let produtoEditandoIndex = null;  // Variável global para armazenar o índice do produto sendo editado.

        //Botão para adicionar o produto a lista
        function cadastrarProduto() {
            const nome = document.getElementById('nome').value;
            const preco = document.getElementById('preco').value;
            const descricao = document.getElementById('descricao').value;
            const urlImage = document.getElementById('urlImage').value;

            // Cria um objeto produto com os dados do formulário
            const produto = {
                nome,
                preco,
                descricao,
                urlImage
            };

            // Verifica se todos os campos obrigatórios estão preenchidos
            if (produto.nome && produto.preco && produto.descricao) {
                 // Obtém a lista de produtos do localStorage ou cria uma nova lista vazia
                let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

                // Se está editando um produto, atualiza ele
                if (produtoEditandoIndex !== null) {
                    produtos[produtoEditandoIndex] = produto;  // Atualiza o produto no índice correspondente
                    produtoEditandoIndex = null;  // Limpa o índice de edição
                } else {
                    produtos.push(produto);  // Adiciona um novo produto
                }
        
                 // Salva a lista atualizada no localStorage
                localStorage.setItem('produtos', JSON.stringify(produtos));
                limparFormulario(); // Limpa o formulário após o cadastro
                exibirProdutos(); // Atualiza a exibição da lista de produtos
            } else {
                alert('Preencha todos os campos para cadastrar o produto!');
                // Alerta se algum campo obrigatório não estiver preenchido
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
            // Obtém a lista de produtos do localStorage ou cria uma nova lista vazia
            const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
            const listaProdutos = document.getElementById('listaProdutos');
            listaProdutos.innerHTML = ''; // Limpa a lista antes de exibir


             // Itera sobre cada produto e cria elementos para exibição
            for (let i in produtos) { 
                const produto = produtos[i]; // Obtém o produto atual
                const li = document.createElement('li'); // Cria um novo item de lista

                
                const img = document.createElement('img'); // Cria um elemento de imagem


                // estilização da imagem
                img.src = produto.urlImage;
                img.style.margin = '10px'; 
                img.style.width = '100px'; 
                img.style.height = 'auto';

                // Define o texto do item da lista com informações do produto
                li.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao}`;

                // Botão para deletar o produto
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Deletar';// Texto do botão
                deleteBtn.classList.add('delete-btn');// Classe CSS para estilização
                deleteBtn.onclick = () => deletarProduto(i);// Chama a função para deletar o produto quando clicado

                
                // Botão para editar o produto
                const editBtn = document.createElement('button');
                editBtn.textContent = 'Editar';
                editBtn.classList.add('edit-btn');
                editBtn.onclick = () => editarProduto(i);  // Chama a função para editar o produto


                // Adiciona a imagem e os botões ao item da lista
                li.appendChild(img); // Adiciona a imagem ao item da lista
                li.appendChild(deleteBtn); // Adiciona o botão de deletar
                li.appendChild(editBtn); // Adiciona o botão de editar
                listaProdutos.appendChild(li); // Adiciona o item à lista na página
            }
        }

        //Botão para deletar os produtos da lista, um de cada vez
        function deletarProduto(index) {
            // Obtém a lista de produtos do localStorage
            let produtos = JSON.parse(localStorage.getItem('produtos'));
            produtos.splice(index, 1); // Remove o produto no índice especificado
            localStorage.setItem('produtos', JSON.stringify(produtos));
            exibirProdutos(); // Atualiza a lista exibida
        }

        //Botão para limpar os produtos da lista 
        function limparProdutos() {
            localStorage.removeItem('produtos');
            // Remove a lista de produtos do localStorage
            exibirProdutos(); //atualiza a exibição
        }

        
        // editar o produto
        function editarProduto(index) {
            // Obtém a lista de produtos do localStorage
            let produtos = JSON.parse(localStorage.getItem('produtos'));
            const produto = produtos[index]; 
        
            // Preenche o formulário com os dados do produto
            document.getElementById('nome').value = produto.nome;
            document.getElementById('preco').value = produto.preco;
            document.getElementById('descricao').value = produto.descricao;
            document.getElementById('urlImage').value = produto.urlImage;
        
            produtoEditandoIndex = index;  // Marca o produto que está sendo editado
        }        

        //Botão para voltar para a tela inicial
        function voltar() {
            window.location.href = "telaPrincipal.html"
        }

        window.onload = exibirProdutos;