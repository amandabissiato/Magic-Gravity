/**
 * Crônicas Medievais - Scripts de Imersão e Magia
 */

document.addEventListener("DOMContentLoaded", () => {
    console.log("📜 O grimório foi aberto com sucesso...");

    // 1. Efeito de Digitação Mágica (Typewriter) na Letra Capitular / Texto
    const textoPrincipal = document.querySelector(".texto-principal p");
    if (textoPrincipal) {
        const textoOriginal = textoPrincipal.innerHTML;
        textoPrincipal.innerHTML = ""; // Limpa para começar o efeito
        
        let i = 0;
        function digitarTexto() {
            if (i < textoOriginal.length) {
                // Se encontrar uma tag HTML (como <br>), pula para não quebrar o layout
                if (textoOriginal.charAt(i) === '<') {
                    let fimTag = textoOriginal.indexOf('>', i);
                    textoPrincipal.innerHTML += textoOriginal.substring(i, fimTag + 1);
                    i = fimTag + 1;
                } else {
                    textoPrincipal.innerHTML += textoOriginal.charAt(i);
                    i++;
                }
                setTimeout(digitarTexto, 15); // Velocidade da digitação (em milissegundos)
            }
        }
        // Inicia a digitação após 1 segundo que a página carrega
        setTimeout(digitarTexto, 1000);
    }

    // 2. Sistema de Áudio Web (Efeito sonoro de Pergaminho/Magia ao clicar)
    // Cria um som rústico sintetizado via código, sem precisar de arquivos .mp3 externos
    function conjurarSomMagico() {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        // Oscilador para o tom do feitiço
        const oscilador = audioCtx.createOscillator();
        const ganho = audioCtx.createGain();
        
        oscilador.type = 'sine'; // Som suave
        oscilador.frequency.setValueAtTime(220, audioCtx.currentTime); // Frequência inicial (grave)
        oscilador.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.4); // Sobe para agudo
        
        // Controle do volume (faz o som sumir suavemente no final)
        ganho.gain.setValueAtTime(0.1, audioCtx.currentTime);
        ganho.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        
        oscilador.connect(ganho);
        ganho.connect(audioCtx.destination);
        
        oscilador.start();
        oscilador.stop(audioCtx.currentTime + 0.4);
    }

    // 3. Interatividade com a Moldura do Mago
    const molduraMago = document.querySelector(".moldura-mago");
    if (molduraMago) {
        // Estiliza o cursor para indicar que é clicável
        molduraMago.style.cursor = "pointer";
        
        // Adiciona um evento de clique para soltar um feitiço sonoro e visual
        molduraMago.addEventListener("click", () => {
            conjurarSomMagico();
            
            // Brilho mágico temporário na moldura
            molduraMago.style.boxShadow = "0 0 25px #ffaa00";
            molduraMago.style.transition = "box-shadow 0.2s ease";
            
            setTimeout(() => {
                molduraMago.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.3)";
            }, 300);
            
            alert("🧙‍♂️ O Mestre Conjurador sussurra: 'Apenas os dignos passarão pelas provações das Crônicas...'");
        });
    }
});
 <!-- ... resto do seu texto medieval aqui ... -->
    </div>

    <!-- LINHA A SER ADICIONADA: Conecta o arquivo de script -->
    <script src="app.js"></script>
</body>
</html>