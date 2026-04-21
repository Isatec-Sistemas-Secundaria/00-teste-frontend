## Bem vindos!

Estamos felizes por você estar interessado(a) em integrar nosso time!

Como o número de interessados foi muito grande, vamos aplicar um pequeno teste, bem simples. Com intuito de filtrar os candidatos que só mandaram mensagem por mandar, dos realmente interessados.

## Não se preocupe

Não vamos te pedir muito, o teste consiste apenas em fazer uma tela de login. Simples né? Mas você já vai mostrar pra gente que consegue seguir um fluxo real de trabalho. Com uma demanda real, e material de apoio real.

## Como o teste vai funcionar

Você vai criar um fork desse repo, vai executar a demanda, e quando estiver pronto, vai abrir um pr. Isso vai nós indicar que você acabou e que podemos analisar o seu resultado. Simples né?

## A Demanda

Como mencionado antes você só precisa criar uma tela de login. Aqui está ela:

**Tema claro:**
![Tema claro](./imagens/00-login/Tela-Claro-naoLogado.jpg)

**Tema Escuro:**
![Tema escuro](./imagens/00-login/Tela-Escuro-naoLogado.jpg)

> Todas as imagens estão na pasta 'imagens/' para consulta.

Pode usar a tecnologia que estiver confortável para esse teste.

### Informações complementares a demanda

Tipografia:

- Nunito - font principal
- fonts secundarias não se aplicam a tela de login

## O que vai ser avaliado

- similaridade do resultado entregue com as imagens da demanda.
- performance.
- qualidade do código.
- Experiência do usuário (UX).
- Interatividade.

## Entrega

Antes de abrir o pr para sinalizar que finalizou o teste, modifique esse README.md Com seu discord para entrarmos em contato. E com uma breve explicação do seu trabalho como: tecnologias usadas, o motivo por trás do uso dessas tecnologias e etc. Explicação do projeto feita por IA vai ser desconsiderada, é necessário que você entenda o que está fazendo.

Também adicione uma sessão explicando como executar seu projeto caso ele não seja só arquivos estáticos com: instalação de dependências, build e etc.

## Entrega — Matheus Ribeiro

**Discord:** \_Matheus#7920  
**GitHub:** https://github.com/MatheusSlvRibeiro/

### Sobre o projeto

Stack: **React + TypeScript + Vite + Tailwind CSS**

**Tailwind:** Neste projeto utilizei Tailwind por praticidade e otimização de tempo de desenvolvimento. Nas configurações temos `class` + CSS custom properties: tokens de cor definidos uma vez em `:root/.dark`, assim os componentes não precisam de prefixo `dark:` nas classes de cor.

**Fontsource** em vez de importar ou baixar manualmente no Google Fonts: fonte bundlada pelo Vite, sem requisição externa garantindo otimização pelo PageSpeed.

**Logo convertida de PNG (1.3MB) para WebP lossless (168KB):** mesmo formato suporta transparência e a conversão lossless garante zero perda de qualidade, com 87% de redução no tamanho.

**Zod schema:** valida o formulário com mensagens em PT-BR, garantindo consistência dos dados.

**Script anti-flash no `<head>`:** executado antes do React hidratar, lê o `localStorage` e o `prefers-color-scheme` do sistema operacional para aplicar o tema correto imediatamente, evita o efeito de piscar ao carregar a página.

**ESLint + Prettier + Husky:** lint-staged bloqueia commit se código fora do padrão, já garante consistência do código sem overhead de configuração de testes para uma única tela. O hook `pre-commit` roda o lint-staged automaticamente, qualquer commit com código fora do padrão é bloqueado antes de entrar no repositório.

**React-router-dom:** Usado para criar e organizar as rotas.

**Path aliases:** permite consistência em imports ao longo do projeto.

### Como executar

**Pré-requisito:** Node.js 18+

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## duvidas

Qualquer duvida pode perguntar diretamente na publicação: https://discord.com/channels/755483507698172045/1494423687233798267
