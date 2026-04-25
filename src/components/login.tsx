import * as Logo from "../../imagens/logo_monocrome.png";
import { Input } from "./input";
import { Label } from "./label";
import { Button } from "./button";
import { Error } from "./error";
import { LoginFormHook } from "../hooks/login-form";
import { useState } from "react";
import { LoginRequest } from "../api/login-request";

function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { handleSubmit, formState, register } = LoginFormHook();
  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    const res = await LoginRequest();
    console.log(res);
    console.log(data);
    setIsLoading(false);
    //TODO: redirecionar para o home ou dashboard
  });
  return (
    <>
      <section className="bg-(--primary) m-0 max-w-[440px]  max-h-[600px] h-fit w-full justify-between rounded-3xl sh flex flex-col items-center py-14 px-14 pb-4">
        <div className="flex flex-col gap-14 w-full">
          <img src={Logo.default} className="h-26 m-auto logo" />
          <div className="w-full flex flex-col gap-1">
            <h2 className="w-full">Bem-vindo</h2>
            <span className="text-(--text-h) text-lg">
              Faça login na sua conta
            </span>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col justify-center m-0"
        >
          <div className="w-full m-0">
            <Label>E-mail</Label>
            <Input {...register("email")} placeholder="seu@email.com" />
            <Error>{formState.errors.email?.message}</Error>
          </div>
          <div className="w-full m-0">
            <Label>Senha</Label>
            <Input
              {...register("senha")}
              placeholder="••••••••"
              type="password"
            />
            <Error>{formState.errors.senha?.message}</Error>
          </div>

          <div className="text-right w-full my-6">
            <a href="#" className="text-lg text-(--accent) hover:underline m-6">
              Esqueceu a senha?
            </a>
          </div>
          <Button type="submit" className="w-full" isLoading={isLoading}>
            Entrar
          </Button>
        </form>
        <p className="text-(--text) text-sm sticky bottom-0 w-full mt-8">
          © 2026 Isatec Sistemas e Consultoria
        </p>
      </section>
    </>
  );
}

export { Login };
