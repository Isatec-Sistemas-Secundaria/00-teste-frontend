import z from "zod";

export const loginSchema = z.object({
  email: z.email("Entre com um email válido").trim().nonempty("O email é obrigatório"),
  password: z.string().trim().min(6, "A senha deve ter ao menos 6 caracteres").nonempty("A senha é obrigatória"),
})

export type LoginData = z.infer<typeof loginSchema>