import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
    { ignores: ['dist', 'node_modules'] },
    js.configs.recommended,
    {
        files: ['vite.config.ts'],
        languageOptions: {
            parser: tsParser,
            globals: { ...globals.node },
        },
        plugins: { '@typescript-eslint': tsPlugin, prettier },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            'prettier/prettier': 'error',
        },
    },
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
            globals: { ...globals.browser },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            react: reactPlugin,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'react/react-in-jsx-scope': 'off',
            'prettier/prettier': 'error',
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        },
        settings: {
            react: { version: 'detect' },
        },
    },
];
