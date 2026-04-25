## Tecnologias utilizadas

As tecnologias utilizadas neste projeto foram as tecnologias das quais já possuo familiaridade (com excessão do Zustand, que anteriormente utilizava Context API):

- Bun (JavaScript Runtime)
- React (Vite)
- Tailwind
- Zod
- React Hook Form
- Zustand

`Optei por não usar biblioteca de componentes, aumentar o bundle desnecessariamente, segui um padrão similar ao ShadCN/Radix UI`

### Detalhes a se considerar

Primeiramente o projeto tem um Dockerfile na raiz, o qual é bem simples, não achei necessário configurar um HTTP-Server como NGINX pra servir os arquivos estáticos pra algo tão trivial. Ele está pronto para rodar com Podman (alternativa ao Docker), basta alternar para a opção que está acima caso utilize o Docker.

Utilizei uma função assíncrona com setInterval para simular uma chamada de API para o login, como não havia nada além da página de login não senti necessidade de setar algum tipo de roteamento.

Coloquei um Favicon também, detalhe.

Utilizei o React Hook Form, porém como eram componentes simples achei desnecessário utilizar Controlled Components, mas está validado com o Zod, mensagens de erro corretamente.

Não foi utilizada IA, apenas pra gerar alguma parte ou outra de tailwind e perguntar onde podia mudar algo pra ficar mais próximo das imagens, pedi apenas alguns "pitacos" nisso, por isso também não ficou tão similar, mas achei o resultado satisfatório.

Foquei maior parte na usabilidade, logo adicionei o botão superior esquerdo de "dark/light mode" facilita o teste da feature.
Apesar do botão existir, o arquivo em './lib/themeState.ts' possui o código onde primeiramente é buscado o tema do sistema, caso possua esta informação esta será armazenada no local storage. Portanto fica aqui o aviso, este software salva informações em sua máquina, o modo do tema escolhido, portanto esteja ciente, não há pop-up este é o aviso válido.

## Como utilizar
### Bun Runtime
Dentro da pasta raíz, basta seguir os passos:
#### Instalar dependências:
```bun install```
#### Iniciar modo de Desenvolvimento:
```bun run dev```

### Podman/Docker
Dentro da pasta raíz, basta seguis os passos:
#### Build da imagem:
```podman build -f Dockerfile -t isatec```
#### Iniciar a imagem:
```podman run -p 5173:5173 isatec:latest```


## FIM
Espero que gostem, está aqui, caso tenham críticas construtivas estou aberto a ouvir.
Discord: hermes_jr
