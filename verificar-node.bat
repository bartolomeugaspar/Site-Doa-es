@echo off
echo ========================================
echo Verificando instalacao do Node.js...
echo ========================================
echo.

node --version
if %errorlevel% neq 0 (
    echo [ERRO] Node.js nao esta instalado!
    echo.
    echo Por favor, instale o Node.js:
    echo 1. Acesse: https://nodejs.org/
    echo 2. Baixe a versao LTS
    echo 3. Execute o instalador
    echo 4. Reinicie o terminal
    pause
    exit /b 1
)

echo Node.js: OK
echo.

npm --version
if %errorlevel% neq 0 (
    echo [ERRO] NPM nao esta instalado!
    pause
    exit /b 1
)

echo NPM: OK
echo.
echo ========================================
echo Tudo pronto! Voce pode executar:
echo npm install
echo npm run dev
echo ========================================
pause
