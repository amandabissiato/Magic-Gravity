<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta name="description" content="Rocha Chueiri — uma fortaleza medieval e escola mágica ancestral escondida entre as Montanhas Nebulosas.">
  <meta name="theme-color" content="#1a120b">

  <title>Rocha Chueiri | RPG Medieval</title>

  <style>
    @import url('https://googleapis.com');

    :root {
      --bg: #1a120b; /* Marrom escuro profundo, quase preto */
      --bg-light: #2c1e11; /* Tom de madeira escura / couro */
      --parchment: #f2e6ce; /* Cor de pergaminho antigo */
      --iron: #3a3f46; /* Cinza ferro medieval */
      --gold: #c5a059; /* Dourado envelhecido */
      --gold-light: #ecd69a; /* Dourado iluminado pela brasa */
      --text: #e8dfcb; /* Texto claro suave (オフホワイト medieval) */
      --muted: #a6967d; /* Texto secundário desbotado */
      --card: rgba(44, 30, 17, 0.6); /* Fundo de madeira translúcida */
      --border: #4a351e; /* Borda de ferro forjado antigo */
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
        radial-gradient(circle at 50% 20%, rgba(197, 160, 89, 0.08), transparent 40%),
        radial-gradient(circle at 10% 50%, rgba(44, 30, 17, 0.5), transparent 30%),
        var(--bg);
      color: var(--text);
      font-family: 'EB Garamond', serif; /* Fonte de crônica/manuscrito antigo */
      font-size: 1.15rem;
      line-height: 1.6;
      overflow-x: hidden;
    }

    /* =========================
       TEXTURA DE PERGAMINHO (Fundo)
    ========================= */
    .parchment-texture {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: -1;
      opacity: 0.03;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://w3.org Atem-filter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
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
      background: rgba(26, 18, 11, 0.9);
      border-bottom: 2px solid var(--border);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    }

    nav {
      max-width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-family: 'MedievalSharp', cursive; /* Fonte com aspecto gótico/medieval */
      font-size: 1.6rem;
      color: var(--gold-light);
      letter-spacing: 1px;
      text-decoration: none;
      text-shadow: 0 2px 4px rgba(0,0,0,0.8);
    }

    .logo span {
      color: var(--parchment);
    }

    .nav-links {
      display: flex;
      gap: 28px;
      list-style: none;
    }

    .nav-links a {
      color: var(--text);
      text-decoration: none;
      font-size: 1rem;
      font-family: 'Cinzel', serif;
      font-weight: 600;
      transition: .3s;
    }

    .nav-links a:hover {
      color: var(--gold-light);
      text-shadow: 0 0 8px rgba(236, 214, 154, 0.4);
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
      padding: 140px 20px 80px;
      position: relative;
      overflow: hidden;
      border-bottom: 3px double var(--border); /* Borda dupla estilo heráldico */
    }

    .hero::before {
      content: "";
      position: absolute;
      width: 800px;
      height: 800px;
      background: radial-gradient(circle, rgba(197, 160, 89, 0.05), transparent 70%);
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
      font-size: clamp(3rem, 7vw, 6rem);
      line-height: 1;
      letter-spacing: 2px;
      color: var(--parchment);
      margin-bottom: 25px;
      text-shadow: 3px 3px 0px #000, 0 0 30px rgba(197, 160, 89, 0.2);
    }

    .hero h1 span {
      display: block;
      color: var(--gold);
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
      font-size: 1.25rem;
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
      background: var(--bg-light);
      color: var(--gold-light);
      border-color: var(--gold);
      box-shadow: 0 4px 15px rgba(0,0,0,0.6);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      background: var(--gold);
      color: var(--bg);
      box-shadow: 0 6px 20px rgba(197, 160, 89, 0.3);
    }

    .btn-secondary {
      color: var(--text);
      background: transparent;
      border-color: var(--border);
    }

    .btn-secondary:hover {
      border-color: var(--gold-light);
      color: var(--gold-light);
      background: rgba(44, 30, 17, 0.4);
    }

    /* =========================
       SEÇÕES
    ========================= */

    section {
      padding: 100px 6%;
      position: relative;
    }

    /* Divisor sutil entre seções */
    section:not(:last-of-type)::after {
      content: "❧ ❖ ☙"; /* Ornamento medieval */
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      color: var(--border);
      font-size: 1.5rem;
      letter-spacing: 10px;
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

    @media (max-width: 768px) {
      .lore { grid-template-columns: 1fr; }
    }

    .lore-text h3 {
      font-family: 'Cinzel', serif;
      color: var(--gold-light);
      font-size: 1.8rem;
      margin-bottom: 18px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 8px;
    }

    .lore-text p {
      color: var(--text);
      margin-bottom: 16px;
      text-align: justify;
    }

    .quote {
      border-left: 3px solid var(--gold);
      background: rgba(44, 30, 17, 0.3);
      padding: 15px 20px;
      margin-top: 25px;
      color: var(--parchment);
      font-style: italic;
    }

    .castle {
      min-height: 390px;
      border: 2px solid var(--border);
      background:
        linear-gradient(to top, rgba(26,18,11,1), transparent),
        radial-gradient(circle at 50% 40%, rgba(44, 30, 17, 0.8), transparent 60%),
        #110b07;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      box-shadow: inset 0 0 40px #000;
    }

    .castle::before {
      content: "🏰";
      font-size: 10rem;
      filter: sepia(0.5) drop-shadow(0 0 20px rgba(0,0,0,0.8));
      margin-bottom: 45px;
      opacity: .6;
    }

    /* =========================
       CARDS / ESCOLA
    ========================= */

    .cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
    }

    @media (max-width: 900px) {
      .cards { grid-template-columns: 1fr; }
    }

    .card {
      padding: 35px 30px;
      background: var(--card);
      border: 2px solid var(--border);
      box-shadow: 0 10px 20px rgba(0,0,0,0.4);
      transition: .35s;
      position: relative;
    }

    /* Cantoneiras decorativas simulando metal nos cards */
    .card::before {
      content: "";
      position: absolute;
      top: 5px; left: 5px; width: 10px; height: 10px;
      border-top: 2px solid var(--gold); border-left: 2px solid var(--gold);
      opacity: 0.5;
    }

    .card::after {
      content: "";
      position: absolute;
      bottom: 5px; right: 5px; width: 10px; height: 10px;
      border-bottom: 2px solid var(--gold); border-right: 2px solid var(--gold);
      opacity: 0.5;
    }

    .card:hover 