import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginSchema = z.object({
  email: z.email({ error: "Por favor digite um email válido." }),
  senha: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/gm,
      "Sua senha deve conter:\n1 Letra maiúscula\n1 Letra minúscula\n1 Caractere Especial\n1 Número.",
    ),
});

type LoginType = z.infer<typeof LoginSchema>;

const LoginFormHook = () => {
  const methods = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });

  return { ...methods };
};

export { LoginFormHook };
