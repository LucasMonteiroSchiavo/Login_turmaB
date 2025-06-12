// Referência ao botão "entrar"
const entrar = document.getElementById('entrar');

// Adiciona evento de clique no botão
entrar.addEventListener('click', function () {
    // Pega os valores digitados nos campos
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    // Recupera a lista de usuários cadastrados
    const usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se existe um usuário com esse login e senha
    const usuarioEncontrado = usuariosCadastrados.find(
        u => u.usuario === login && u.senha === senha
    );

    if (usuarioEncontrado) {
        // Se o login for válido, salva o nome do usuário logado e redireciona para a dashboard
        localStorage.setItem("userLogado", login);
        window.location.href = "dashboard.html";
    } else {
        // Caso não encontre, mostra mensagem de erro
        document.getElementById('mensagem').textContent = "Login ou senha incorretos";
    }

    // Apenas para depuração (pode remover depois)
    console.log(usuarioEncontrado);
});
