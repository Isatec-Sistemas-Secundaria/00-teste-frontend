# RESULTADO FINAL

**Tema claro:**
![Tema claro](./imagens/resultado/Resultado-light.png)

**Tema Escuro:**
![Tema escuro](./imagens/resultado/Resultado-dark.png)

# COMO RODAR O PROJETO

## Opção normal

Para rodar o projeto (a versão do node é a 22.22.0 mas qualquer uma acima de 20 deve funcionar sem problemas)
se tiver ou nvm use o comando abaixo, se não tiver apenas instale a versão certa do node.

```bash
nvm install 22.22.0
```
### no diretório do projeto.

Para instalar as dependencias:
```bash
npm install
```

```bash
npm run dev
```
Com isso o projeto estará rodando em `http://localhost:5173/`.



## Opção Docker

### se tiver o docker na máquina rode os seguintes comandos no diretório do projeto:


```bash
docker build -t test-front .
```

```bash
docker run -d -p 8080:80 test-front
```

Com isso o projeto estará rodando em `http://localhost:8080/`.



## Opção Docker e Makefile

### se tiver o Docker e Makefile na máquina rode apenas o seguinte comando no diretório do projeto:

```bash
make do-it-all
```

Com isso o projeto estará rodando em `http://localhost:8080/`.



# EXPLICANDO O PROJETO

O projeto foi feito em Vite React.

Eu usei tailwind para maior agilidade no desenvolvimento mas ainda uso arquivos css para partes com um css bem mais robusto Ex: a parte do botão de switch light e dark mode.

Tanto o tailwind quanto a font exigida foram instaladas nas dependencias do node_modules evitando requests desnecessárias para bibliotecas de fora.

Eu uso um hook de useContext para trabalhar com o tema de dark e light mode.
Eu prefiro dessa forma pois assim vc tem as cores, o theme já definido em um lugar e apenas reutiliza em todas as páginas (eu sei que esse app só tem 1 página mas desse jeito é melhor para um aplicativo que irá crescer)

O local Storage serve apenas como uma forma de guardar a preferência (light ou dark) para visitas futuras.

Light mode é o valor default da aplicação, se o localStorage.getItem("theme") não tiver nada ou algum valor diferente de "light" ou "dark" ele vai definir automaticamente o light mode.


### discord: rodrigo9756 ou rodrigo9756#3503
### E-mail: rodrigotmt89@gmail.com