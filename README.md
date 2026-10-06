<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta name="description" content="Rocha Chueiri — uma fortaleza medieval e escola mágica ancestral escondida entre as Montanhas Nebulosas.">
  <meta name="theme-color" content="#1c1a17">

  <title>Rocha Chueiri | RPG Medieval</title>

  <!-- Importação correta das fontes medievais, heráldicas e góticas -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://gstatic.com" crossorigin>
  <link href="https://googleapis.com" rel="stylesheet">

  <style>
    :root {
      --bg: #1c1a17;           /* Pedra escura de masmorra */
      --bg-stone: #2b2824;     /* Cinza pedra de castelo */
      --crimson: #7a1d1d;      /* Vermelho carmesim heráldico (estandartes e escudos) */
      --crimson-light: #a62b2b;/* Carmesim iluminado por tochas */
      --parchment: #f4ebd0;    /* Cor de papel pergaminho envelhecido */
      --gold: #bfa15f;         /* Dourado heráldico antigo */
      --gold-light: #e6d3a3;   /* Latão polido / Ouro brilhante */
      --text: #eadeca;         /* Branco linho clássico para crônicas */
      --muted: #9e9380;        /* Texto desbotado pelo tempo */
      --border: #4d443a;       /* Ferro forjado antigo */
      --card-bg: rgba(43, 40, 36, 0.75); /* Fundo de pedra translúcida */
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
        radial-gradient(circle at 50% 20%, rgba(122, 29, 29, 0.15), transparent 50%),
        var(--bg);
      color: var(--text);
      font-family: 'EB Garamond', serif; /* Fonte clássica de manuscritos */
      font-size: 1.2rem;
      line-height: 1.6;
      overflow-x: hidden;
    }

    /* =========================
       TEXTURA DE PERGAMINHO
    ========================= */
    .parchment-texture {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 1000;
      opacity: 0.02;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://w3.org id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }

    /* =========================
       HEADER
    ========================= */
    header {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 100;
      padding: 20px 6%;
      background: rgba(28, 26, 23, 0.96);
      border-bottom: 2px solid var(--border);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.7);
    }

    nav {
      max-width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-family: 'MedievalSharp', cursive; /* Caligrafia gótica */
      font-size: 1.6rem;
      color: var(--gold-light);
      letter-spacing: 1px;
      text-decoration: none;
      text-shadow: 0 2px 4px rgba(0,0,0,0.8);
    }

    .logo span {
      color: var(--crimson-light);
    }

    .nav-links {
      display: flex;
      gap: 28px;
      list-style: none;
    }

    .nav-links a {
      color: var(--text);
      text-decoration: none;
      font-size: 0.95rem;
      font-family: 'Cinzel', serif;
      font-weight: 600;
      transition: .3s;
    }

    .nav-links a:hover {
      color: var(--crimson-light);
      text-shadow: 0 0 8px rgba(166, 43, 43, 0.5);
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
      padding: 140px 20px 80px;
      position: relative;
      overflow: hidden;
      border-bottom: 4px double var(--border); /* Borda heráldica clássica */
    }

    .hero::before {
      content: "";
      position: absolute;
      width: 800px;
      height: 800px;
      background: radial-gradient(circle, rgba(122, 29, 29, 0.06), transparent 70%);
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    .hero-content {
      max-width: 900px;
      position: relative;
      z-index: 2;
    }

    .eyebrow {
      color: var(--gold);
      font-family: 'Cinzel', serif;
      text-transform: uppercase;
      letter-spacing: 4px;
      font-size: 0.85rem;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .hero h1 {
      font-family: 'MedievalSharp', cursive;
      font-size: clamp(3rem, 7vw, 5.5rem);
      line-height: 1.1;
      letter-spacing: 2px;
      color: var(--parchment);
      margin-bottom: 25px;
      text-shadow: 3px 3px 0px #000, 0 0 30px rgba(122, 29, 29, 0.3);
    }

    .hero h1 span {
      display: block;
      color: var(--crimson-light);
      font-family: 'Cinzel', serif;
      font-size: 0.35em;
      letter-spacing: 6px;
      margin-top: 15px;
      text-shadow: 2px 2px 0px #000;
    }

    .hero p {
      max-width: 650px;
      margin: auto;
      color: var(--muted);
      font-size: 1.3rem;
      font-style: italic;
    }

    .buttons {
      display: flex;
      justify-content: center;
      gap: 18px;
      margin-top: 45px;
      flex-wrap: wrap;
    }

    .btn {
      display: inline-block;
      padding: 12px 30px;
      text-decoration: none;
      font-family: 'Cinzel', serif;
      font-weight: 700;
      font-size: 0.95rem;
      letter-spacing: 1px;
      transition: .3s;
      border: 2px solid var(--border);
      position: relative;
    }

    .btn-primary {
      background: var(--crimson);
      color: var(--parchment);
      border-color: var(--gold);
      box-shadow: 0 4px 15px rgba(0,0,0,0.6);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      background: var(--crimson-light);
      color: white;
      box-shadow: 0 6px 20px rgba(166, 43, 43, 0.4);
    }

    .btn-secondary {
      color: var(--text);
      background: var(--bg-stone);
      border-color: var(--border);
    }

    .btn-secondary:hover {
      border-color: var(--gold-light);
      color: var(--gold-light);
      background: rgba(43, 40, 36, 0.9);
    }

    /* =========================
       SEÇÕES GENERALIZADAS
    ========================= */
    section {
      padding: 100px 6%;
      position: relative;
    }

    section:not(:last-of-type)::after {
      content: "❧ ❖ ☙"; /* Divisor decorativo clerical */
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      color: var(--border);
      font-size: 1.5rem;
      letter-spacing: 10px;
      opacity: 0.6;
    }

    .container {
      max-width: 1150px;
      margin: auto;
    }

    .section-title {
      text-align: center;
      margin-bottom: 60px;
    }

    .section-title small {
      color: var(--gold);
      font-family: 'Cinzel', serif;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-size: 0.8rem;
      font-weight: 700;
    }

    .section-title h2 {
      font-family: 'MedievalSharp', cursive;
      font-size: clamp(2rem, 4vw, 3rem);
      color: var(--parchment);
      margin-top: 10px;
      text-shadow: 2px 2px 0px rgba(0,0,0,0.5);
    }

    .section-title p {
      color: var(--muted);
      max-width: 650px;
      margin: 14px auto 0;
      font-style: italic;
      font-size: 1.25rem;
    }

    /* =========================
       LORE (HISTÓRIA)
    ========================= */
    .lore {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      align-items: center;
    }

    @media (max-width: 768px) {
      .lore { grid-template-columns: 1fr; }
    }

    .lore-text h3 {
      font-family: 'Cinzel', serif;
      color: var(--gold-light);
      font-size: 1.8rem;
      margin-bottom: 18px;
    }

    .lore-text p {
      margin-bottom: 15px;
      text-align: justify;
      color: var(--text);
    }

    .lore-frame {
      border: 3px double var(--gold);
      padding: 10px;
      background: var(--bg-stone);
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
    }

    .lore-frame img {
      width: 100%;
      height: auto;
      display: block;
      filter: sepia(0.3) contrast(1.1);
    }
  </style>
</head>
<body>

  <!-- Textura sutil aplicada sobre o layout -->
  <div class="parchment-texture"></div>

  <!-- Cabeçalho de Navegação -->
  <header>
    <nav>
      <a href="#" class="logo">Rocha <span>Chueiri</span></a>
      <ul class="nav-links">
        <li><a href="#inicio">Início</a></li>
        <li><a href="#lore">A Fortaleza</a></li>
        <li><a href="#cronicas">Crônicas</a></li>
      </ul>
    </nav>
  </header>

  <!-- Seção de Destaque (Hero) -->
  <section class="hero" id="inicio">
    <div class="hero-content">
      <div class="eyebrow">Escola Mágica Ancestral</div>
      <h1>Rocha Chueiri<span>Santuário das Montanhas Nebulosas</span></h1>
      <p>"Onde as pedras guardam segredos arcanos e o aço forja o destino dos reinos."</p>
      <div class="buttons">
        <a href="#lore" class="btn btn-primary">Explorar Fortaleza</a>
        <a href="#cronicas" class="btn btn-secondary">Ler as Crônicas</a>
      </div>
    </div>
  </section>

  <!-- Seção de Lore Histórica -->
  <section id="lore">
    <div class="container">
      <div class="section-title">
        <small>Os Manuscritos Antigos</small>
        <h2>A História de Nossa Fundação</h2>
        <p>Registros extraídos da biblioteca oculta dos altos magos.</p>
      </div>
      
      <div class="lore">
        <div class="lore-text">
          <h3>Uma Fortaleza Inabalável</h3>