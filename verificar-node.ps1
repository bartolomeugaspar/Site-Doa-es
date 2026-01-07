# Script de Verificação e Instalação - Node.js

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Verificando Node.js..." -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Verificar se Node.js está instalado
try {
    $nodeVersion = node --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Node.js instalado: $nodeVersion" -ForegroundColor Green
    }
} catch {
    Write-Host "✗ Node.js NÃO está instalado!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Como instalar:" -ForegroundColor Yellow
    Write-Host "1. Acesse: https://nodejs.org/" -ForegroundColor White
    Write-Host "2. Baixe a versão LTS (recomendada)" -ForegroundColor White
    Write-Host "3. Execute o instalador .msi" -ForegroundColor White
    Write-Host "4. Reinicie o PowerShell" -ForegroundColor White
    Write-Host ""
    Write-Host "Após instalar, execute este script novamente." -ForegroundColor Yellow
    exit 1
}

# Verificar NPM
try {
    $npmVersion = npm --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ NPM instalado: $npmVersion" -ForegroundColor Green
    }
} catch {
    Write-Host "✗ NPM não encontrado!" -ForegroundColor Red
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Sistema pronto!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Próximos passos:" -ForegroundColor Yellow
Write-Host "1. npm install          (instalar dependências)" -ForegroundColor White
Write-Host "2. npm run dev          (executar em desenvolvimento)" -ForegroundColor White
Write-Host ""
