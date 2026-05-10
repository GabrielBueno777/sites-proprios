# 🏋️ FitPlus - Seu Guia de Dieta e Treino Personalizado

## 🚀 Como Começar

### Opção 1: Abrir Direto no Navegador (Recomendado - Rápido)

1. Navegue até: `site1/`
2. Clique em `index.html` e abra com seu navegador
3. Pronto! O site estará funcionando

**Vantagem:** Nenhuma instalação necessária!

### Opção 2: Rodando com Node.js (Servidor Local)

```bash
# 1. Instale as dependências
npm install

# 2. Rode o servidor
npm start

# 3. Abra seu navegador em
http://localhost:3000
```

## 📋 Primeira Vez - Teste Agora

### Conta de Teste
- **Email:** teste@email.com
- **Senha:** senha123

### Ou Crie uma Nova Conta
1. Clique em "Cadastro"
2. Preencha o formulário
3. Clique "Cadastrar"

## ✨ O Que o Site Faz

✅ **Login/Registro** - Crie sua conta segura
✅ **Planos de Assinatura** - Basic (R$29,90), Pro (R$79,90), Premium (R$149,90)
✅ **Perfil Personalizado** - Altura, peso, idade, gênero
✅ **Análise de IMC** - Cálculo automático e recomendações
✅ **Planos de Treino** - 4 tipos diferentes baseados em objetivos
✅ **Planos de Dieta** - Refeições customizadas com calorias
✅ **Registro Alimentar** - Acompanhe o que você comeu
✅ **Recomendações Inteligentes** - Baseadas em seu perfil

## 📊 Os 4 Objetivos

1. **Perder Peso** - Cardio + Alta Intensidade (1800 kcal/dia)
2. **Ganhar Massa** - Musculação + Força (2800 kcal/dia)
3. **Saúde** - Equilibrado + Bem-estar (2000 kcal/dia)
4. **Definição** - Musculação + Cardio (2200 kcal/dia)

## 💰 Planos Disponíveis

| Plano | Preço | Recursos |
|-------|-------|----------|
| **Basic** | R$ 29,90/mês | Treinos básicos + Dieta genérica |
| **Pro** | R$ 79,90/mês | Treino personalizado + Análise IMC + Registro |
| **Premium** | R$ 149,90/mês | Tudo + Coach + Consultoria + 24/7 |

## 📁 Estrutura do Projeto

```
sites-proprios/
├── site1/                    # Frontend (HTML/CSS/JS)
│   ├── index.html           # Página de login
│   ├── dashboard.html       # Dashboard de planos
│   ├── config.html          # Configuração de perfil
│   ├── index.css            # Estilos
│   └── js/
│       ├── auth.js          # Autenticação
│       ├── dashboard.js     # Planos
│       └── config.js        # Perfil e recomendações
├── server.js                 # Servidor Node.js (opcional)
├── package.json              # Dependências
├── README.md                 # Este arquivo
└── FITPLUS_GUIA.md          # Guia completo detalhado
```

## 🎯 Fluxo do Usuário

```
1. Login/Cadastro (index.html)
   ↓
2. Escolher Plano (dashboard.html)
   ↓
3. Configurar Perfil (config.html)
   ↓
4. Ver Plano Personalizado
   ├─ Análise do IMC
   ├─ Plano de Treino
   ├─ Plano de Dieta
   └─ Registro Alimentar
```

## 💾 Dados Armazenados

- **Usuários:** localStorage
- **Perfil:** localStorage
- **Registro Alimentar:** localStorage
- **Login:** localStorage

Tudo está salvo no navegador!

## 🔍 Exemplos Rápidos

### Exemplo 1: Perda de Peso
- Você pesa 95kg, mede 175cm
- Sistema detecta: Sobrepeso
- Recomenda: Plano Perda de Peso
- Dieta: 1800 kcal/dia
- Treino: 5 dias de cardio + musculação

### Exemplo 2: Ganho de Massa
- Você pesa 70kg, mede 180cm
- Sistema detecta: Baixo peso
- Recomenda: Plano Ganho de Massa
- Dieta: 2800 kcal/dia
- Treino: Musculação pesada 6 dias

## 📝 Registre Suas Refeições

Na página de configuração, você pode:
1. Digitar a refeição (ex: "Frango com arroz")
2. Adicionar calorias
3. Clicar "Adicionar"
4. Ver total do dia

## 🎨 Características de Design

- **Responsivo** - Funciona em celular, tablet e desktop
- **Moderno** - Gradientes e animações suaves
- **Acessível** - Fácil de usar
- **Rápido** - Sem servidor, carga instantânea

## ⚙️ Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma instalação necessária (para Opção 1)
- Node.js (apenas para Opção 2)

## 📖 Guia Completo

Para informações detalhadas, leia **FITPLUS_GUIA.md**

## 🚀 Dica Pro

1. Preencha seus dados com precisão
2. Escolha o objetivo real
3. Siga o plano consistentemente
4. Registre suas refeições diariamente
5. Veja resultados em 4 semanas!

---

**Versão:** 1.0 ✅  
**Status:** Completo e Funcional  
**Desenvolvido com:** HTML5 + CSS3 + JavaScript Vanilla  
**Hosting:** Localhost ou arquivo direto  

**Aproveite e bom treino!** 💪