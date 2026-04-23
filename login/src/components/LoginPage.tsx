
import "./LoginPage.css" ;

import logo from '../assets/logo_monocrome.png';

interface LoginPageProps {
    dark: boolean
    onToggleDark: () => void
  }

export default function LoginPage({ dark, onToggleDark }: LoginPageProps) {
  return (
    <div className={`page ${dark ? 'dark' : ''}`}>
      <div className="card">

        <button className="dark-toggle" onClick={onToggleDark} title="Alternar tema">
          {dark ? '☀️' : '🌙'}
        </button>

       <div className="logo">
        <img src={logo} alt="Isatec logo" />
      </div>

        <h1 className="title">Bem-vindo</h1>
        <p className="subtitle">Faça login na sua conta</p>

        <div className="field">
          <label>E-mail</label>
          <input type="email" placeholder="seu@email.com" />
        </div>

        <div className="field">
          <label>Senha</label>
          <input type="password" placeholder="Digite a senha" />
        </div>

        <div className="forgot">
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button className="btn-entrar">Entrar</button>

        <p className="footer">© 2026 Isatec Sistemas e Consultoria</p>
      </div>
    </div>
  )
}