import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@components': resolve(__dirname, './src/components'),
            '@pages': resolve(__dirname, './src/pages'),
            '@hooks': resolve(__dirname, './src/hooks'),
            '@contexts': resolve(__dirname, './src/contexts'),
            '@schemas': resolve(__dirname, './src/schemas'),
            '@routes': resolve(__dirname, './src/routes'),
            '@assets': resolve(__dirname, './src/assets'),
            '@app-types': resolve(__dirname, './src/types'),
        },
    },
});
