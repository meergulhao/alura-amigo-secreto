let amigosAdicionados = [];
let amigosSorteados1 = [];
let amigosSorteados2 = [];

function adicionar() {
    let amigo = document.querySelector('#nome-amigo');

    if(amigo.value == '') {
        alert('Informe o nome da pessoa.');
        return;
    }

    if(amigosAdicionados.includes(` ${amigo.value}`)) {
        alert(`${amigo.value} já está na lista!`);
        return;
    }

    amigosAdicionados.push(` ${amigo.value}`);

    let listaAmigos = document.querySelector('#lista-amigos');
    // Na aula não foi criado um array, adicionaram os nomes concatenando caso a lista não esteja vazia
    // Depois criaram o array, pois a função sortear() seria muito complexa.
    // Adicionaram no array, mas a lista continuou exibindo concatenado
    listaAmigos.innerHTML = amigosAdicionados;

    amigo.value = ''
}

function sortear() {
    if(amigosAdicionados.length < 4) {
        alert('É necessário adicionar pelo menos 4 pessoas na lista');
        return;
    }
    
    // Na aula foi usada uma função já feita por outra pessoa, que embaralha as posições de um array
    // Depois só chamaram essa função embaralha(lista) dentro do sortear
    // Com isso, também não foram necessárias as condicionais que impedem um amigo tirar ele mesmo, ou aparecer mais de 2 vezes na lista final
    // Preciso ter o hábito de pesquisar funções prontas antes de quebrar a cabeça tentando fazer do zero hahahaha
    for(let i = 1; i <= amigosAdicionados.length; i++) {
        let numeroAleatorio1 = Math.floor(Math.random() * amigosAdicionados.length);
        let numeroAleatorio2 = Math.floor(Math.random() * amigosAdicionados.length);
        if(numeroAleatorio1 == numeroAleatorio2) {
            i--;
        } else {
            let amigo1 = amigosAdicionados[numeroAleatorio1];
            let amigo2 = amigosAdicionados[numeroAleatorio2];
            if(amigosSorteados1.includes(amigo1) || amigosSorteados2.includes(amigo2)) {
                i--;
            } else {
                amigosSorteados1.push(amigo1);
                amigosSorteados2.push(amigo2);
            }
        }
    }
    // Esse também foi feito um pouco diferente na aula, pois a lista era uma só, a que aqui eu chamei de amigosSorteados
    // Como ela já estava embaralhada, basicamente coloca a primeira posição tendo a segunda como amigo secreto, e a última tendo a primeira
    for(let i = 1; i <= amigosAdicionados.length; i++) {
        let listaSorteio = document.querySelector('.prizeDraw__container');
        listaSorteio.innerHTML = listaSorteio.innerHTML + `<p id="lista-sorteio">${amigosSorteados1[0] + ' ⭢' + amigosSorteados2[0]}</p>`
        amigosSorteados1.shift();
        amigosSorteados2.shift();
    }
    let listaAmigos = document.querySelector('#lista-amigos');
    listaAmigos.innerHTML = '';
}

function reiniciar() {
    let listaSorteio = document.querySelector('.prizeDraw__container');
    listaSorteio.innerHTML = '<p id="lista-sorteio"></p>';
    let listaAmigos = document.querySelector('#lista-amigos');
    listaAmigos.innerHTML = '';
    amigosAdicionados = [];
    amigosSorteados1 = [];
    amigosSorteados2 = [];
}