import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Sun, Moon } from 'lucide-react';
import { IsatecLogo } from '@assets/IsatecLogo';
import { Input } from '@components/ui/Input';
import { useTheme } from '@hooks/useTheme';
import { loginSchema, type LoginFormData } from '@schemas/login.schema';

export function LoginPage() {
    const { theme, toggleTheme } = useTheme();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    function onSubmit(data: LoginFormData) {
        console.log('Login:', data);
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <button
                onClick={toggleTheme}
                aria-label="Alternar tema"
                className="fixed top-4 right-4 p-2 rounded-full text-foreground-secondary hover:text-foreground hover:bg-card-border/40 transition-colors"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="w-full max-w-[440px] bg-card border border-card-border rounded-2xl shadow-card px-10 pt-10 pb-3">
                <div className="flex justify-center mb-7">
                    <IsatecLogo size={96} />
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-title text-foreground">Bem-vindo</h1>
                    <p className="text-subtitle text-foreground-secondary mt-1">
                        Faça login na sua conta
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-3">
                    <Input
                        label="E-mail"
                        type="email"
                        placeholder="seu@email.com"
                        autoComplete="email"
                        error={errors.email?.message}
                        {...register('email')}
                    />

                    <div className="flex flex-col gap-1">
                        <Input
                            label="Senha"
                            type="password"
                            placeholder="••••••••"
                            autoComplete="current-password"
                            error={errors.password?.message}
                            {...register('password')}
                        />

                        <div className="flex justify-end mt-1">
                            <a
                                href="#"
                                className="text-body text-primary hover:text-primary-hover transition-colors"
                            >
                                Esqueceu a senha?
                            </a>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary-hover disabled:opacity-60 text-primary-foreground font-semibold text-body py-3 rounded-lg transition-colors mt-1"
                    >
                        {isSubmitting ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>

                <p className="text-center text-caption text-foreground-muted mt-8">
                    © {new Date().getFullYear()} Isatec Sistemas e Consultoria
                </p>
            </div>
        </div>
    );
}
