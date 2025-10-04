#!/bin/bash

# Script de Deploy para GitHub Pages
# Para Linux, macOS e Git Bash no Windows

echo "=== Iniciando processo de deploy para GitHub Pages ==="

# Verificar se está em um repositório git
if [ ! -d .git ]; then
    echo "Erro: Este diretório não é um repositório git!"
    echo "Execute 'git init' primeiro."
    exit 1
fi

# Fazer build do projeto
echo "Construindo o projeto..."
npm run build

if [ $? -ne 0 ]; then
    echo "Erro ao fazer build do projeto!"
    exit 1
fi

echo "Build concluído com sucesso!"

# Navegar para a pasta dist
cd dist

# Inicializar git na pasta dist
git init
git add -A
git commit -m 'Deploy para GitHub Pages'

# Fazer push para o branch gh-pages
echo "Fazendo deploy para GitHub Pages..."
git push -f git@github.com:SEU_USUARIO/SEU_REPOSITORIO.git main:gh-pages

echo "=== Deploy concluído com sucesso! ==="
echo "Acesse seu site em: https://SEU_USUARIO.github.io/SEU_REPOSITORIO/"
