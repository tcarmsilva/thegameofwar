// pegar elementos do html

const gameAreaElement = document.getElementById("gameArea");
const endGameElement = document.getElementById("endGame");

const roundElement = document.getElementById("round");
const expElement = document.getElementById("exp");
const titleElement = document.getElementById("title");
const subtitleElement = document.getElementById("subtitle");
const caseTextElement = document.getElementById("caseText");
const imageElement = document.getElementById("image");
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
        lessonTitle: "Lição sobre o Livro - A Arte da Guerra",
        lessonSubtitle: "Aprenda sobre a importância deste livro",
        lessonCase: "<p>O livro A Arte da Guerra é um tratado sobre tomada de decisão em tempos de guerra. Antes de ser mundialmente difundido, passou séculos como confidencial na China. Desde então, tem sido usado por estrategistas militares, esportistas e, principalmente, gestores de negócio ainda no século XXI. Seus conceitos atemporais abordam não apenas táticas de guerra, mas também liderança, estratégia, psicologia e princípios gerais aplicáveis à vida moderna.</p> ",
        lessonQuote: "A Arte da Guerra",
        caseImage: "./case-images/book-cover.jpeg", //considerar o caminho inicial como o html, não o js, para poder referenciar o caminho da pasta e da imagem
        lessonQuestion: "Quem escreveu A Arte da Guerra?", 
        option1: { 
            title: "Mao Tse Tung", 
            text: "Líder da revolução Chinesa", 
            correct: false },
        option2: { 
            title: 'Confúcio', 
            text: "Filósofo chinês, difusor do Taoísmo", 
            correct: false },
        option3: { 
            title: "Sun Tzu", 
            text: "Filósofo militar e general chinês", 
            correct: true },
        option4: { 
            title: 'Não se sabe', 
            text: "Autor indefinido", 
            correct: false },
        modalRight: "Esse livro foi escrito por Sun Tzu, general e filósofo militar, que nasceu por volta de 500 AC em uma família com tradição em assuntos políticos e militares. Viveu no Estado de Qi, origem de muitos filósofos militares e políticos do Período dos Estados Combatentes, época de incessantes guerras entre Estados que viriam a se unificar, tornando-se a China.",
        modalWrong: "Esse livro foi escrito por Sun Tzu, general e filósofo militar, que nasceu por volta de 500 AC em uma família com tradição em assuntos políticos e militares. Viveu no Estado de Qi, origem de muitos filósofos militares e políticos do Período dos Estados Combatentes, época de incessantes guerras entre Estados que viriam a se unificar, tornando-se a China.",
    },

    {   round: 2, 
        lessonTitle: "Lição sobre a importância da Arte da Guerra",
        lessonSubtitle: "A importância de saber a Arte da Guerra",
        lessonCase: "<p>Há a necessidade da mobilização de todo o Estado para a guerra: Quem está em guerra é o País, não as Forças Armadas. Os diversos setores de uma empresa devem trabalhar harmonicamente, pois só assim resultará a sinergia empresarial necessária ao sucesso.</p> ",
        lessonQuote: "A Arte da Guerra é de vital importância para o Estado. É questão de vida ou morte, uma estrada tanto para a segurança quanto para a ruína. Sun Tzu",
        caseImage: "./case-images/art.jpeg",
        lessonQuestion: "Usando guerra de forma metafórica, qual dos agentes abaixo está também sempre em guerra?", 
        option1: { 
            title: 'Empresas monopolistas', 
            text: "Ou seja, que detêm o monopólio da produção de um bem.", 
            correct: false },
        option2: { 
            title: 'Empresas sem competidores', 
            text: "Parecido com as monopolistas, mas sem garantia de monopólio emitida pelo governo", 
            correct: false },
        option3: { 
            title: 'Cartéis', 
            text: "Empresas que definem preços em conjunto", 
            correct: false },
        option4: { 
            title: 'Empresas em ambiente competitivo', 
            text: "Ou seja, que possuem competidores no mesmo mercado", 
            correct: true },
        modalRight: "Toda empresa em um ambiente competitivo está sempre “em guerra”, seja por mais mercado, para baixar seus custos, para inovar antes de um concorrente etc. E se não guerrearem sabiamente, estão fadadas ao fracasso.",
        modalWrong: "Toda empresa em um ambiente competitivo está sempre “em guerra”, seja por mais mercado, para baixar seus custos, para inovar antes de um concorrente etc. E se não guerrearem sabiamente, estão fadadas ao fracasso.",
    },

    {   round: 3, 
        lessonTitle: "Lição sobre Adaptabilidade",
        lessonSubtitle: "Adaptabilidade é um dos mais importantes conceitos do Livro para predizer o sucesso",
        lessonCase: "<p>Sun Tzu, seguindo a filosofia taoísta, mostra com metáforas que devemos ser flexíveis, adaptando-nos às circunstâncias. Muda-se o meio, porém o objetivo de longo prazo permanece o mesmo, vencer. Assim, entendamos adaptabilidade como transformar adversidades em oportunidades. Empresas que enxergam as oportunidades e se articulam para explorá-las terão sucesso, enquanto as que não conseguirem se adaptar e inovar, desaparecerão. Nesta guerra pandêmica, haverá vencedores e perdedores nos negócios. </p> ",
        lessonQuote: "Assim como a água se adapta à conformação do solo, na guerra é preciso ser flexível; deve-se adaptar sua tática à situação do inimigo. Sun Tzu",
        caseImage: "./case-images/book-cover.jpeg",
        lessonQuestion: "Qual dos itens abaixo é comum a bons líderes, segundo o conceito de adaptabilidade?", 
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
            text: "Um bom plano é a chave da vitória", 
            correct: false },
        modalRight: "Um erro bastante comum em combates, sejam eles de guerra ou contra a concorrência, é julgar que o plano é tão perfeito que não precisará de alterações. A verdade é que tudo pode acontecer e devemos estar sempre preparados para realizar manobras. Não se permita prender sobre uma única forma de ação, e tenha sempre os chamados planos B. Quanto mais preparado estiver para agir em situações de imprevisto, melhor irá se sair na batalha.",
        modalWrong: "Um erro bastante comum em combates, sejam eles de guerra ou contra a concorrência, é julgar que o plano é tão perfeito que não precisará de alterações. A verdade é que tudo pode acontecer e devemos estar sempre preparados para realizar manobras. Não se permita prender sobre uma única forma de ação, e tenha sempre os chamados planos B. Quanto mais preparado estiver para agir em situações de imprevisto, melhor irá se sair na batalha.",
    },

    {   round: 4, 
        lessonTitle: "Lição sobre oportunidades",
        lessonSubtitle: "Crises também geram oportunidades",
        lessonCase: "<p>Conforme a teoria de Sun Tzu, a capacidade de pivotar e inovar rapidamente é a chave para o sucesso em tempos de turbulência. Devemos lembrar, inclusive, que a história tem muitos exemplos de oportunidades de negócios aproveitadas, bem como de empresas criadas em períodos de crise. Por exemplo, a crise de 2008 foi o celeiro de startups com: WhatsApp, Instagram, Groupon, Uber, Pinterest, Square e Slack, para citar algumas.</p> ",
        lessonQuote: "No meio do caos, também há oportunidade. Sun Tzu ",
        caseImage: "./case-images/opportunity.jpeg",
        lessonQuestion: "A oportunidade é aproveitada normalmente por quem...", 
        option1: { 
            title: 'Inova', 
            text: "Usa a crise como oportunidade para se reinventar", 
            correct: true },
        option2: { 
            title: 'Espera', 
            text: "Olha para o que seus concorrentes estão fazendo", 
            correct: false },
        option3: { 
            title: 'Tem sorte', 
            text: "Está no lugar certo e na hora certa", 
            correct: false },
        option4: { 
            title: 'Tem rigidez', 
            text: "Aguenta o tranco sem se alterar", 
            correct: false },
        modalRight: "A crise do Covid-19 não é muito diferente das outras. Vivemos um período sombrio de pandemia e depressão econômica que afeta os negócios. Em meio ao impacto financeiro, ao fechamento de lojas e escritórios, as empresas tiveram que mudar sua forma de trabalho, adotando novos protocolos de segurança e teletrabalho. Vimos também empresas se reinventando, como químicas que passaram a fabricar álcool em gel, confecções que estão produzindo máscaras, restaurantes que se adaptaram ao  delivery, lojas que passaram a vender online etc.",
        modalWrong: "A crise do Covid-19 não é muito diferente das outras. Vivemos um período sombrio de pandemia e depressão econômica que afeta os negócios. Em meio ao impacto financeiro, ao fechamento de lojas e escritórios, as empresas tiveram que mudar sua forma de trabalho, adotando novos protocolos de segurança e teletrabalho. Vimos também empresas se reinventando, como químicas que passaram a fabricar álcool em gel, confecções que estão produzindo máscaras, restaurantes que se adaptaram ao  delivery, lojas que passaram a vender online etc.",
    },

    {   round: 5, 
        lessonTitle: "Lição sobre Planejamento",
        lessonSubtitle: "Melhor feito do que perfeito",
        lessonCase: "<p>Mesmo que a velocidade possa muitas vezes ser imprudente, o atraso não pode ser nada, se não tolice. A rapidez de suas ações pode determinar se elas serão, ou não, bem-sucedidas. Agora, se você for lento, a certeza do fracasso é eminente. </p> ",
        lessonQuote: "Planeje o que é difícil enquanto é fácil, faça o que é ótimo enquanto é pequeno. Sun Tzu",
        caseImage: "./case-images/planning.jpeg",
        lessonQuestion: "Qual frase mais se encaixa com esta lição?", 
        option1: { 
            title: 'Quem ajuda, amigo é', 
            text: "É importante ajudar os amigos para esperar reciprocidade", 
            correct: false },
        option2: { 
            title: 'Melhor um pássaro na mão...', 
            text: "Do que dois voando", 
            correct: false },
        option3: { 
            title: 'O melhor dia para começar foi ontem', 
            text: "O segundo melhor é hoje", 
            correct: true },
        option4: { 
            title: 'Uma mão lava a outra', 
            text: "A importância do trabalho em equipe", 
            correct: false },
        modalRight: "Ser apenas reativo às necessidades repentinas de “cisnes negros” pode não ser a estratégia mais rentável ou saudável para uma empresa. A lição é que, melhor do que se adaptar às mudanças, é prevê-las.",
        modalWrong: "Ser apenas reativo às necessidades repentinas de “cisnes negros” pode não ser a estratégia mais rentável ou saudável para uma empresa. A lição é que, melhor do que se adaptar às mudanças, é prevê-las.",
    },

    {   round: 6, 
        lessonTitle: "Lição sobre Agilidade",
        lessonSubtitle: "Agilidade não é impulsividade",
        lessonCase: "<p>Sun Tzu afirma no livro que você deve ser capaz de agir com velocidade. Entretanto, isso não significa que fazer as coisas de forma apressada e sem pensar. Na realidade, a velocidade é algo que exige muita preparação. Por isso, preparar-se para reduzir o tempo que sua empresa leva para tomar decisões, desenvolver produtos e conquistar clientes é fundamental. Pensar e compreender as reações competitivas que podem ser usadas como respostas aos seus ataques também é importante.</p> ",
        lessonQuote: "Se rápido, eu sobrevivo. Se devagar, estou perdido... Sun Tzu ",
        caseImage: "./case-images/fast.jpeg",
        lessonQuestion: "O que fazer em meio a uma tempestade?", 
        option1: { 
            title: 'Elaborar e executar com rapidez uma estratégia de contenção de crise', 
            text: "Exemplo com comitês de crise", 
            correct: true },
        option2: { 
            title: 'Esperar que ela passe antes de agir', 
            text: "Não agir quando há muita turbulência", 
            correct: false },
        option3: { 
            title: 'Perguntar aos seus funcionários o que fazer', 
            text: "Dar 100% de autonomia", 
            correct: false },
        option4: { 
            title: 'Executar tudo que for sugerido', 
            text: "A voz do povo é a voz de Deus", 
            correct: false },
        modalRight: "Esteja pronto para pivotar, repensar seu negócio ou inovar. A estratégia errada é não fazer nada ou não ter uma estratégia. Não fazer nada durante uma tempestade é a receita para o desastre. Lembre-se de que, em meio a qualquer crise, as oportunidades multiplicam-se quando são aproveitadas.",
        modalWrong: "Esteja pronto para pivotar, repensar seu negócio ou inovar. A estratégia errada é não fazer nada ou não ter uma estratégia. Não fazer nada durante uma tempestade é a receita para o desastre. Lembre-se de que, em meio a qualquer crise, as oportunidades multiplicam-se quando são aproveitadas.",
    },

    {   round: 7, 
        lessonTitle: "Lição sobre Planejamento",
        lessonSubtitle: "alguma coisa",
        lessonCase: "<p>bla</p><p>blabla</p> ",
        lessonQuote: "Cada batalha é ganha ou perdida antes mesmo de ser travada. Sun Tzu",
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
        modalRight: "Conhecer os pontos fracos e fortes de seu inimigo é indispensável, pois possibilita que os planos sejam realizados com uma maior precisão e que ações mais efetivas sejam tomadas no calor da batalha. Uma outra questão importante é conhecer os pontos fortes e fracos do exército sob seu comando, e sempre tentar corrigir as falhas e aprimorar as qualidades.",
        modalWrong: "Conhecer os pontos fracos e fortes de seu inimigo é indispensável, pois possibilita que os planos sejam realizados com uma maior precisão e que ações mais efetivas sejam tomadas no calor da batalha. Uma outra questão importante é conhecer os pontos fortes e fracos do exército sob seu comando, e sempre tentar corrigir as falhas e aprimorar as qualidades.",
    },

    {   round: 8, 
        lessonTitle: "Lição sobre ",
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
        lessonTitle: "Lição sobre ",
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
        lessonTitle: "Lição sobre ",
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


// ?? dando problema // página de endGame 

// let endGames = [
//     {   endGameType: 1, 
//         tituloFinal = "Parabéns pelo seu conhecimento!",
//         subtituloFinal = "Sua pontuação foi acima de 80%",
//         bodyFinal = "Você está em dia com os conhecimentos.",
//     },

//     {   endGameType: 2, 
//         tituloFinal = "Conhecimento mediano",
//         subtituloFinal = "Sua pontuação foi acima de 50%",
//         bodyFinal = "Você está com conhecimentos medianos.",
//     },

//     {   endGameType: 2, 
//         tituloFinal = "Conhecimento abaixo da média...",
//         subtituloFinal = "Sua pontuação foi abaixo de 50%",
//         bodyFinal = "Você está com conhecimentos abaixo da média.",
//     },
// ];

// função de carregar round

function loadRound (n) { // ??fazer em função de apertar o play e dps os botoes ou next/previous?
    
    // round = rounds[n].round -1;
    roundElement.innerText = `Lição ${rounds[n].round}`;
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

// ?? função dando problema // função para dar 3 tipos de respostas no endgame

// function loadEndGame () { 
//     tituloFinalElement.innerText = endGames[0].endGameType.tituloFinal;
//     subtituloFinalElement.innerText = endGames[0].endGameType.subtituloFinal;
//     bodyFinalElement.innerHTML =endGames[0].endGameType.bodyFinal;
// }


// botão de previous lesson e next lesson no footer desativados

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
        endGameElement.style.display = "block";
        // gameAreaElement.style.display = "none";
        
    }

}

// pagina inicial

endGameElement.style.display = "none";
loadRound(0)



