@echo off
REM Script de Deploy para GitHub Pages
REM Para Windows (CMD/PowerShell)

echo === Iniciando processo de deploy para GitHub Pages ===

REM Verificar se está em um repositório git
if not exist .git (
    echo Erro: Este diretorio nao e um repositorio git!
    echo Execute 'git init' primeiro.
    exit /b 1
)

REM Fazer build do projeto
echo Construindo o projeto...
call npm run build

if errorlevel 1 (
    echo Erro ao fazer build do projeto!
    exit /b 1
)

echo Build concluido com sucesso!

REM Navegar para a pasta dist
cd dist

REM Inicializar git na pasta dist
git init
git add -A
git commit -m "Deploy para GitHub Pages"

REM Fazer push para o branch gh-pages
echo Fazendo deploy para GitHub Pages...
git push -f https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git main:gh-pages

echo === Deploy concluido com sucesso! ===
echo Acesse seu site em: https://SEU_USUARIO.github.io/SEU_REPOSITORIO/

cd ..
