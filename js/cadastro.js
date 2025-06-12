// Referência ao botão de cadastrar
const botao = document.getElementById('btnCadastrar');

// Ao carregar a página, lista os usuários
listar();

// Função executada quando clicamos no botão "Cadastrar"
botao.addEventListener('click', function () {
    // Pega a lista de usuários do localStorage, ou cria uma lista vazia se não houver
    let listaUsuario = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Cria um objeto com os dados do formulário
    const usuario = {
        usuario: document.getElementById('login').value,
        senha: document.getElementById('senha').value
    };

    // Verifica se estamos editando um usuário existente
    const indexEditar = document.getElementById("indexEditado").value;

    if (indexEditar !== "") {
        // Se estiver editando, atualiza o usuário na posição do índice
        listaUsuario[indexEditar] = usuario;
        document.getElementById("indexEditado").value = ""; // Limpa o campo escondido
    } else {
        // Se não estiver editando, adiciona novo usuário à lista
        listaUsuario.push(usuario);
    }

    // Salva a lista atualizada no localStorage
    localStorage.setItem("usuarios", JSON.stringify(listaUsuario));

    // Limpa os campos do formulário
    document.getElementById('login').value = '';
    document.getElementById('senha').value = '';

    // Atualiza a tabela com os usuários
    listar();
});

// Função para listar os usuários cadastrados na tabela
function listar() {
    const usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    const tabela = document.getElementById('lista_usuarios');
    tabela.innerHTML = ''; // Limpa a tabela antes de preencher

    // Para cada usuário, cria uma linha na tabela
    usuariosCadastrados.forEach((usuario, index) => {
        const linha = document.createElement('tr');

        linha.innerHTML = `
            <td>${usuario.usuario}</td>
            <td>${usuario.senha}</td>
            <td>
                <button onclick="editarUsuario(${index})">Editar</button>
                <button onclick="excluirUsuario(${index})">Excluir</button>
            </td>
        `;

        tabela.appendChild(linha); // Adiciona a linha à tabela
    });
}

// Função chamada ao clicar em "Editar"
function editarUsuario(index) {
    const usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    const objUsuario = usuariosCadastrados[index];

    // Preenche os campos do formulário com os dados do usuário
    document.getElementById("login").value = objUsuario.usuario;
    document.getElementById("senha").value = objUsuario.senha;
    document.getElementById('indexEditado').value = index; // Marca que está editando esse índice
}

// Função chamada ao clicar em "Excluir"
function excluirUsuario(index) {
    const usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    if (confirm("Você realmente quer excluir?")) {
        usuariosCadastrados.splice(index, 1); // Remove o usuário da lista
        localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados)); // Salva de novo
    }

    listar(); // Atualiza a tabela
}
