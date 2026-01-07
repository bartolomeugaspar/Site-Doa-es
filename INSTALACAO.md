# 🚀 Guia de Instalação e Execução

## ⚠️ Pré-requisito: Node.js

O Node.js é necessário para executar este projeto. Se você recebeu o erro "node não é reconhecido", siga os passos abaixo:

### 📥 Instalando o Node.js no Windows

#### **Método 1: Download Direto (Recomendado)**

1. **Acesse o site oficial:**
   - Abra: https://nodejs.org/
   
2. **Baixe a versão LTS:**
   - Clique no botão verde "LTS" (Long Term Support)
   - Versão recomendada: **20.x** ou superior
   - O arquivo será algo como: `node-v20.x.x-x64.msi`

3. **Execute o instalador:**
   - Dê duplo clique no arquivo `.msi` baixado
   - Clique em "Next" → "Next" → "Next"
   - ✅ **IMPORTANTE:** Marque "Automatically install the necessary tools"
   - Clique em "Install"
   - Aguarde a instalação (pode levar 2-5 minutos)

4. **Reinicie o terminal:**
   - ❌ Feche completamente o PowerShell atual
   - ✅ Abra um **NOVO** PowerShell
   - Navegue de volta para a pasta do projeto:
   ```powershell
   cd "C:\Users\barto\OneDrive\Documentos\Site-Doa-es"
   ```

5. **Verifique a instalação:**
   ```powershell
   node --version
   npm --version
   ```
   
   Você deve ver algo como:
   ```
   v20.11.0
   10.2.4
   ```

---

#### **Método 2: Winget (Windows 11)**

Se você tem Windows 11, pode usar o winget:

```powershell
winget install OpenJS.NodeJS.LTS
```

Depois reinicie o PowerShell.

---

#### **Método 3: Chocolatey**

Se você já usa Chocolatey:

```powershell
choco install nodejs-lts
```

---

## 🎯 Após Instalar o Node.js

### 1️⃣ **Verificar Instalação**

Execute o script de verificação:

```powershell
.\verificar-node.ps1
```

Ou manualmente:
```powershell
node --version
npm --version
```

### 2️⃣ **Instalar Dependências do Projeto**

```powershell
npm install
```

Isso vai instalar todas as bibliotecas necessárias (~500MB). Pode levar alguns minutos.

### 3️⃣ **Configurar Banco de Dados (Opcional para testes)**

Para testar sem banco de dados, o site funcionará com dados mockados. 

Para usar banco de dados real:
- Instale MongoDB localmente OU
- Crie conta gratuita no MongoDB Atlas (https://mongodb.com/atlas)
- Configure a variável `MONGODB_URI` no arquivo `.env.local`

### 4️⃣ **Executar o Projeto**

```powershell
npm run dev
```

Você verá:
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Ready in X.Xs
```

### 5️⃣ **Acessar o Site**

Abra seu navegador em: **http://localhost:3000**

---

## 🛠️ Comandos Úteis

```powershell
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Compilar para produção
npm run build

# Executar versão de produção
npm start

# Verificar erros de código
npm run lint
```

---

## ❌ Problemas Comuns

### "node não é reconhecido"
- ✅ Certifique-se de ter **reiniciado o PowerShell** após instalar
- ✅ Verifique se o Node.js está no PATH do sistema
- ✅ Tente abrir o PowerShell como Administrador

### "npm install" falha
- Execute como Administrador
- Limpe o cache: `npm cache clean --force`
- Delete a pasta `node_modules` e tente novamente

### Erro de permissão no PowerShell
```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Porta 3000 já em uso
```powershell
# Use outra porta
npm run dev -- -p 3001
```

---

## 📞 Ajuda Adicional

Se encontrar problemas:
1. Verifique se tem Windows 10/11 atualizado
2. Execute o PowerShell como Administrador
3. Verifique sua conexão com a internet (para baixar dependências)

---

## ✨ Estrutura do Projeto

Após a instalação bem-sucedida, você terá:

```
Site-Doa-es/
├── node_modules/         ← Dependências (criado após npm install)
├── app/                  ← Páginas do site
├── components/           ← Componentes React
├── lib/                  ← Utilitários
├── models/               ← Modelos de dados
├── public/               ← Arquivos estáticos
├── package.json          ← Configuração do projeto
└── README.md             ← Este arquivo
```

---

**Desenvolvido com 💚 para transformar vidas.**
