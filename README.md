# Isatec — Tela de Login

**Discord:** teuspdu7498

---

## Sobre o Projeto

Implementação da tela de login da Isatec, com suporte a **tema claro e escuro**, seguindo fielmente o design fornecido. O projeto foi desenvolvido com foco em qualidade de código, desempenho, fidelidade visual e experiência do usuário.

---

## Tecnologias Utilizadas

| Tecnologia | Motivo da escolha |
|---|---|
| **React 18** | Biblioteca moderna para construção de interfaces, com renderização eficiente e ecossistema sólido |
| **TypeScript** | Adiciona tipagem estática ao JavaScript, prevenindo erros em tempo de desenvolvimento e tornando o código mais legível e manutenível |
| **Tailwind CSS** | Permite estilização rápida e consistente diretamente no JSX, sem criar arquivos CSS separados. Facilita a manutenção e evita conflitos de estilos |
| **Vite** | Ferramenta de build extremamente rápida, com hot reload instantâneo durante o desenvolvimento e build otimizado para produção |
| **Context API** | Solução nativa do React para gerenciamento de estado global (tema), sem necessidade de bibliotecas externas como Redux |
| **Fonte Nunito** | Fonte especificada no briefing do projeto, carregada via Google Fonts |

---

## Funcionalidades

- ✅ Tema claro e escuro com alternância por botão (salva preferência no localStorage)
- ✅ Detecção automática do tema preferido do sistema operacional
- ✅ Validação de formulário com mensagens de erro em português
- ✅ Mostrar/ocultar senha
- ✅ Estado de carregamento no botão ao submeter
- ✅ Design responsivo (funciona em mobile, tablet e desktop)
- ✅ Acessibilidade (labels, aria-labels, navegação por teclado)
- ✅ Transições suaves entre temas

---

## Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 16 ou superior
- npm (vem junto com o Node.js)

### Instalação e execução

```bash
# 1. Clone o repositório (se ainda não fez)
git clone https://github.com/mathrodriguesdev-arch/00-teste-frontend.git
cd 00-teste-frontend

# 2. Instale as dependências
npm install

# 3. Rode em modo de desenvolvimento
npm run dev
```

Acesse **http://localhost:5173** no seu navegador.

### Build para produção

```bash
npm run build
npm run preview
```

---

## Estrutura do Projeto

```
src/
├── components/
│   └── ThemeToggle.tsx     # Botão de alternância de tema
├── contexts/
│   └── ThemeContext.tsx    # Gerenciamento global do tema
├── pages/
│   └── LoginPage.tsx       # Página de login completa
├── App.tsx                 # Componente raiz
├── main.tsx                # Ponto de entrada
└── index.css               # Estilos globais + Tailwind
```
