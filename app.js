// Array de amigos
let amigos = []

// Função para adicionar amigos no array
function addAmigo(){
    let amigo = document.querySelector('input').value;
    if (amigo == "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(amigo);
        document.querySelector('input').value = '';
        atualizarLista();
    }
}

// Função para atualizar a lista de amigos
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');

    // limpar lista
    lista.innerHTML = '';

    // adicionar amigos na lista HTML
    amigos.forEach(nome => {
        lista.innerHTML += `<li>${nome}</li>`;
    });
}

// Função para sortear um amigo aleatorio
function sortearAmigo() {
    if (amigos.length > 0) {
        let indexSorteado = Math.floor(Math.random() * amigos.length);
        let sorteado = amigos[indexSorteado];
        let texto = document.getElementById('resultado');
        texto.innerHTML = sorteado;
    }
}