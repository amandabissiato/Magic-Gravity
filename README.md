# Magic-Gravity
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta name="description" content="Rocha Chueiri — uma escola mágica ancestral escondida entre as Montanhas Nebulosas.">
  <meta name="theme-color" content="#090714">

  <title>Rocha Chueiri | RPG</title>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

    :root {
      --bg: #090714;
      --bg-light: #110d22;
      --purple: #8c5cff;
      --purple-light: #b99aff;
      --gold: #e7bd68;
      --gold-light: #ffe3a0;
      --text: #f4efff;
      --muted: #aaa1bd;
      --card: rgba(255, 255, 255, 0.055);
      --border: rgba(255, 255, 255, 0.11);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background:
        radial-gradient(circle at 20% 10%, rgba(110, 60, 200, .18), transparent 30%),
        radial-gradient(circle at 80% 30%, rgba(70, 40, 150, .13), transparent 30%),
        var(--bg);
      color: var(--text);
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
      overflow-x: hidden;
    }

    /* =========================
       ESTRELAS
    ========================= */

    .stars,
    .stars::before,
    .stars::after {
      position: fixed;
      inset: 0;
      content: "";
      pointer-events: none;
      z-index: -1;
      background-image:
        radial-gradient(circle, rgba(255,255,255,.7) 1px, transparent 1px),
        radial-gradient(circle, rgba(255,255,255,.4) 1px, transparent 1px);
      background-size: 120px 120px, 200px 200px;
      background-position: 20px 40px, 90px 100px;
      opacity: .22;
    }

    .stars::before {
      transform: scale(1.5);
      opacity: .12;
    }

    .stars::after {
      transform: scale(.7);
      opacity: .18;
    }

    /* =========================
       HEADER
    ========================= */

    header {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 100;
      padding: 18px 6%;
      background: rgba(9, 7, 20, .72);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(255,255,255,.06);
    }

    nav {
      max-width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-family: 'Cinzel', serif;
      font-size: 1.35rem;
      color: var(--gold-light);
      letter-spacing: 2px;
      text-decoration: none;
    }

    .logo span {
      color: var(--purple-light);
    }

    .nav-links {
      display: flex;
      gap: 28px;
      list-style: none;
    }

    .nav-links a {
      color: #d9d1e8;
      text-decoration: none;
      font-size: .9rem;
      transition: .3s;
    }

    .nav-links a:hover {
      color: var(--gold-light);
    }

    .menu {
      display: none;
      background: none;
      border: none;
      color: white;
      font-size: 1.7rem;
      cursor: pointer;
    }

    /* =========================
       HERO
    ========================= */

    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 130px 20px 80px;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: "";
      position: absolute;
      width: 700px;
      height: 700px;
      background: radial-gradient(circle, rgba(118, 71, 255, .22), transparent 65%);
      top: 5%;
      left: 50%;
      transform: translateX(-50%);
      filter: blur(10px);
    }

    .hero-content {
      max-width: 900px;
      position: relative;
      z-index: 2;
    }

    .eyebrow {
      color: var(--gold);
      text-transform: uppercase;
      letter-spacing: 5px;
      font-size: .72rem;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .hero h1 {
      font-family: 'Cinzel', serif;
      font-size: clamp(3rem, 8vw, 7rem);
      line-height: .95;
      letter-spacing: 3px;
      background: linear-gradient(135deg, #fff, #d7c8ff 45%, #b17cff);
      -webkit-background-clip: text;
      color: transparent;
      margin-bottom: 25px;
      text-shadow: 0 0 50px rgba(143, 89, 255, .15);
    }

    .hero h1 span {
      display: block;
      color: var(--gold);
      font-size: .28em;
      letter-spacing: 8px;
      margin-top: 20px;
      background: none;
      -webkit-text-fill-color: var(--gold);
    }

    .hero p {
      max-width: 650px;
      margin: auto;
      color: var(--muted);
      font-size: 1.08rem;
    }

    .buttons {
      display: flex;
      justify-content: center;
      gap: 14px;
      margin-top: 38px;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-block;
      padding: 14px 25px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: .3s;
    }

    .btn-primary {
      background: linear-gradient(135deg, #9b6cff, #6540c9);
      color: white;
      box-shadow: 0 8px 30px rgba(112, 67, 235, .25);
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 35px rgba(112, 67, 235, .4);
    }

    .btn-secondary {
      border: 1px solid var(--border);
      color: white;
      background: rgba(255,255,255,.04);
    }

    .btn-secondary:hover {
      border-color: var(--purple);
      background: rgba(140,92,255,.1);
    }

    /* =========================
       SEÇÕES
    ========================= */

    section {
      padding: 100px 6%;
    }

    .container {
      max-width: 1150px;
      margin: auto;
    }

    .section-title {
      text-align: center;
      margin-bottom: 55px;
    }

    .section-title small {
      color: var(--gold);
      text-transform: uppercase;
      letter-spacing: 4px;
      font-size: .7rem;
    }

    .section-title h2 {
      font-family: 'Cinzel', serif;
      font-size: clamp(2rem, 4vw, 3.2rem);
      margin-top: 10px;
    }

    .section-title p {
      color: var(--muted);
      max-width: 650px;
      margin: 14px auto 0;
    }

    /* =========================
       LORE
    ========================= */

    .lore {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      align-items: center;
    }

    .lore-text h3 {
      font-family: 'Cinzel', serif;
      color: var(--gold-light);
      font-size: 1.7rem;
      margin-bottom: 18px;
    }

    .lore-text p {
      color: var(--muted);
      margin-bottom: 16px;
    }

    .quote {
      border-left: 2px solid var(--gold);
      padding: 15px 20px;
      margin-top: 25px;
      color: #d9d0e9;
      font-style: italic;
    }

    .castle {
      min-height: 390px;
      border: 1px solid var(--border);
      border-radius: 20px;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      background:
        linear-gradient(to top, rgba(5,3,13,.9), transparent),
        radial-gradient(circle at 50% 30%, rgba(140,92,255,.3), transparent 45%),
        #0d0a1b;
    }

    .castle::before {
      content: "🏰";
      font-size: 10rem;
      filter: grayscale(.2) drop-shadow(0 0 30px rgba(140,92,255,.35));
      margin-bottom: 45px;
      opacity: .8;
    }

    .mountains {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(135deg, transparent 50%, #07050f 51%) 0 0/140px 100px repeat-x;
      opacity: .8;
    }

    /* =========================
       ESCOLA
    ========================= */

    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    .card {
      padding: 30px;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 15px;
      transition: .35s;
    }

    .card:hover {
      transform: translateY(-7px);
      border-color: rgba(153,110,255,.5);
      background: rgba(140,92,255,.08);
    }

    .card-icon {
      font-size: 2.2rem;
      margin-bottom: 18px;
    }

    .card h3 {
      font-family: 'Cinzel', serif;
      margin-bottom: 10px;
      color: #eee8ff;
    }

    .card p {
      color: var(--muted);
      font-size: .92rem;
    }

    /* =========================
       CRIATURAS
    ========================= */

    .creatures {
      background:
        linear-gradient(rgba(9,7,20,.85), rgba(9,7,20,.95)),
        radial-gradient(circle at center, rgba(110,60,200,.15), transparent 60%);
    }

    .creature-card {
      text-align: center;
    }

    .creature-icon {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 0 auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3.3rem;
      background: radial-gradient(circle, rgba(140,92,255,.25), rgba(140,92,255,.04));
      border: 1px solid rgba(180,145,255,.2);
    }

    /* =========================
       COMPETIÇÃO
    ========================= */

    .competition {
      position: relative;
    }

    .competition-box {
      background:
        linear-gradient(135deg, rgba(120,75,220,.13), rgba(255,190,80,.04));
      border: 1px solid rgba(190,150,255,.18);
      border-radius: 24px;
      padding: 55px;
      text-align: center;
    }

    .competition-box h3 {
      font-family: 'Cinzel', serif;
      color: var(--gold-light);
      font-size: 2rem;
      margin-bottom: 15px;
    }

    .competition-box p {
      max-width: 700px;
      color: var(--muted);
      margin: auto;
    }

    .challenges {
      margin-top: 40px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
    }

    .challenge {
      padding: 18px 10px;
      border-radius: 10px;
      border: 1px solid var(--border);
      background: rgba(0,0,0,.15);
    }

    .challenge span {
      display: block;
      font-size: 1.5rem;
      margin-bottom: 7px;
    }

    .challenge small {
      color: #c9c0d8;
    }

    /* =========================
       RAÇAS
    ========================= */

    .races {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
    }

    .race {
      padding: 25px 15px;
      text-align: center;
      border: 1px solid var(--border);
      border-radius: 14px;
      background: rgba(255,255,255,.035);
    }

    .race strong {
      display: block;
      font-family: 'Cinzel', serif;
      color: var(--gold-light);
      margin-top: 10px;
    }

    /* =========================
       CTA
    ========================= */

    .cta {
      text-align: center;
      padding-bottom: 130px;
    }

    .cta-box {
      max-width: 850px;
      margin: auto;
      padding: 70px 30px;
      border-radius: 25px;
      border: 1px solid rgba(231,189,104,.2);
      background:
        radial-gradient(circle at center, rgba(140,92,255,.14), transparent 65%);
    }

    .cta h2 {
      font-family: 'Cinzel', serif;
      font-size: clamp(2rem, 5vw, 3.5rem);
      margin-bottom: 15px;
    }

    .cta p {
      color: var(--muted);
      margin-bottom: 30px;
    }

    /* =========================
       FOOTER
    ========================= */

    footer {
      padding: 30px 6%;
      border-top: 1px solid var(--border);
      text-align: center;
      color: #756d83;
      font-size: .8rem;
    }

    footer strong {
      color: var(--gold);
    }

    /* =========================
       ANIMAÇÕES
    ========================= */

    .reveal {
      opacity: 0;
      transform: translateY(25px);
      transition: opacity .8s ease, transform .8s ease;
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* =========================
       RESPONSIVO
    ========================= */

    @media (max-width: 800px) {

      .menu {
        display: block;
      }

      .nav-links {
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        padding: 20px;
        background: rgba(9,7,20,.97);
        display: none;
        flex-direction: column;
        text-align: center;
      }

      .nav-links.active {
        display: flex;
      }

      .lore,
      .cards {
        grid-template-columns: 1fr;
      }

      .races {
        grid-template-columns: repeat(2, 1fr);
      }

      .challenges {
        grid-template-columns: repeat(2, 1fr);
      }

      .competition-box {
        padding: 35px 20px;
      }
    }

    @media (max-width: 480px) {

      section {
        padding: 75px 5%;
      }

      .hero h1 {
        font-size: 3.2rem;
      }

      .races,
      .challenges {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>

<body>

  <div class="stars"></div>

  <!-- =========================
       MENU
  ========================== -->

  <header>
    <nav>
      <a href="#inicio" class="logo">
        ROCHA <span>CHUEIRI</span>
      </a>

      <button class="menu" aria-label="Abrir menu">
        ☰
      </button>

      <ul class="nav-links">
        <li><a href="#escola">A Escola</a></li>
        <li><a href="#criaturas">Criaturas</a></li>
        <li><a href="#competicao">Competição</a></li>
        <li><a href="#racas">Raças</a></li>
        <li><a href="#jogar">Jogar</a></li>
      </ul>
    </nav>
  </header>

  <!-- =========================
       HERO
  ========================== -->

  <main>

    <section class="hero" id="inicio">
      <div class="hero-content">

        <div class="eyebrow">
          RPG de fantasia • As Montanhas Nebulosas
        </div>

        <h1>
          Rocha Chueiri
          <span>Onde a magia desperta</span>
        </h1>

        <p>
          Uma escola mágica ancestral escondida entre montanhas envoltas
          em névoa. Aqui, jovens de diferentes raças aprendem os segredos
          da magia ao lado de criaturas lendárias.
        </p>

        <div class="buttons">
          <a href="#escola" class="btn btn-primary">
            Explorar o mundo
          </a>

          <a href="#competicao" class="btn btn-secondary">
            Conhecer a Competição
          </a>
        </div>

      </div>
    </section>

    <!-- =========================
         ESCOLA
    ========================== -->

    <section id="escola">

      <div class="container">

        <div class="section-title reveal">
          <small>O mundo</small>
          <h2>Uma escola diferente de todas</h2>
          <p>
            Por séculos, Rocha Chueiri permaneceu escondida dos olhos
            daqueles que não possuem o dom da magia.
          </p>
        </div>

        <div class="lore">

          <div class="lore-text reveal">

            <h3>Entre pedra, névoa e magia</h3>

            <p>
              Erguida no coração das Montanhas Nebulosas, Rocha Chueiri
              é uma das mais antigas instituições mágicas conhecidas.
            </p>

            <p>
              Seus corredores guardam bibliotecas esquecidas, salões
              encantados, arenas de treinamento e passagens que mudam
              de lugar durante a noite.
            </p>

            <div class="quote">
              "A magia não escolhe quem é digno. Ela revela quem você
              realmente é."
            </div>

          </div>

          <div class="castle reveal">
            <div class="mountains"></div>
          </div>

        </div>

      </div>

    </section>

    <!-- =========================
         ÁREAS DA ESCOLA
    ========================== -->

    <section>

      <div class="container">

        <div class="section-title reveal">
          <small>Rocha Chueiri</small>
          <h2>Os segredos da escola</h2>
        </div>

        <div class="cards">

          <article class="card reveal">
            <div class="card-icon">📚</div>
            <h3>Biblioteca Arcana</h3>
            <p>
              Milhares de livros mágicos, grimórios antigos e
              conhecimentos proibidos repousam entre suas estantes.
            </p>
          </article>

          <article class="card reveal">
            <div class="card-icon">🔮</div>
            <h3>Salão dos Encantamentos</h3>
            <p>
              Um salão dedicado ao estudo de feitiços, runas,
              artefatos e manifestações da energia mágica.
            </p>
          </article>

          <article class="card reveal">
            <div class="card-icon">⚔️</div>
            <h3>Arena Arcana</h3>
            <p>
              O lugar onde estudantes treinam seus poderes e
              aprendem a enfrentar os perigos do mundo mágico.
            </p>
          </article>

        </div>

      </div>

    </section>

    <!-- =========================
         CRIATURAS
    ========================== -->

    <section class="creatures" id="criaturas">

      <div class="container">

        <div class="section-title reveal">
          <small>Fauna mágica</small>
          <h2>Criaturas lendárias</h2>
          <p>
            Os estudantes não estão sozinhos. Criaturas mágicas fazem
            parte da vida cotidiana dentro e ao redor da escola.
          </p>
        </div>

        <div class="cards">

          <article class="card creature-card reveal">
            <div class="creature-icon">🦅</div>
            <h3>Grifos</h3>
            <p>
              Orgulhosos guardiões das montanhas. Alguns estabelecem
              vínculos especiais com estudantes escolhidos.
            </p>
          </article>

          <article class="card creature-card reveal">
            <div class="creature-icon">🔥</div>
            <h3>Fênixes</h3>
            <p>
              Criaturas raríssimas associadas ao fogo, à renovação
              e aos mistérios da vida eterna.
            </p>
          </article>

          <article class="card creature-card reveal">
            <div class="creature-icon">🐉</div>
            <h3>Dragões</h3>
            <p>
              Seres ancestrais de poder extraordinário. Poucos
              estudantes já tiveram a oportunidade de vê-los de perto.
            </p>
          </article>

        </div>

      </div>

    </section>

    <!-- =========================
         COMPETIÇÃO
    ========================== -->

    <section class="competition" id="competicao">

      <div class="container">

        <div class="competition-box reveal">

          <div class="section-title">
            <small>O grande evento</small>
            <h2>A Competição Anual</h2>
          </div>

          <h3>Prepare sua equipe.</h3>

          <p>
            Uma vez por ano, as equipes de Rocha Chueiri enfrentam
            desafios mágicos criados pelo Arquimago Professor.
            Estratégia, coragem, inteligência e domínio da magia
            serão colocados à prova.
          </p>

          <div class="challenges">

            <div class="challenge">
              <span>🧩</span>
              <small>Enigmas</small>
            </div>

            <div class="challenge">
              <span>⚡</span>
              <small>Magia</small>
            </div>

            <div class="challenge">
              <span>🐲</span>
              <small>Criaturas</small>
            </div>

            <div class="challenge">
              <span>🏆</span>
              <small>Grande Final</small>
            </div>

          </div>

        </div>

      </div>

    </section>

    <!-- =========================
         RAÇAS
    ========================== -->

    <section id="racas">

      <div class="container">

        <div class="section-title reveal">
          <small>Os estudantes</small>
          <h2>Muitas origens. Uma escola.</h2>
          <p>
            Diferentes povos atravessam as Montanhas Nebulosas para
            estudar os mistérios da magia.
          </p>
        </div>

        <div class="races">

          <div class="race reveal">
            🧙
            <strong>Humanos</strong>
          </div>

          <div class="race reveal">
            🧝
            <strong>Elfos</strong>
          </div>

          <div class="race reveal">
            🧚
            <strong>Fadas</strong>
          </div>

          <div class="race reveal">
            🐲
            <strong>Draconianos</strong>
          </div>

          <div class="race reveal">
            🧝‍♂️
            <strong>Silvanos</strong>
          </div>

          <div class="race reveal">
            🧞
            <strong>Elementais</strong>
          </div>

          <div class="race reveal">
            🐺
            <strong>Feralis</strong>
          </div>

          <div class="race reveal">
            ✨
            <strong>Outros</strong>
          </div>

        </div>

      </div>

    </section>

    <!-- =========================
         CTA
    ========================== -->

    <section class="cta" id="jogar">

      <div class="container">

        <div class="cta-box reveal">

          <h2>Seu destino começa aqui.</h2>

          <p>
            Pegue seu grimório, reúna seus aliados e atravesse
            os portões de Rocha Chueiri.
          </p>

          <a href="#" class="btn btn-primary">
            Entrar no RPG ✦
          </a>

        </div>

      </div>

    </section>

  </main>

  <!-- =========================
       FOOTER
  ========================== -->

  <footer>
    <p>
      <strong>Rocha Chueiri</strong> — RPG de fantasia.
    </p>

    <p>
      Um mundo criado para aventuras, amizades e magia.
    </p>
  </footer>

  <script>

    // Menu mobile
    const menu = document.querySelector('.menu');
    const navLinks = document.querySelector('.nav-links');

    menu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });

    // Animação ao aparecer na tela
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    document.querySelectorAll('.reveal').forEach(element => {
      observer.observe(element);
    });

  </script>

</body>
</html>