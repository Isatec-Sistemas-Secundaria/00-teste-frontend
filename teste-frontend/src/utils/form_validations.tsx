
export const validateEmail = (email: string): string => {
    if (!email) return "O e-mail é obrigatório.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Insira um e-mail válido.";
    return "";
};

export const validatePassword = (password: string): string => {
    if (!password) return "A senha é obrigatória.";
    if (password.length < 6) return "A senha deve ter pelo menos 6 caracteres.";
    const hasLetter = /[a-zA-Z]/.test(password);
    if (!hasLetter) {
        return "A senha deve conter pelo menos uma letra.";
    }
    const hasNumber = /[0-9]/.test(password);
    if (!hasNumber) {
        return "A senha deve conter pelo menos um número.";
    }
    return "";
};