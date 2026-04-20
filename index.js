<!DOCTYPE html>
<html lang="pt-BR" data-theme="light">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login — Isatax</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg:        #f0f2f5;
      --card-bg:   #ffffff;
      --card-shadow: 0 4px 24px rgba(0,0,0,0.08);
      --label:     #6b7280;
      --input-bg:  #ffffff;
      --input-border: #e5e7eb;
      --input-text: #111827;
      --text-main: #111827;
      --text-sub:  #6b7280;
      --link:      #3b5bdb;
      --btn-bg:    #3b5bdb;
      --btn-hover: #2f4ac7;
      --footer:    #9ca3af;
      --logo-fill: #3b5bdb;
      --logo-icon: #ffffff;
      --transition: 0.35s ease;
    }

    [data-theme="dark"] {
      --bg:        #0f1623;
      --card-bg:   #1e2636;
      --card-shadow: 0 4px 32px rgba(0,0,0,0.4);
      --label:     #8b97b0;
      --input-bg:  #28334a;
      --input-border: #2e3d58;
      --input-text: #e2e8f0;
      --text-main: #e2e8f0;
      --text-sub:  #8b97b0;
      --link:      #6b8cff;
      --btn-bg:    #4d6ef5;
      --btn-hover: #3b5bdb;
      --footer:    #4a5568;
      --logo-fill: transparent;
      --logo-icon: #e2e8f0;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--bg);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background var(--transition);
    }

    .card {
      background: var(--card-bg);
      border-radius: 16px;
      box-shadow: var(--card-shadow);
      padding: 40px 44px 32px;
      width: 100%;
      max-width: 380px;
      transition: background var(--transition), box-shadow var(--transition);
    }

    /* ── Logo ── */
    .logo-wrap {
      display: flex;
      justify-content: center;
      margin-bottom: 24px;
    }

    .logo-btn {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      border-radius: 50%;
      display: flex;
    }

    .logo-btn svg {
      width: 56px;
      height: 56px;
      transition: transform 0.25s ease;
    }

    .logo-btn:hover svg { transform: scale(1.06); }
    .logo-btn:active svg { transform: scale(0.96); }

    /* logo switching */
    .logo-light { display: block; }
    .logo-dark  { display: none;  }

    [data-theme="dark"] .logo-light { display: none;  }
    [data-theme="dark"] .logo-dark  { display: block; }

    /* ── Heading ── */
    .heading { text-align: center; margin-bottom: 28px; }

    .heading h1 {
      font-size: 1.35rem;
      font-weight: 600;
      color: var(--text-main);
      transition: color var(--transition);
    }

    .heading p {
      font-size: 0.85rem;
      color: var(--text-sub);
      margin-top: 4px;
      transition: color var(--transition);
    }

    /* ── Form ── */
    .field { margin-bottom: 16px; }

    label {
      display: block;
      font-size: 0.78rem;
      font-weight: 500;
      color: var(--label);
      margin-bottom: 6px;
      transition: color var(--transition);
    }

    input {
      width: 100%;
      padding: 10px 14px;
      border: 1.5px solid var(--input-border);
      border-radius: 8px;
      background: var(--input-bg);
      color: var(--input-text);
      font-family: inherit;
      font-size: 0.875rem;
      outline: none;
      transition: border-color 0.2s, background var(--transition), color var(--transition);
    }

    input::placeholder { color: var(--label); }

    input:focus { border-color: var(--btn-bg); }

    .forgot {
      display: block;
      text-align: right;
      font-size: 0.78rem;
      color: var(--link);
      text-decoration: none;
      margin-top: 8px;
      transition: color var(--transition);
    }

    .forgot:hover { text-decoration: underline; }

    .btn {
      display: block;
      width: 100%;
      padding: 12px;
      margin-top: 24px;
      background: var(--btn-bg);
      color: #fff;
      font-family: inherit;
      font-size: 0.9rem;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.2s;
    }

    .btn:hover { background: var(--btn-hover); }
    .btn:active { transform: scale(0.98); }

    footer {
      text-align: center;
      font-size: 0.72rem;
      color: var(--footer);
      margin-top: 24px;
      transition: color var(--transition);
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo-wrap">
      <button class="logo-btn" id="themeToggle" title="Alternar tema" aria-label="Alternar tema claro/escuro">
        <img class="logo-light" id="imgLight" src="" alt="Logo modo claro"  width="56" height="56" style="border-radius:50%;transition:transform 0.25s ease"/>
        <img class="logo-dark"  id="imgDark"  src="" alt="Logo modo escuro" width="56" height="56" style="border-radius:50%;transition:transform 0.25s ease"/>
      </button>
    </div>

    <div class="heading">
      <h1>Bem-vindo</h1>
      <p>Faça login na sua conta</p>
    </div>

    <div class="field">
      <label for="email">E-mail</label>
      <input type="email" id="email" placeholder="seu@email.com" autocomplete="email" />
    </div>

    <div class="field">
      <label for="senha">Senha</label>
      <input type="password" id="senha" value="••••••••" autocomplete="current-password" />
      <a href="#" class="forgot">Esqueceu a senha?</a>
    </div>

    <button class="btn">Entrar</button>

    <footer>© 2026 Isatax Sistemas e Consultoria</footer>
  </div>

  <script>
    /* ============================================================
       🖼️  CONFIGURAÇÃO DAS IMAGENS DO LOGO
       Substitua os valores abaixo pelas URLs das suas imagens.
       - LOGO_LIGHT → exibido no modo claro  (ex: logo azul)
       - LOGO_DARK  → exibido no modo escuro (ex: logo branco)
    ============================================================ */
    const LOGO_LIGHT = 'https://cdn.discordapp.com/attachments/1424049472421494938/1495814056098140170/647FED68-EB24-4B01-A800-7A4A1AE6EF4F.png?ex=69e79ce5&is=69e64b65&hm=90409a9102094c3e75db7a01bef905eef0b8619d383abd01cb8b523d447ac7be';
    const LOGO_DARK  = 'https://cdn.discordapp.com/attachments/1424049472421494938/1495812422680711186/603EF70E-369D-40A5-A519-BB317FCDA9DD.png?ex=69e79b60&is=69e649e0&hm=c48c8fd6dba371303852eec1d27d64a95c9f48f636eeed63d44e85a7453406f8';
    /* ========================================================== */

    document.getElementById('imgLight').src = LOGO_LIGHT;
    document.getElementById('imgDark').src  = LOGO_DARK;

    const toggle = document.getElementById('themeToggle');
    const html   = document.documentElement;

    toggle.addEventListener('click', () => {
      const isDark = html.getAttribute('data-theme') === 'dark';
      html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    });
  </script>
</body>
</html>
