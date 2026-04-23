import { Button } from "./Button";
import { Footer } from "./Footer";
import { Input } from "./Input";

export function Form() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-50">
      <form className="w-full max-w-[450px] min-h-[550px] rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.20)] flex flex-col items-center pt-8 pb-4">
        
        <div className="bg-[#2563EA] w-[65px] h-[65px] rounded-full flex items-center justify-center shadow-xl mt-5">
          <img
            src="/src/images/icone.jpg"
            className="w-[45px] h-[45px] object-contain"
            alt=""
          />
        </div>

        <h1 className="text-2xl mt-10">Bem-vindo</h1>
        <p className="text-sm text-gray-500">Faça login na sua conta</p>

        <Input
          type="email"
          name="email"
          placeholder="seu@email.com"
          text="E-mail"
        />

        <Input
          type="password"
          placeholder="••••••••"
          name="senha"
          text="Senha"
        />

        <div className="flex justify-end w-full px-8 mt-5">
          <a className="text-[#2563EA] text-sm" href="">
            Esqueceu a senha?
          </a>
        </div>
        <Button />
        <Footer />
      </form>
    </div>
  );
}