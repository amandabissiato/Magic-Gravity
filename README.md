* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: #1a0f05;
    background-image: radial-gradient(#2d1b0d 20%, #120a04 80%);
    font-family: 'Times New Roman', Times, serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    color: #2c1a04;
}

.moldura-medieval {
    border: 10px double #614125;
    background-color: #1e140a;
    padding: 15px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8);
    max-width: 650px;
    width: 100%;
    border-radius: 4px;
}

.pergaminho {
    background-color: #f2e3be;
    background-image: linear-gradient(135deg, #ebd6a3 25%, #f2e3be 75%);
    border: 2px solid #4a321a;
    padding: 35px;
    text-align: center;
    box-shadow: inset 0 0 40px #c2a666;
}

.titulo-medieval {
    font-size: 2.8rem;
    letter-spacing: 5px;
    color: #4a2e16;
    text-shadow: 1px 1px 2px rgba(255,255,255,0.6);
    font-weight: bold;
}

.divisor-estilizado {
    color: #8c5827;
    font-size: 1.2rem;
    margin: 10px 0 25px 0;
    letter-spacing: 10px;
}

.icone-ilustracao {
    font-size: 4.5rem;
    margin-bottom: 20px;
    filter: drop-shadow(2px 5px 4px rgba(0,0,0,0.4));
}

#texto-narrativa {
    font-size: 1.25rem;
    line-height: 1.7;
    text-align: justify;
    margin-bottom: 30px;
    text-indent: 25px;
    font-style: italic;
}

.lista-escolhas {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 25px;
}

.botao-opcao {
    background-color: #dfcaa0;
    border: 2px solid #5c3d21;
    color: #38220f;
    padding: 12px 15px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.15);
}

.botao-opcao:hover {
    background-color: #5c3d21;
    color: #f2e3be;
    transform: scale(1.02);
}

#btn-reiniciar {
    background: none;
    border: none;
    color: #7a4b21;
    font-family: 'Times New Roman', Times, serif;
    font-size: 1rem;
    text-decoration: underline;
    cursor: pointer;
    font-weight: bold;
}

#btn-reiniciar:hover {
    color: #4a2e16;
}