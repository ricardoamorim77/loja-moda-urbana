# Instruções - Site Moda Urbana

## 📋 Sobre o Projeto

Este é um website de e-commerce para a loja **Moda Urbana**, desenvolvido com React, Vite e Tailwind CSS. O site inclui:

- Homepage com apresentação da loja
- Seção de produtos com filtros por categoria
- Cards de produtos individuais com preços
- Integração com WhatsApp para vendas
- Botão flutuante do WhatsApp para contato geral
- Botão de seguir no Instagram
- Seção "Sobre Nós" com história da loja
- Seção de contato com endereço e informações
- Design responsivo para desktop, tablet e mobile

## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou pnpm instalado

### Passos

1. **Instalar dependências:**
   ```bash
   npm install
   # ou
   pnpm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   pnpm run dev
   ```

3. **Abrir no navegador:**
   - O site estará disponível em `http://localhost:5173`

## 📦 Como Fazer o Build

Para gerar os arquivos de produção:

```bash
npm run build
# ou
pnpm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 🌐 Como Fazer Deploy no GitHub Pages

### Passo 1: Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com) e faça login
2. Clique em "New repository" (Novo repositório)
3. Dê um nome ao repositório (ex: `loja-moda-urbana`)
4. Deixe como **público**
5. **NÃO** inicialize com README, .gitignore ou licença
6. Clique em "Create repository"

### Passo 2: Configurar o Repositório Local

No terminal, dentro da pasta do projeto:

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Primeiro commit - Site Moda Urbana"

# Adicionar o repositório remoto (substitua SEU_USUARIO e SEU_REPOSITORIO)
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Enviar para o GitHub
git push -u origin main
```

### Passo 3: Configurar Scripts de Deploy

**IMPORTANTE:** Antes de executar os scripts de deploy, você precisa editar os arquivos e substituir `SEU_USUARIO` e `SEU_REPOSITORIO` pelos seus dados reais do GitHub.

#### Editar os Scripts

Abra os seguintes arquivos e substitua:
- `deploy.sh` (linha 35)
- `deploy-https.sh` (linha 35)
- `deploy.bat` (linha 35)

Exemplo:
```bash
# Antes:
git push -f https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git main:gh-pages

# Depois (exemplo):
git push -f https://github.com/joaosilva/loja-moda-urbana.git main:gh-pages
```

### Passo 4: Executar o Deploy

#### No Linux/macOS/Git Bash (Windows):

**Opção 1 - SSH (recomendado se você tem chave SSH configurada):**
```bash
./deploy.sh
```

**Opção 2 - HTTPS:**
```bash
./deploy-https.sh
```

#### No Windows (PowerShell/CMD):

```cmd
deploy.bat
```

### Passo 5: Ativar GitHub Pages

1. Vá ao seu repositório no GitHub
2. Clique em "Settings" (Configurações)
3. No menu lateral, clique em "Pages"
4. Em "Source", selecione o branch **gh-pages**
5. Clique em "Save"
6. Aguarde alguns minutos

Seu site estará disponível em: `https://SEU_USUARIO.github.io/SEU_REPOSITORIO/`

## ⚙️ Personalização

### Alterar Número do WhatsApp

Edite os seguintes arquivos e substitua `5511999999999` pelo número real:

1. **`src/components/WhatsAppButton.jsx`** (linha 4)
2. **`src/components/ProductCard.jsx`** (linha 6)
3. **`src/components/Contact.jsx`** (linha 36)

Formato: Código do país + DDD + número (sem espaços, traços ou parênteses)
Exemplo: `5511987654321` para (11) 98765-4321

### Alterar Instagram

Edite o arquivo **`src/components/Contact.jsx`** (linha 33):
```javascript
window.open('https://www.instagram.com/SEU_PERFIL', '_blank');
```

### Alterar Endereço da Loja

Edite o arquivo **`src/components/Contact.jsx`** nas linhas 8-11:
```javascript
{
  icon: MapPin,
  title: 'Endereço',
  content: 'Seu Endereço Aqui',
  subcontent: 'Cidade - Estado, CEP'
}
```

### Adicionar/Editar Produtos

Edite o arquivo **`src/components/Products.jsx`** a partir da linha 8.

Exemplo de produto:
```javascript
{
  id: 1,
  name: 'Nome do Produto',
  description: 'Descrição breve do produto',
  price: 99.90,
  oldPrice: 149.90, // Opcional - para mostrar desconto
  image: 'URL_DA_IMAGEM',
  category: 'roupas', // ou 'calcados'
  badge: 'NOVO' // Opcional - 'NOVO' ou 'OFERTA'
}
```

### Alterar Cores do Site

As cores principais estão definidas no Tailwind CSS. Os principais elementos usam:
- **Cor primária:** `indigo-600` (roxo/azul)
- **Cor de destaque:** `purple-500` (roxo)
- **WhatsApp:** `green-500` (verde)

Para alterar, substitua essas classes nos componentes.

## 📱 Funcionalidades Implementadas

### ✅ Homepage (Hero)
- Apresentação da loja com título e descrição
- Imagem de destaque
- Botões de ação para navegar

### ✅ Seção de Produtos
- Listagem de 12 produtos (exemplo)
- Filtros por categoria (Todos, Roupas, Calçados)
- Cards com imagem, nome, descrição e preço
- Badges de "NOVO" e "OFERTA"
- Preços com desconto (riscado)

### ✅ Cards de Produtos
- Botão "Comprar via WhatsApp" em cada produto
- Mensagem pré-preenchida com nome e preço do produto
- Efeito hover com zoom na imagem

### ✅ Botão Flutuante do WhatsApp
- Fixo no canto inferior direito
- Sempre visível em todas as seções
- Abre WhatsApp com mensagem de contato geral

### ✅ Seção "Sobre Nós"
- História da loja
- Valores e diferenciais
- Imagem ilustrativa

### ✅ Seção de Contato
- Endereço da loja
- Telefone/WhatsApp
- E-mail
- Horário de funcionamento
- Botão para seguir no Instagram
- Botão para falar no WhatsApp

### ✅ Rodapé (Footer)
- Links rápidos
- Categorias
- Informações de contato
- Redes sociais
- Copyright

### ✅ Design Responsivo
- Layout adaptável para desktop, tablet e mobile
- Menu hambúrguer no mobile
- Grid responsivo de produtos

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide Icons** - Ícones SVG
- **shadcn/ui** - Componentes de UI

## 📝 Estrutura de Arquivos

```
loja-moda-urbana/
├── public/              # Arquivos públicos
├── src/
│   ├── assets/         # Imagens e recursos
│   ├── components/     # Componentes React
│   │   ├── ui/        # Componentes de UI (shadcn)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Products.jsx
│   │   ├── ProductCard.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── App.jsx        # Componente principal
│   ├── App.css        # Estilos globais
│   └── main.jsx       # Entry point
├── index.html         # HTML principal
├── vite.config.js     # Configuração do Vite
├── package.json       # Dependências
├── deploy.sh          # Script de deploy (Linux/macOS)
├── deploy-https.sh    # Script de deploy HTTPS
├── deploy.bat         # Script de deploy (Windows)
└── INSTRUCOES.md      # Este arquivo
```

## 🐛 Solução de Problemas

### Erro ao fazer deploy
- Verifique se você substituiu `SEU_USUARIO` e `SEU_REPOSITORIO` nos scripts
- Certifique-se de ter permissões de escrita no repositório
- Verifique se o branch `gh-pages` foi criado

### Site não aparece no GitHub Pages
- Aguarde alguns minutos após o deploy
- Verifique se o GitHub Pages está ativado nas configurações
- Certifique-se de que o branch selecionado é `gh-pages`

### WhatsApp não abre
- Verifique se o número está no formato correto (código do país + DDD + número)
- Teste em um dispositivo com WhatsApp instalado

### Imagens não aparecem
- Verifique se as URLs das imagens estão corretas
- Certifique-se de que as imagens são públicas e acessíveis

## 📞 Suporte

Para dúvidas ou problemas, consulte a documentação oficial:
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [GitHub Pages](https://pages.github.com)

---

**Desenvolvido com ❤️ para Moda Urbana**
