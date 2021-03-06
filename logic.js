// pegar elementos do html

const gameAreaElement = document.getElementById("gameArea");
const endGameElement = document.getElementById("endGame");

const roundElement = document.getElementById("round");
const expElement = document.getElementById("exp");
const titleElement = document.getElementById("title");
const subtitleElement = document.getElementById("subtitle");
const caseTextElement = document.getElementById("caseText");
// const imageElement = document.getElementById("image");
const quoteElement = document.getElementById("quote");
const questionElement = document.getElementById("question");
const option1TitleElement = document.getElementById("option1Title");
const option2TitleElement = document.getElementById("option2Title");
const option3TitleElement = document.getElementById("option3Title");
const option4TitleElement = document.getElementById("option4Title");
const option1TextElement = document.getElementById("option1Text");
const option2TextElement = document.getElementById("option2Text");
const option3TextElement = document.getElementById("option3Text");
const option4TextElement = document.getElementById("option4Text");
const progressBarElement = document.getElementById("progressBar");
const nextLessonElement = document.getElementById("nextLesson");
const previousLessonElement = document.getElementById("previousLesson");
const modalRightButtonElement = document.getElementById("nextLessonRight");
const modalRightBodyElement = document.getElementById("modalRightBody");
const modalWrongButtonElement = document.getElementById("nextLessonWrong");
const modalWrongBodyElement = document.getElementById("modalWrongBody");
const card1Element = document.getElementById("card1");
const card2Element = document.getElementById("card2");
const card3Element = document.getElementById("card3"); 
const card4Element = document.getElementById("card4"); // data-target="#exampleModalWrong"
const expFinalElement = document.getElementById("expFinal");
const tituloFinalElement = document.getElementById("tituloFinal");
const subtituloFinalElement = document.getElementById("subtituloFinal"); 
const bodyFinalElement = document.getElementById("bodyFinal");




// logica de paginas


nextLessonElement.addEventListener("click",nextLesson);
// previousLessonElement.addEventListener("click",previousLesson);


modalRightButtonElement.addEventListener("click",() => {
    exp +=1
    expFinalElement.innerText = `${exp}`;
    nextLesson();
    
});

modalWrongButtonElement.addEventListener("click",() => {
    expFinalElement.innerText = `${exp}`;
    nextLesson();
});

// variaveis do jogo

let round = 0;
let exp = 0;
let title = "";
let subtitle = "";
let caseText = "";
let image = ""; //?? nao lembro como bota imagem no js
let quote = "";
let question = "";
let option1Title = "";
let option1Text = "";
let option2Title = "";
let option2Text = "";
let option3Title = "";
let option3Text = "";
let option4Title = "";
let option4Text = "";
let progress = 0;
let expFinal = "";
let tituloFinal = "";
let subtituloFinal = "";
let bodyFinal = "";


// infos para load nos rounds

let rounds = [ 

    {   round: 1, 
        lessonTitle: "Li????o sobre o Livro - A Arte da Guerra",
        lessonSubtitle: "Aprenda sobre a import??ncia deste livro",
        lessonCase: "<p>O livro A Arte da Guerra ?? um tratado sobre tomada de decis??o em tempos de guerra. Antes de ser mundialmente difundido, passou s??culos como confidencial na China. Desde ent??o, tem sido usado por estrategistas militares, esportistas e, principalmente, gestores de neg??cio ainda no s??culo XXI. Seus conceitos atemporais abordam n??o apenas t??ticas de guerra, mas tamb??m lideran??a, estrat??gia, psicologia e princ??pios gerais aplic??veis ?? vida moderna.</p> ",
        lessonQuote: "A Arte da Guerra",
        caseImage: "./case-images/book-cover.jpeg", //considerar o caminho inicial como o html, n??o o js, para poder referenciar o caminho da pasta e da imagem
        lessonQuestion: "Quem escreveu A Arte da Guerra?", 
        option1: { 
            title: "Mao Tse Tung", 
            text: "L??der da revolu????o Chinesa", 
            correct: false },
        option2: { 
            title: 'Conf??cio', 
            text: "Fil??sofo chin??s, difusor do Tao??smo", 
            correct: false },
        option3: { 
            title: "Sun Tzu", 
            text: "Fil??sofo militar e general chin??s", 
            correct: true },
        option4: { 
            title: 'N??o se sabe', 
            text: "Autor indefinido", 
            correct: false },
        modalRight: "Esse livro foi escrito por Sun Tzu, general e fil??sofo militar, que nasceu por volta de 500 AC em uma fam??lia com tradi????o em assuntos pol??ticos e militares. Viveu no Estado de Qi, origem de muitos fil??sofos militares e pol??ticos do Per??odo dos Estados Combatentes, ??poca de incessantes guerras entre Estados que viriam a se unificar, tornando-se a China.",
        modalWrong: "Esse livro foi escrito por Sun Tzu, general e fil??sofo militar, que nasceu por volta de 500 AC em uma fam??lia com tradi????o em assuntos pol??ticos e militares. Viveu no Estado de Qi, origem de muitos fil??sofos militares e pol??ticos do Per??odo dos Estados Combatentes, ??poca de incessantes guerras entre Estados que viriam a se unificar, tornando-se a China.",
    },

    {   round: 2, 
        lessonTitle: "Li????o sobre a import??ncia da Arte da Guerra",
        lessonSubtitle: "A import??ncia de saber a Arte da Guerra",
        lessonCase: "<p>H?? a necessidade da mobiliza????o de todo o Estado para a guerra: Quem est?? em guerra ?? o Pa??s, n??o as For??as Armadas. Os diversos setores de uma empresa devem trabalhar harmonicamente, pois s?? assim resultar?? a sinergia empresarial necess??ria ao sucesso.</p> ",
        lessonQuote: "A Arte da Guerra ?? de vital import??ncia para o Estado. ?? quest??o de vida ou morte, uma estrada tanto para a seguran??a quanto para a ru??na. Sun Tzu",
        caseImage: "./case-images/art.jpeg",
        lessonQuestion: "Usando guerra de forma metaf??rica, qual dos agentes abaixo est?? tamb??m sempre em guerra?", 
        option1: { 
            title: 'Empresas monopolistas', 
            text: "Ou seja, que det??m o monop??lio da produ????o de um bem.", 
            correct: false },
        option2: { 
            title: 'Empresas sem competidores', 
            text: "Parecido com as monopolistas, mas sem garantia de monop??lio emitida pelo governo", 
            correct: false },
        option3: { 
            title: 'Cart??is', 
            text: "Empresas que definem pre??os em conjunto", 
            correct: false },
        option4: { 
            title: 'Empresas em ambiente competitivo', 
            text: "Ou seja, que possuem competidores no mesmo mercado", 
            correct: true },
        modalRight: "Toda empresa em um ambiente competitivo est?? sempre ???em guerra???, seja por mais mercado, para baixar seus custos, para inovar antes de um concorrente etc. E se n??o guerrearem sabiamente, est??o fadadas ao fracasso.",
        modalWrong: "Toda empresa em um ambiente competitivo est?? sempre ???em guerra???, seja por mais mercado, para baixar seus custos, para inovar antes de um concorrente etc. E se n??o guerrearem sabiamente, est??o fadadas ao fracasso.",
    },

    {   round: 3, 
        lessonTitle: "Li????o sobre Adaptabilidade",
        lessonSubtitle: "Adaptabilidade ?? um dos mais importantes conceitos do Livro para predizer o sucesso",
        lessonCase: "<p>Sun Tzu, seguindo a filosofia tao??sta, mostra com met??foras que devemos ser flex??veis, adaptando-nos ??s circunst??ncias. Muda-se o meio, por??m o objetivo de longo prazo permanece o mesmo, vencer. Assim, entendamos adaptabilidade como transformar adversidades em oportunidades. Empresas que enxergam as oportunidades e se articulam para explor??-las ter??o sucesso, enquanto as que n??o conseguirem se adaptar e inovar, desaparecer??o. Nesta guerra pand??mica, haver?? vencedores e perdedores nos neg??cios. </p> ",
        lessonQuote: "Assim como a ??gua se adapta ?? conforma????o do solo, na guerra ?? preciso ser flex??vel; deve-se adaptar sua t??tica ?? situa????o do inimigo. Sun Tzu",
        caseImage: "./case-images/book-cover.jpeg",
        lessonQuestion: "Qual dos itens abaixo ?? comum a bons l??deres, segundo o conceito de adaptabilidade?", 
        option1: { 
            title: 'Saber a hora de desistir', 
            text: "Melhor sair derrotado do que morto", 
            correct: false },
        option2: { 
            title: 'Sempre ter um plano B', 
            text: "Afinal, shit happens", 
            correct: true },
        option3: { 
            title: 'Nunca negociar com inimigos', 
            text: "Nem com traidores, porque ainal viram inimigos", 
            correct: false },
        option4: { 
            title: 'Sempre seguir o plano', 
            text: "Um bom plano ?? a chave da vit??ria", 
            correct: false },
        modalRight: "Um erro bastante comum em combates, sejam eles de guerra ou contra a concorr??ncia, ?? julgar que o plano ?? t??o perfeito que n??o precisar?? de altera????es. A verdade ?? que tudo pode acontecer e devemos estar sempre preparados para realizar manobras. N??o se permita prender sobre uma ??nica forma de a????o, e tenha sempre os chamados planos B. Quanto mais preparado estiver para agir em situa????es de imprevisto, melhor ir?? se sair na batalha.",
        modalWrong: "Um erro bastante comum em combates, sejam eles de guerra ou contra a concorr??ncia, ?? julgar que o plano ?? t??o perfeito que n??o precisar?? de altera????es. A verdade ?? que tudo pode acontecer e devemos estar sempre preparados para realizar manobras. N??o se permita prender sobre uma ??nica forma de a????o, e tenha sempre os chamados planos B. Quanto mais preparado estiver para agir em situa????es de imprevisto, melhor ir?? se sair na batalha.",
    },

    {   round: 4, 
        lessonTitle: "Li????o sobre oportunidades",
        lessonSubtitle: "Crises tamb??m geram oportunidades",
        lessonCase: "<p>Conforme a teoria de Sun Tzu, a capacidade de pivotar e inovar rapidamente ?? a chave para o sucesso em tempos de turbul??ncia. Devemos lembrar, inclusive, que a hist??ria tem muitos exemplos de oportunidades de neg??cios aproveitadas, bem como de empresas criadas em per??odos de crise. Por exemplo, a crise de 2008 foi o celeiro de startups com: WhatsApp, Instagram, Groupon, Uber, Pinterest, Square e Slack, para citar algumas.</p> ",
        lessonQuote: "No meio do caos, tamb??m h?? oportunidade. Sun Tzu ",
        caseImage: "./case-images/opportunity.jpeg",
        lessonQuestion: "A oportunidade ?? aproveitada normalmente por quem...", 
        option1: { 
            title: 'Inova', 
            text: "Usa a crise como oportunidade para se reinventar", 
            correct: true },
        option2: { 
            title: 'Espera', 
            text: "Olha para o que seus concorrentes est??o fazendo", 
            correct: false },
        option3: { 
            title: 'Tem sorte', 
            text: "Est?? no lugar certo e na hora certa", 
            correct: false },
        option4: { 
            title: 'Tem rigidez', 
            text: "Aguenta o tranco sem se alterar", 
            correct: false },
        modalRight: "A crise do Covid-19 n??o ?? muito diferente das outras. Vivemos um per??odo sombrio de pandemia e depress??o econ??mica que afeta os neg??cios. Em meio ao impacto financeiro, ao fechamento de lojas e escrit??rios, as empresas tiveram que mudar sua forma de trabalho, adotando novos protocolos de seguran??a e teletrabalho. Vimos tamb??m empresas se reinventando, como qu??micas que passaram a fabricar ??lcool em gel, confec????es que est??o produzindo m??scaras, restaurantes que se adaptaram ao  delivery, lojas que passaram a vender online etc.",
        modalWrong: "A crise do Covid-19 n??o ?? muito diferente das outras. Vivemos um per??odo sombrio de pandemia e depress??o econ??mica que afeta os neg??cios. Em meio ao impacto financeiro, ao fechamento de lojas e escrit??rios, as empresas tiveram que mudar sua forma de trabalho, adotando novos protocolos de seguran??a e teletrabalho. Vimos tamb??m empresas se reinventando, como qu??micas que passaram a fabricar ??lcool em gel, confec????es que est??o produzindo m??scaras, restaurantes que se adaptaram ao  delivery, lojas que passaram a vender online etc.",
    },

    {   round: 5, 
        lessonTitle: "Li????o sobre Planejamento",
        lessonSubtitle: "Melhor feito do que perfeito",
        lessonCase: "<p>Mesmo que a velocidade possa muitas vezes ser imprudente, o atraso n??o pode ser nada, se n??o tolice. A rapidez de suas a????es pode determinar se elas ser??o, ou n??o, bem-sucedidas. Agora, se voc?? for lento, a certeza do fracasso ?? eminente. </p> ",
        lessonQuote: "Planeje o que ?? dif??cil enquanto ?? f??cil, fa??a o que ?? ??timo enquanto ?? pequeno. Sun Tzu",
        caseImage: "./case-images/planning.jpeg",
        lessonQuestion: "Qual frase mais se encaixa com esta li????o?", 
        option1: { 
            title: 'Quem ajuda, amigo ??', 
            text: "?? importante ajudar os amigos para esperar reciprocidade", 
            correct: false },
        option2: { 
            title: 'Melhor um p??ssaro na m??o...', 
            text: "Do que dois voando", 
            correct: false },
        option3: { 
            title: 'O melhor dia para come??ar foi ontem', 
            text: "O segundo melhor ?? hoje", 
            correct: true },
        option4: { 
            title: 'Uma m??o lava a outra', 
            text: "A import??ncia do trabalho em equipe", 
            correct: false },
        modalRight: "Ser apenas reativo ??s necessidades repentinas de ???cisnes negros??? pode n??o ser a estrat??gia mais rent??vel ou saud??vel para uma empresa. A li????o ?? que, melhor do que se adaptar ??s mudan??as, ?? prev??-las.",
        modalWrong: "Ser apenas reativo ??s necessidades repentinas de ???cisnes negros??? pode n??o ser a estrat??gia mais rent??vel ou saud??vel para uma empresa. A li????o ?? que, melhor do que se adaptar ??s mudan??as, ?? prev??-las.",
    },

    {   round: 6, 
        lessonTitle: "Li????o sobre Agilidade",
        lessonSubtitle: "Agilidade n??o ?? impulsividade",
        lessonCase: "<p>Sun Tzu afirma no livro que voc?? deve ser capaz de agir com velocidade. Entretanto, isso n??o significa que fazer as coisas de forma apressada e sem pensar. Na realidade, a velocidade ?? algo que exige muita prepara????o. Por isso, preparar-se para reduzir o tempo que sua empresa leva para tomar decis??es, desenvolver produtos e conquistar clientes ?? fundamental. Pensar e compreender as rea????es competitivas que podem ser usadas como respostas aos seus ataques tamb??m ?? importante.</p> ",
        lessonQuote: "Se r??pido, eu sobrevivo. Se devagar, estou perdido... Sun Tzu ",
        caseImage: "./case-images/fast.jpeg",
        lessonQuestion: "O que fazer em meio a uma tempestade?", 
        option1: { 
            title: 'Elaborar e executar com rapidez uma estrat??gia de conten????o de crise', 
            text: "Exemplo com comit??s de crise", 
            correct: true },
        option2: { 
            title: 'Esperar que ela passe antes de agir', 
            text: "N??o agir quando h?? muita turbul??ncia", 
            correct: false },
        option3: { 
            title: 'Perguntar aos seus funcion??rios o que fazer', 
            text: "Dar 100% de autonomia", 
            correct: false },
        option4: { 
            title: 'Executar tudo que for sugerido', 
            text: "A voz do povo ?? a voz de Deus", 
            correct: false },
        modalRight: "Esteja pronto para pivotar, repensar seu neg??cio ou inovar. A estrat??gia errada ?? n??o fazer nada ou n??o ter uma estrat??gia. N??o fazer nada durante uma tempestade ?? a receita para o desastre. Lembre-se de que, em meio a qualquer crise, as oportunidades multiplicam-se quando s??o aproveitadas.",
        modalWrong: "Esteja pronto para pivotar, repensar seu neg??cio ou inovar. A estrat??gia errada ?? n??o fazer nada ou n??o ter uma estrat??gia. N??o fazer nada durante uma tempestade ?? a receita para o desastre. Lembre-se de que, em meio a qualquer crise, as oportunidades multiplicam-se quando s??o aproveitadas.",
    },

    {   round: 7, 
        lessonTitle: "Li????o sobre Planejamento",
        lessonSubtitle: "alguma coisa",
        lessonCase: "<p>bla</p><p>blabla</p> ",
        lessonQuote: "Cada batalha ?? ganha ou perdida antes mesmo de ser travada. Sun Tzu",
        caseImage: "",
        lessonQuestion: "Quem escreveu A Arte da Guerra?", 
        option1: { 
            title: 'pepperoni2', 
            text: "fasdfs", 
            correct: false },
        option2: { 
            title: 'pepperoni2', 
            text: "fasdfs", 
            correct: false },
        option3: { 
            title: 'pepperoni2', 
            text: "fasdfs", 
            correct: true },
        option4: { 
            title: 'pepperoni2', 
            text: "fasdfs", 
            correct: false },
        modalRight: "Conhecer os pontos fracos e fortes de seu inimigo ?? indispens??vel, pois possibilita que os planos sejam realizados com uma maior precis??o e que a????es mais efetivas sejam tomadas no calor da batalha. Uma outra quest??o importante ?? conhecer os pontos fortes e fracos do ex??rcito sob seu comando, e sempre tentar corrigir as falhas e aprimorar as qualidades.",
        modalWrong: "Conhecer os pontos fracos e fortes de seu inimigo ?? indispens??vel, pois possibilita que os planos sejam realizados com uma maior precis??o e que a????es mais efetivas sejam tomadas no calor da batalha. Uma outra quest??o importante ?? conhecer os pontos fortes e fracos do ex??rcito sob seu comando, e sempre tentar corrigir as falhas e aprimorar as qualidades.",
    },

    {   round: 8, 
        lessonTitle: "Li????o sobre ",
        lessonSubtitle: "alguma coisa",
        lessonCase: "<p>bla</p><p>blabla</p> ",
        lessonQuote: "blablabla",
        caseImage: "",
        lessonQuestion: "Quem escreveu A Arte da Guerra?", 
        option1: { 
            title: 'pepperoni2', 
            text: "fasdfs", 
            correct: false },
        option2: { 
            title: 'pepperoni2', 
            text: "fasdfs", 
            correct: false },
        option3: { 
            title: 'pepperoni2', 
            text: "fasdfs", 
            correct: true },
        option4: { 
            title: 'pepperoni2', 
            text: "fasdfs", 
            correct: false },
        modalRight: "",
        modalWrong: "",
    },

    {   round: 9, 
        lessonTitle: "Li????o sobre ",
        lessonSubtitle: "alguma coisa",
        lessonCase: "<p>bla</p><p>blabla</p> ",
        lessonQuote: "blablabla",
        caseImage: "",
        lessonQuestion: "Quem escreveu A Arte da Guerra?", 
        option1: { 
            title: 'pepperoni2', 
            text: "fasdfs", 
            correct: false },
        option2: { 
            title: 'pepperoni2', 
            text: "fasdfs", 
            correct: false },
        option3: { 
            title: 'pepperoni2', 
            text: "fasdfs", 
            correct: true },
        option4: { 
            title: 'pepperoni2', 
            text: "fasdfs", 
            correct: false },
        modalRight: "",
        modalWrong: "",
    },

    {   round: 10, 
        lessonTitle: "Li????o sobre ",
        lessonSubtitle: "alguma coisa",
        lessonCase: "<p>bla</p><p>blabla</p> ",
        lessonQuote: "blablabla",
        caseImage: "",
        lessonQuestion: "Quem escreveu A Arte da Guerra?", 
        option1: { 
            title: 'pepperoni2', 
            text: "fasdfs", 
            correct: false },
        option2: { 
            title: 'pepperoni2', 
            text: "fasdfs", 
            correct: false },
        option3: { 
            title: 'pepperoni2', 
            text: "fasdfs", 
            correct: true },
        option4: { 
            title: 'pepperoni2', 
            text: "fasdfs", 
            correct: false },
        modalRight: "",
        modalWrong: "",
    },

];


// ?? dando problema // p??gina de endGame 

// let endGames = [
//     {   endGameType: 1, 
//         tituloFinal = "Parab??ns pelo seu conhecimento!",
//         subtituloFinal = "Sua pontua????o foi acima de 80%",
//         bodyFinal = "Voc?? est?? em dia com os conhecimentos.",
//     },

//     {   endGameType: 2, 
//         tituloFinal = "Conhecimento mediano",
//         subtituloFinal = "Sua pontua????o foi acima de 50%",
//         bodyFinal = "Voc?? est?? com conhecimentos medianos.",
//     },

//     {   endGameType: 2, 
//         tituloFinal = "Conhecimento abaixo da m??dia...",
//         subtituloFinal = "Sua pontua????o foi abaixo de 50%",
//         bodyFinal = "Voc?? est?? com conhecimentos abaixo da m??dia.",
//     },
// ];

// fun????o de carregar round

function loadRound (n) { // ??fazer em fun????o de apertar o play e dps os botoes ou next/previous?
    
    // round = rounds[n].round -1;
    roundElement.innerText = `Li????o ${rounds[n].round}`;
    expElement.innerText = `Exp: ${exp}`;
    titleElement.innerText = rounds[n].lessonTitle;
    subtitleElement.innerText = rounds[n].lessonSubtitle;
    caseTextElement.innerHTML = rounds[n].lessonCase;
    questionElement.innerText = rounds[n].lessonQuestion;
    // imageElement.src = rounds[n].caseImage ;
    quoteElement.innerText = rounds[n].lessonQuote;
    option1TitleElement.innerText = rounds[n].option1.title;
    option2TitleElement.innerText = rounds[n].option2.title;
    option3TitleElement.innerText = rounds[n].option3.title;
    option4TitleElement.innerText = rounds[n].option4.title;
    option1TextElement.innerText = rounds[n].option1.text;
    option2TextElement.innerText = rounds[n].option2.text;
    option3TextElement.innerText = rounds[n].option3.text;
    option4TextElement.innerText = rounds[n].option4.text;
    progressBarElement.style.width = `${progress}%`;
    
    isAnswerRight(n)  
    
    progress = n*20 + 20
}

function isAnswerRight (n) {
    
    if(rounds[n].option1.correct) {
        card1Element.dataset.target = "#exampleModalRight";
        modalRightBodyElement.innerText = rounds[n].modalRight;
    } else {
        card1Element.dataset.target = "#exampleModalWrong";
        modalWrongBodyElement.innerText = rounds[n].modalWrong;
    }
    
    if(rounds[n].option2.correct) {
        card2Element.dataset.target = "#exampleModalRight";
        modalRightBodyElement.innerText = rounds[n].modalRight;
    } else {
        card2Element.dataset.target = "#exampleModalWrong";
        modalWrongBodyElement.innerText = rounds[n].modalWrong;
    }
    
    if(rounds[n].option3.correct) {
        card3Element.dataset.target = "#exampleModalRight";
        modalRightBodyElement.innerText = rounds[n].modalRight;
    } else {
        card3Element.dataset.target = "#exampleModalWrong";
        modalWrongBodyElement.innerText = rounds[n].modalWrong;
    }
    
    if(rounds[n].option4.correct) {
        card4Element.dataset.target = "#exampleModalRight";
        modalRightBodyElement.innerText = rounds[n].modalRight;
    } else {
        card4Element.dataset.target = "#exampleModalWrong";
        modalWrongBodyElement.innerText = rounds[n].modalWrong;
    }

}

// ?? fun????o dando problema // fun????o para dar 3 tipos de respostas no endgame

// function loadEndGame () { 
//     tituloFinalElement.innerText = endGames[0].endGameType.tituloFinal;
//     subtituloFinalElement.innerText = endGames[0].endGameType.subtituloFinal;
//     bodyFinalElement.innerHTML =endGames[0].endGameType.bodyFinal;
// }


// bot??o de previous lesson e next lesson no footer desativados

// function previousLesson () {
//     if (round > 0) {
//         loadRound(round-1)
//     }
// }

previousLessonElement.style.display = "none";
nextLessonElement.style.display = "none";

// funcao next lesson 

function nextLesson () {
    
    round += 1
    
    if (round < 6) {
        loadRound(round)
    } else {
        gameAreaElement.style.display = "none";
        endGameElement.style.display = "block";
    }

}

// pagina inicial

endGameElement.style.display = "none";
loadRound(0)



