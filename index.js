const galeriaDeQuizz = document.querySelector('.galeriaDeQuizz');
const main = document.querySelector('main');
const requisicaoQuizzes = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
requisicaoQuizzes.then(reqQuizzesSucesso).catch(reqQuizzesErro);
function reqQuizzesErro(quizzesErro) {
};

function reqQuizzesSucesso(quizzesSucesso) {
    let arrayQuizzesProntos = quizzesSucesso.data;
    arrayQuizzesProntos.forEach((elemento) => {
        galeriaDeQuizz.innerHTML += `<div class="quizz pointer" onclick="exibirQuizz(${elemento.id})">
        <div class="gradient"></div>
        <img src="${elemento.image}"/>
        <p>${elemento.title}</p>
        </div>`
    });
};

function exibirQuizz(idElemento) {
    let link = 'https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/' + idElemento;
    const requisicaoQuizz = axios.get(link);
    requisicaoQuizz.then(reqQuizzSucesso).catch(reqQuizzErro);
}

function reqQuizzErro(quizzErro) {
}

function reqQuizzSucesso(quizzSucesso) {
    let arrayDetalhesQuizz = quizzSucesso.data;
    let arrayDeQuestionsQuizz = arrayDetalhesQuizz.questions;
    console.log(arrayDetalhesQuizz)
    console.log(arrayDeQuestionsQuizz)
    main.innerHTML = ``;
    main.innerHTML += `<section class="quizzProntoExibir">
    <div class="headerQuizz" style="background-image: url(${arrayDetalhesQuizz.image})">
        <p>${arrayDetalhesQuizz.title}</p>
    </div>`

    for(let i = 0 ; i < arrayDeQuestionsQuizz.length; i++){
        main.innerHTML += `<div class="levels">
        <div class="tituloLevel" style="background-color:${arrayDeQuestionsQuizz[i].color};">
        <p>${arrayDeQuestionsQuizz[i].title}</p>
        </div>
        <div class="imagens">
        <div class="questao">
        <img src="${arrayDeQuestionsQuizz[i].answers[0].image}"/>
        <p>blabla</p>
        </div>
        <div class="questao">
        <img src="${arrayDeQuestionsQuizz[i].answers[1].image}"/>
        <p>blabla</p>
        </div>
        </div>
        <div class="imagens">
        <div class="questao">
        <img src="${arrayDeQuestionsQuizz[i].answers[2].image}"/>
        <p>blabla</p>
        </div>
        <div class="questao">
        <img src="${arrayDeQuestionsQuizz[i].answers[3].image}"/>
        <p>blabla</p>
        </div>
        </div>`
    }
}