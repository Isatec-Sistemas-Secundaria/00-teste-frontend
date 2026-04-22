import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginData } from "../validators/login.schema";
import { useState } from "react";

export default function FormLogin() {
  /* normalmente faria com tanstack query para evitar todos esses estados manuais */
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  /* mock de login */
  const onSubmit = (data: LoginData) => {
    setIsLoading(true)
    setTimeout(() => {
      if(data.email === "admin@email.com" && data.password === "admin123") {
        console.log('Login bem sucedido', data);
        setIsLoading(false)
        setIsSuccess(true)
        setIsError(false)
      } else {
        console.error('Credenciais inválidas', data);
        setIsLoading(false)
        setIsSuccess(false)
        setIsError(true)
      }
    }, 2000)
  }

  return {
    ...form,
    onSubmit,
    isLoading,
    isSuccess,
    isError
  }
}
