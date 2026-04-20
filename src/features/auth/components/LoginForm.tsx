import Header from "../../../components/header/Header";

function LoginForm() {
  return (
    <div className="theme-card flex flex-col min-w-[20vw] gap-4 rounded-2xl px-10 transition-colors">

    <Header/>


      <label htmlFor="user-email">
        <p className="theme-label mb-2 text-sm font-medium">E-mail</p>
        <input className="theme-input" id="user-email" type="text" placeholder="seu@email.com" />
      </label>

      <label htmlFor="user-password">
        <p className="theme-label mb-2 text-sm font-medium">Senha</p>
        <input className="theme-input" id="user-password" type="password" placeholder="Sua melhor senha" />
      </label>

      <a href="" className="theme-link flex items-center justify-end font-light hover:underline">
        Esqueceu sua senha?
      </a>
      <button className="theme-button mb-5 rounded-lg py-3 text-xl" type="submit">
        Entrar
      </button>

      <p className="flex items-center justify-center text-sm font-light text-(--text-muted)">© 2026 Isatec Sistemas e Consultoria</p>
    </div>
  );
}

export default LoginForm;
