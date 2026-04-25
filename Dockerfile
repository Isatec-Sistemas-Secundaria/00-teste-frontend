# Para rodar com Docker
# FROM oven/bun:1.3

# Para rodar com Podman
FROM docker.io/oven/bun:1.3

WORKDIR /app
COPY . .
RUN bun install --frozen-lockfile


EXPOSE 5173
CMD ["bun", "run", "dev", "--host"]
