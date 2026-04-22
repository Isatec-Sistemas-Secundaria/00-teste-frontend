import Button from "../../../../common/components/ui/Button"
import { Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter } from "../../../../common/components/ui/Card"
import Input from "../../../../common/components/ui/Input"
import useLogin from "../../hooks/useLogin"
import Logo from "/logo_monocrome.png"

export default function FormLogin() {
  const { isLoading, handleSubmit, register, formState:{errors}, onSubmit, isSuccess, isError } = useLogin()

  return (
    <Card className="max-w-105">
      <CardHeader>
        <img src={Logo} alt="Isatec Logo" className="w-20 h-20 my-10 m-auto bg-(--accent-bg) dark:bg-(--card) rounded-full p-1" />
        <CardTitle>Bem-vindo</CardTitle>
        <CardDescription>Faça login na sua conta</CardDescription>
      </CardHeader>
      <CardBody>
        <form  className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="w-full mb-1 text-(--fg)/70 flex flex-col gap-1">
            <span className="self-start text-[13px] ">E-mail</span>
            <Input placeholder="seu@email.com" type="email" id="email" {...register("email")} disabled={isLoading || isSuccess} />
            {errors.email && <span className="text-(--danger) text-sm mt-1 text-left">{errors.email.message}</span>}
          </label>
          <label htmlFor="password" className="w-full self-start mb-1 text-(--fg)/70 flex flex-col gap-1">
            <span className="self-start text-[13px]">Senha</span>
            <Input placeholder="••••••••" type="password" id="password" {...register("password")}
              className="text-lg tracking-widest placeholder:font-semibold" disabled={isLoading || isSuccess} />
            {errors.password && <span className="text-(--danger) text-sm mt-1 text-left">{errors.password.message}</span>}
          </label>
          <a href="#" className="ml-auto text-(--accent) text-[14px] hover:underline my-2">
            Esqueceu a senha?
          </a>
          <Button type="submit" disabled={isLoading || isSuccess} className="w-full">
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
        {isSuccess && (
          <span className="bg-(--success) text-center text-(--bg) text-base mt-10 py-3 px-4 rounded-lg">
            Login bem sucedido!
          </span>
        )}
        {isError && (
          <span className="bg-(--danger) text-center text-(--bg) text-base mt-10 py-3 px-4 rounded-lg">
            Credenciais inválidas!
          </span>
        )}
      </CardBody>
      <CardFooter>&copy; 2026 Isatec Sistemas e Consultoria</CardFooter>
    </Card>
  )
}