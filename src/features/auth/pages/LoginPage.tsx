import LoginForm from "../components/LoginForm";
import ThemeToggle from "../../../components/theme/ThemeToggle";
import { useEffect, useState } from "react";

function LoginPage() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window === 'undefined') return 'light';

        const savedTheme = localStorage.getItem('frontEndLogin-theme');
        if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('frontEndLogin-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((current) => (current === 'light' ? 'dark' : 'light'));
    };

    return(
<div className="theme-shell flex h-screen w-screen items-center justify-center transition-colors">
    <div className="absolute right-6 top-6">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>

<LoginForm/>
</div>
)
}

export default LoginPage;