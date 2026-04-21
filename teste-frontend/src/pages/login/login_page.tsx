import { useContext, useState } from "react"

import "./login.css"
import LogoWhite from "../../assets/logo-white.svg";
import LogoDark from "../../assets/logo-dark.svg";
import LoadingIcon from "../../assets/loading-icon.svg";
import { ThemeContext } from "../../context/ThemeContext";
import { LightDarkButton } from "../../components/LightDarkButton/LightDarkButton";
import { FormInputField } from "../../components/FormInputField/FormInputField";
import { validateEmail, validatePassword } from "../../utils/form_validations";


export function LoginPage(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const [sending, setSending] = useState(false)
    const themeContext = useContext(ThemeContext)

    // O App não envia o formulário então essa função é só pra mostrar o loading icon caso ele fosse enviado.
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Executa as validações da utils
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        if (emailError || passwordError) {
            setErrors({ email: emailError, password: passwordError });
            return;
        }

        // Se chegou aqui, está tudo certo
        setErrors({});
        setSending(true);
        setTimeout(() => {
        setSending(false);
      }, 2000);
    };

    

    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-(--bg1) relative">
        <div className="absolute top-10 right-10">
          <LightDarkButton
            context = {themeContext}
          />
        </div>
      
        <div className="w-full max-w-md">
          
          {/* Card do Login*/}
          <div className="
            rounded-xl pr-8 pl-8 pt-8 max-sm:pr-4 max-sm:pl-4 max-sm:pt-4 
            bg-(--bg2) login-card-shadow text-(--text)
          ">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Imagem*/}
              <div className="w-full flex items-center justify-center p-4">
                <img src={themeContext?.theme.type =="light"? LogoWhite : LogoDark} width={92} alt="Logo" />
              </div>

              {/* Título e subtítulo  */}
              <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-2xl font-semibold">Bem-vindo</h1>
                <p className="text-">Faça login na sua conta</p>
              </div>

              {/* Campo de Email */}
              <FormInputField
                id="email"
                type="email"
                value={email}
                onChange={setEmail}
                themeContext={themeContext}
                error={errors.email}
              />

              {/* Campo de senha */}
              <FormInputField
                id="password"
                type="password"
                value={password}
                onChange={setPassword}
                themeContext={themeContext}
                error={errors.password}
              />

              <div className="flex items-center justify-between">
                <div className="flex flex-row items-center gap-2">                  
                </div>
                  <a href="#" className="text-[16px] font-semibold
                    text-(--buttonbg) hover:underline transition-colors">
                    Esqueceu a senha?
                  </a>
              </div>

              <button
                type="submit"
                className=" text-white rounded-lg p-2 bg-(--buttonbg) cursor-pointer 
                  transition-all duration-300 ease-in-out 
                  hover:-translate-y-1 hover:brightness-110 hover:shadow-xl 
                  active:translate-y-0
                ">
                {sending == false?
                  "Entrar"
                  :
                  <div className="w-full flex items-center justify-center">
                    <img src={LoadingIcon} alt="LoadingIcon" />
                  </div>
                  }
              </button>

            </form>

            <br />
            <p className="text-center text-gray-400 text-[14px] pb-1">
              © 2026 Isatec Sistemas e Consultoria
            </p>

          </div>
      </div>
    </div>
    )
}