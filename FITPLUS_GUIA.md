# 🏋️ FitPlus - Sistema de Dieta e Treino Personalizado

Um site funcional e moderno para gestão personalizada de dietas e treinos baseado no perfil do usuário.

## ✨ Características Principais

### 1. **Sistema de Autenticação**
- Registro de novos usuários
- Login seguro com email e senha
- Dados armazenados localmente (localStorage)

### 2. **Planos de Assinatura**
- **Plano Basic** - R$ 29,90/mês
  - Acesso básico a treinos
  - Dieta genérica
  - Suporte por email
  
- **Plano Pro** - R$ 79,90/mês
  - Plano de treino personalizado
  - Dieta customizada
  - Análise de IMC
  - Registro alimentar
  - Suporte por chat
  
- **Plano Premium** - R$ 149,90/mês
  - Tudo do Plano Pro
  - Coach dedicado
  - Consultoria nutricional
  - Suporte 24/7

### 3. **Configuração de Perfil**
Ao assinar um plano, o usuário preenche:
- **Altura** (em cm)
- **Peso** (em kg)
- **Idade**
- **Gênero**
- **Objetivo Principal**:
  - Perder Peso
  - Ganhar Massa
  - Melhorar Saúde
  - Definição Muscular

### 4. **Análise Inteligente**
O sistema calcula o IMC e fornece recomendações automáticas:
- Se BMI < 18,5 (Baixo Peso): Sugere ganho de massa
- Se BMI 18,5-25 (Peso Normal): Recomenda manutenção
- Se BMI 25-30 (Sobrepeso): Sugere perda de peso
- Se BMI > 30 (Obesidade): Recomenda programa especial

### 5. **Planos de Treino Personalizados**
Cada objetivo possui um plano com:
- Exercícios específicos para cada dia
- Séries e repetições recomendadas
- Nível de intensidade
- Calorias queimadas estimadas

**Exemplo - Plano para Perder Peso:**
- Segunda: Corrida (5x5min, 300 kcal)
- Terça: Musculação (Pernas)
- Quarta: Ciclismo
- ... (completo até domingo)

### 6. **Planos de Dieta Personalizados**
Dietas customizadas com:
- Calorias diárias recomendadas
- 5-7 refeições por dia com horários
- Itens específicos para cada refeição
- Calorias por refeição

**Exemplo - Café da Manhã (Perda de Peso):**
- 2 ovos cozidos
- 1 xícara de leite desnatado
- 1 maçã pequena
- Café com adoçante
- **Total: 350 kcal**

### 7. **Registro Alimentar Diário**
- Adicione alimentos consumidos
- Registre calorias de cada refeição
- Veja total de calorias do dia
- Histórico completo de alimentação

## 🚀 Como Usar

### Início Rápido (sem servidor)

1. **Abra o arquivo `index.html`** no navegador
2. **Cadastre uma nova conta** ou use:
   - Email: `teste@email.com`
   - Senha: `senha123`

3. **Navegue pelo site:**
   - Login/Registro
   - Escolha um plano
   - Preencha seus dados pessoais
   - Visualize seu plano personalizado
   - Registre suas refeições

### Arquivos Principais

```
site1/
├── index.html           # Página de login
├── dashboard.html       # Dashboard de planos
├── config.html          # Configuração de perfil
├── index.css           # Estilos principais
└── js/
    ├── auth.js         # Autenticação e login
    ├── dashboard.js    # Lógica de planos
    └── config.js       # Geração de planos personalizados
```

## 🔧 Funcionalidades Técnicas

### Armazenamento de Dados
- Usuários: `localStorage.users`
- Perfil do Usuário: `localStorage.users[].config`
- Registro Alimentar: `localStorage.foodLogs_[userId]`
- Usuário Logado: `localStorage.currentUser`

### Dados Salvos por Usuário

```javascript
{
  id: 1234567890,
  name: "João Silva",
  email: "joao@email.com",
  password: "senha123",
  plan: "pro",
  config: {
    altura: 180,
    peso: 85,
    idade: 28,
    genero: "masculino",
    objetivo: "perder-peso"
  }
}
```

## 📊 Planos de Treino Disponíveis

### 1. Perder Peso
- Foco em cardio e alta intensidade
- 300-400 kcal por sessão
- 5 dias de treino + 1 ativo
- Total semanal: ~1600 kcal queimadas

### 2. Ganhar Massa
- Foco em musculação com progressão
- Exercícios compostos
- 250-300 kcal por sessão
- Total semanal: ~1400 kcal queimadas

### 3. Saúde e Bem-estar
- Exercícios moderados
- Combina cardio, yoga e pilates
- 150-250 kcal por sessão
- Total semanal: ~1200 kcal queimadas

### 4. Definição
- Combinação musculação + cardio
- Alta intensidade controlada
- 250-380 kcal por sessão
- Total semanal: ~1900 kcal queimadas

## 🍽️ Exemplos de Dietas

### Dieta para Perder Peso (1800 kcal/dia)
- Café (350 kcal)
- Lanche (150 kcal)
- Almoço (500 kcal)
- Lanche (150 kcal)
- Jantar (400 kcal)
- Ceia (250 kcal)

### Dieta para Ganhar Massa (2800 kcal/dia)
- Café (600 kcal)
- Lanche (400 kcal)
- Almoço (700 kcal)
- Pré-treino (400 kcal)
- Pós-treino (350 kcal)
- Jantar (550 kcal)
- Ceia (250 kcal)

## 💡 Recursos Inclusos

✅ Sistema de login/registro completo
✅ 3 planos de assinatura com preços
✅ Cálculo automático de IMC
✅ Recomendações personalizadas
✅ 4 tipos de planos de treino
✅ 4 tipos de planos de dieta
✅ Registro alimentar com calorias
✅ Histórico de refeições
✅ Interface responsiva (mobile-friendly)
✅ Design moderno e atrativo
✅ 100% funcional sem servidor (localStorage)

## 🎨 Design

- **Paleta de Cores:**
  - Primário: #FF6B35 (Laranja)
  - Secundário: #004E89 (Azul)
  - Accent: #1B998B (Verde-água)
  - Sucesso: #06A77D (Verde)
  - Perigo: #E63946 (Vermelho)

- **Responsividade:** Desktop, Tablet e Mobile
- **Animações:** Suave e intuitiva
- **Acessibilidade:** Labels e inputs clara

## 🔐 Segurança (Importante)

⚠️ **Nota:** Este é um protótipo funcional para demonstração.
- Senhas são armazenadas em texto plano (não usar em produção)
- Dados são armazenados localmente no navegador
- Para produção, use um backend seguro com:
  - Hash de senhas (bcrypt)
  - Banco de dados (PostgreSQL/MongoDB)
  - Autenticação JWT
  - HTTPS

## 🚀 Próximos Passos para Melhorias

1. **Backend com Node.js/Express**
   - Banco de dados real
   - Autenticação segura
   - API REST

2. **Recursos Adicionais**
   - Integração com wearables
   - Progressão visual em gráficos
   - Notificações de lembretes
   - Comunidade e desafios

3. **Mobile App**
   - React Native ou Flutter
   - Sincronização em tempo real

## 📝 Exemplo de Uso

### 1. Primeiro Acesso
```
1. Acesse index.html
2. Clique em "Cadastro"
3. Preencha: Nome, Email, Senha
4. Clique em "Cadastrar"
```

### 2. Login
```
1. Volte à aba "Login"
2. Digite seu email e senha
3. Clique "Entrar"
```

### 3. Escolher Plano
```
1. Veja os 3 planos disponíveis
2. Clique "Assinar Agora" no plano desejado
3. Será redirecionado para configurar perfil
```

### 4. Configurar Perfil
```
1. Preencha: Altura, Peso, Idade, Gênero
2. Escolha seu objetivo
3. Clique "Salvar e Gerar Plano"
```

### 5. Ver Seu Plano
```
1. Visualize análise do IMC
2. Veja plano de treino personalizado
3. Veja dieta customizada
4. Registre suas refeições
```

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato.

---

**Versão:** 1.0  
**Última Atualização:** 2026  
**Desenvolvido com:** HTML5, CSS3, JavaScript (Vanilla)  
**Armazenamento:** LocalStorage  
**Compatibilidade:** Todos os navegadores modernos
