
        function cadastrarProduto() {
            const nome = document.getElementById('nome').value;
            const preco = document.getElementById('preco').value;
            const descricao = document.getElementById('descricao').value;

            const produto = {
                nome,
                preco,
                descricao
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

        function limparFormulario() {
            document.getElementById('nome').value = '';
            document.getElementById('preco').value = '';
            document.getElementById('descricao').value = '';
        }

        function exibirProdutos() {
            const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
            const listaProdutos = document.getElementById('listaProdutos');
            listaProdutos.innerHTML = '';

            for (let i in produtos) {
                const produto = produtos[i];
                const li = document.createElement('li');
                li.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao}`;
               
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Deletar';
                deleteBtn.classList.add('delete-btn');
                deleteBtn.onclick = () => deletarProduto(i);

                li.appendChild(deleteBtn);
                listaProdutos.appendChild(li);
            }
        }

        function deletarProduto(index) {
            let produtos = JSON.parse(localStorage.getItem('produtos'));
            produtos.splice(index, 1); // Remove o produto no índice especificado
            localStorage.setItem('produtos', JSON.stringify(produtos));
            exibirProdutos(); // Atualiza a lista exibida
        }

        function limparProdutos() {
            localStorage.removeItem('produtos');
            exibirProdutos();
        }

        window.onload = exibirProdutos;
