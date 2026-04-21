import { createContext } from 'react';
import type { Theme } from '@app-types/theme';

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);
