// cadastro com crud

const botao = document.getElementById('btnCadastrar');
const listaUsuario= [];

botao.addEventListener('click', function (){
    const usuario = {
     usuario: document.getElementById('login').value,
     senha: document.getElementById('senha').value
    };
    console.log(usuario);
    listaUsuario.push(usuario);
    listaJson = JSON.stringify(listaUsuario); // to pegando meu vetor de objetos e convertendo ele
    // pra um codigo JSON 
    localStorage.setItem("usuarios", listaJson);
});