let listaNomes = [];

function adicionarAmigo(){

    nomeAmigo = document.querySelector("#amigo").value;

    if (nomeAmigo.trim() === ""){
        alert("Por favor, digite um nome válido!")
        return
    }

    listaNomes.push(nomeAmigo);
        document.querySelector("#amigo").value = "";
        atualizarLista();
}

function atualizarLista(){

    const lista = document.querySelector("#listaAmigos");

    lista.innerHTML = "";

    listaNomes.forEach((nome) => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    })
}

function sortearAmigo(){
    
    if (listaNomes.length === 0){
        alert("Lista vazia. Por favor adicione amigos antes de realizar o sorteio.");
        return
    }

    const sorteio = Math.floor(Math.random() * listaNomes.length);

    const nomeSorteado = listaNomes[sorteio];

    document.querySelector("#resultado").innerHTML = nomeSorteado;
}

