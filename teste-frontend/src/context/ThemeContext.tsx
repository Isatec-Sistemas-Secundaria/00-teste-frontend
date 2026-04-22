// ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeChoice = "light" | "dark";

type Theme = {
    type: ThemeChoice;
    colors: {
        bg1: string;
        bg2: string;
        text: string;
        buttonbg: string;
    };
};

export const lightTheme: Theme = {
    type: "light",
    colors: {
        bg1: "#F9FAFC",
        bg2: "#FFFFFF",
        text: "#000000",
        buttonbg: "#2563EA"
    }
};

export const darkTheme: Theme = {  
    type: "dark",
    colors: {
        bg1: "#111828",
        bg2: "#202938",
        text: "#FFFFFF",
        buttonbg: "#60A5F8"
  }
}


interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('theme');
        console.log(`saved ${saved}`)
        if (saved == "light")
            return lightTheme;        
        else if (saved == "dark")
            return darkTheme;    
        else
            return lightTheme;
        });

    const toggleTheme = () => {
        if(theme.type == "light"){
            setTheme(darkTheme);
        }
        else if(theme.type == "dark"){
            setTheme(lightTheme);
        }
        else{
            setTheme(lightTheme);
        }
    }

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--bg1", theme.colors.bg1);
        root.style.setProperty("--bg2", theme.colors.bg2);
        root.style.setProperty("--text", theme.colors.text);
        root.style.setProperty("--buttonbg", theme.colors.buttonbg);

        localStorage.setItem("theme", theme.type);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
  return context;
};