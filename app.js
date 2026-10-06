// Banco de dados que conecta os caminhos da aventura medieval
const historias = {
    inicio: {
        text: "O antigo manuscrito estala ao abrir na página do Prefácio. A pintura de um enigmático mago empunhando um cajado parece observá-lo. As escritas revelam uma antiga profecia que envolve suas mãos. Três estradas medievais chamam pela sua honra. Qual rumo você escolhe tomar?",
        options: [
            { text: "Empunhar o escudo do reino e se alistar na guarda do castelo", nextKey: "guarda_real" },
            { text: "Bater à porta da torre esquecida para decifrar feitiçaria arcana", nextKey: "estudos_magicos" },
            { text: "Seguir os boatos de taverna e caçar tesouros na floresta sombria", nextKey: "floresta_sombria" }
        ]
    },
    guarda_real: {
        text: "Sua lealdade agrada ao Rei. Trajando malha de ferro e aço, você é colocado na guarita da muralha durante uma noite de forte tempestade. Um bando de saqueadores tenta forçar os portões inferiores em silêncio!",
        options: [
            { text: "Soar o sino de alerta geral para acordar os cavaleiros", nextKey: "sino_alerta" },
            { text: "Descer sozinho as escadarias e confrontá-los na base do ferro", nextKey: "combate_solitario" }
        ]
    },
    estudos_magicos: {
        text: "As portas de carvalho se abrem sozinhas. Poções borbulham e runas brilham nas paredes. O grimório central revela dois caminhos de poder proibido.",
        options: [
            { text: "Conjurar o Feitiço do Fogo Ancestral", nextKey: "caminho_fogo" },
            { text: "Decifrar o Feitiço de Manipulação do Tempo", nextKey: "caminho_tempo" }
        ]
    },
    floresta_sombria: {
        text: "Galhos secos quebram sob suas botas. No coração da mata, você localiza o topo de um baú de carvalho semi-enterrado nas raízes de uma árvore anciã, mas ouve passos pesados se aproximando velozmente.",
        options: [
            { text: "Arrancar a tampa do baú às pressas para pegar o tesouro", nextKey: "morte_ganancia" },
            { text: "Esconder-se nos arbustos espessos para avaliar a ameaça", nextKey: "emboscada_sucesso" }
        ]
    },
    sino_alerta: {
        text: "O sino ecoa alto pelo vale! Os cavaleiros despertam a tempo e esmagam a invasão rebelde. Por seu raciocínio rápido e disciplina, você é condecorado Capitão da Guarda Real! Vitória Militar!",
        options: []
    },
    combate_solitario: {
        text: "Sua coragem foi grande, mas o número de lâminas inimigas foi maior. Você lutou bravamente, porém acabou superado nas sombras do pátio interno. Seu nome será lembrado nas canções tristes da taverna.",
        options: []
    },
    caminho_fogo: {
        text: "As chamas obedecem ao seu comando, moldando-se ao redor do seu corpo. Você se torna o novo Feiticeiro Supremo das Terras Altas, temido por exércitos inteiros. Vitória Arcana!",
        options: []
    },
    caminho_tempo: {
        text: "O mundo congela à sua volta. Ao controlar as engrenagens das eras, você percebe que se transformou no próprio mago enigmático ilustrado no Prefácio do livro. O ciclo está completo. Vitória Mística!",
        options: []
    },
    morte_ganancia: {
        text: "A ambição o cegou. Um terrível ogro da floresta o surpreende por trás antes que pudesse abrir a fechadura. Sua jornada termina sob o chão úmido da mata.",
        options: []
    },
    emboscada_sucesso: {
        text: "Uma criatura colossal passa direto pelo seu esconderijo. Com paciência medieval, você espera ela se afastar, desenterra o baú com calma e encontra ouro e runas ancestrais perdidas! Vitória do Caçador!",
        options: []
    }
};

// Gerencia a atualização visual de cada tela de acordo com a escolha feita
function carregarCena(cenaKey) {
    const dadosCena = historias[cenaKey];
    
    // Atualiza o texto descritivo
    document.getElementById("texto-narrativa").innerText = dadosCena.text;
    
    // Limpa opções antigas do painel
    const painelEscolhas = document.getElementById("caixa-escolhas");
    painelEscolhas.innerHTML = "";
    
    // Cria novos botões se a história continuar
    dadosCena.options.forEach(opcao => {
        const botao = document.createElement("button");
        botao.innerText = opcao.text;
        botao.classList.add("botao-opcao");
        botao.addEventListener("click", () => carregarCena(opcao.nextKey));
        painelEscolhas.appendChild(botao);
    });
}

// Inicializa a crônica do início
function iniciarJogo() {
    carregarCena("inicio");
}

// Ativa as funções assim que a página renderizar totalmente
window.onload = iniciarJogo;