# 🤝 Site de Doações - Doar com Propósito

Um site moderno, acessível e emocionalmente envolvente para doações a instituições sociais (orfanatos, escolas comunitárias, centros de saúde, ONGs e projectos sociais).

## ✨ Características Principais

### 🎯 Funcionalidades
- ✅ Página inicial com histórias reais e imagens humanas
- ✅ Lista de instituições cadastradas com filtros
- ✅ Sistema de doações online (única ou recorrente)
- ✅ Transparência total com relatórios e gráficos
- ✅ Área do doador com perfil e histórico
- ✅ Painel administrativo completo
- ✅ Design mobile-first e acessível

### 🎨 Design
- Interface limpa e inspiradora
- Cores suaves (verde, azul, tons quentes)
- Tipografia moderna e legível
- Ícones emotivos e CTAs claros

### 🛠️ Tecnologias
- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, API Routes (Next.js)
- **Base de Dados**: MongoDB (Mongoose)
- **Animações**: Framer Motion
- **Gráficos**: Recharts
- **Ícones**: React Icons

## 🚀 Como Começar

### Pré-requisitos
- Node.js 18+ instalado
- MongoDB instalado localmente ou conta MongoDB Atlas

### Instalação

1. **Instalar dependências**:
```bash
npm install
```

2. **Configurar variáveis de ambiente**:
   - Renomear `.env.local` e configurar:
     - `MONGODB_URI`: URL do MongoDB
     - `NEXTAUTH_SECRET`: Chave secreta para autenticação
     - Configurar APIs de pagamento (Multicaixa, PayPay, etc.)

3. **Executar em desenvolvimento**:
```bash
npm run dev
```

4. **Acessar o site**:
   - Abrir [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
site-doacoes/
├── app/                        # Páginas e rotas (App Router)
│   ├── api/                   # API Routes
│   │   ├── donations/        # Endpoints de doações
│   │   ├── institutions/     # Endpoints de instituições
│   │   └── stats/            # Estatísticas
│   ├── admin/                # Painel administrativo
│   ├── doar/                 # Página de doações
│   ├── instituicoes/         # Lista de instituições
│   ├── perfil/               # Perfil do usuário
│   ├── transparencia/        # Página de transparência
│   ├── layout.tsx            # Layout principal
│   └── page.tsx              # Página inicial
├── components/                # Componentes React
│   ├── home/                 # Componentes da home
│   │   ├── Hero.tsx
│   │   ├── FeaturedStories.tsx
│   │   ├── FeaturedInstitutions.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── ImpactStats.tsx
│   │   └── CTA.tsx
│   └── layout/               # Componentes de layout
│       ├── Navbar.tsx
│       └── Footer.tsx
├── lib/                       # Utilitários
│   └── mongodb.ts            # Conexão MongoDB
├── models/                    # Modelos do banco de dados
│   ├── User.ts
│   ├── Institution.ts
│   └── Donation.ts
└── public/                    # Arquivos estáticos
```

## 🎨 Páginas Principais

### 🏠 Home (`/`)
- Hero section inspirador
- Estatísticas de impacto
- Histórias de transformação
- Instituições em destaque
- Como funciona
- CTA para doação

### 🏢 Instituições (`/instituicoes`)
- Listagem com filtros
- Busca por nome/categoria
- Cards informativos
- Progresso de metas

### 💝 Doar (`/doar`)
- Seleção de valor
- Doação única ou recorrente
- Métodos de pagamento
- Informações de benefícios

### 👤 Perfil (`/perfil`)
- Visão geral das doações
- Histórico completo
- Certificados
- Configurações

### 📊 Transparência (`/transparencia`)
- Estatísticas em tempo real
- Gráficos interativos
- Distribuição por categoria
- Atividades recentes

### 🔐 Admin (`/admin`)
- Dashboard administrativo
- Aprovação de instituições
- Gestão de doações
- Relatórios

## 🔌 API Endpoints

### Instituições
- `GET /api/institutions` - Listar instituições
- `POST /api/institutions` - Criar instituição
- `GET /api/institutions?category=Educação` - Filtrar por categoria
- `GET /api/institutions?search=termo` - Buscar

### Doações
- `GET /api/donations` - Listar doações
- `POST /api/donations` - Criar doação
- `GET /api/donations?userId=123` - Doações por usuário
- `GET /api/donations?institutionId=123` - Doações por instituição

### Estatísticas
- `GET /api/stats` - Estatísticas gerais

## 🎯 Próximos Passos

### Implementar:
1. ✅ Autenticação completa com NextAuth
2. ✅ Integração com Multicaixa Express
3. ✅ Integração com PayPay
4. ✅ Sistema de envio de emails
5. ✅ Geração de certificados PDF
6. ✅ Upload de imagens (Cloudinary/AWS S3)
7. ✅ Multilíngue (PT/EN)
8. ✅ Testes automatizados
9. ✅ Deploy (Vercel)

### Melhorias:
- Sistema de notificações push
- Chat de suporte
- Programa de embaixadores
- Gamificação (badges, níveis)
- Campanhas sazonais

## 🌍 Internacionalização

O site está preparado para suportar:
- 🇵🇹 Português (padrão)
- 🇬🇧 Inglês

## 🔒 Segurança

- Autenticação segura (NextAuth.js)
- Hashing de senhas (bcrypt)
- JWT para tokens
- Validação de dados (Zod)
- HTTPS obrigatório em produção
- Rate limiting nas APIs

## 📱 Responsividade

- Mobile-first design
- Breakpoints: 640px, 768px, 1024px, 1280px
- Navegação adaptativa
- Imagens otimizadas

## 🎨 Paleta de Cores

```css
Primary (Verde): #22c55e
Secondary (Azul): #3b82f6
Warm (Laranja): #f59e0b
Success (Verde): #10b981
Error (Vermelho): #ef4444
```

## 📄 Licença

Este projeto é open source e está disponível para uso em projetos sociais.

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:
1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📞 Contato

Para dúvidas ou sugestões:
- Email: contato@doarcomproposito.org
- Website: [em breve]

---

**Desenvolvido com 💚 para transformar vidas.**
