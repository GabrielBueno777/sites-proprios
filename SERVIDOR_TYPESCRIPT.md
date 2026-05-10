# 🚀 Servidor TypeScript - FitPlus

## 📊 Visão Geral

O servidor TypeScript permite que **qualquer pessoa acesse seu FitPlus** através da rede local ou internet!

- ✅ **Todos os IPs** (0.0.0.0) - Aceita conexões de qualquer máquina
- ✅ **CORS habilitado** - Suporta requisições de qualquer origem
- ✅ **TypeScript** - Código seguro e tipado
- ✅ **Hot-reload** - Desenvolvimento mais rápido
- ✅ **Produção Ready** - Pronto para deploy

---

## 🔧 Instalação

### Pré-requisitos

- Node.js 16+ instalado ([Download](https://nodejs.org))
- npm (vem com Node.js)

### Windows

1. **Execute o script de setup:**
   ```bash
   .\setup.bat
   ```

2. **Ou manual:**
   ```bash
   npm install
   ```

### Linux / macOS

1. **Execute o script de setup:**
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```

2. **Ou manual:**
   ```bash
   npm install
   ```

---

## 🏃 Rodando o Servidor

### Desenvolvimento com Hot-Reload

```bash
npm run dev:watch
```

✅ Melhor para **desenvolvimento**
- Recarrega automaticamente ao salvar
- Nodemon monitora mudanças

### Desenvolvimento com ts-node

```bash
npm run dev
```

✅ Inicia rápido sem compilação

### Produção

```bash
npm run build    # Compilar TypeScript para JavaScript
npm start        # Rodar servidor compilado
```

✅ Melhor para **produção**
- JavaScript compilado
- Menor consumo de memória
- Mais rápido

---

## 🌐 Acessando o Servidor

### Local (Sua máquina)

```
http://localhost:3000
```

### Rede Local (Outras máquinas no WiFi/Ethernet)

```
http://<SEU_IP_LOCAL>:3000
```

**Como descobrir seu IP local:**

**Windows (PowerShell):**
```powershell
ipconfig
# Procure por "IPv4 Address" (algo como 192.168.x.x)
```

**Linux/macOS:**
```bash
ifconfig
# Procure por "inet" (algo como 192.168.x.x)
```

### Exemplo Real

Se seu IP local é `192.168.1.100`:

```
http://192.168.1.100:3000
```

Você pode compartilhar este link com amigos na mesma rede!

---

## 📱 Compartilhando com Outros

### 1. Na Mesma Rede (WiFi/Ethernet)

1. Descobra seu IP local (veja acima)
2. Compartilhe: `http://<SEU_IP>:3000`
3. Outros acessam desse link na rede

### 2. Com Acesso Remoto (Internet)

Para que pessoas **fora da sua rede** acessem:

#### Opção A: Port Forwarding (Seu Roteador)

1. Abra as configurações do roteador
2. Port Forward 3000 → IP local:3000
3. Descubra seu IP público ([Aqui](https://www.google.com/search?q=my+ip))
4. Compartilhe: `http://<SEU_IP_PÚBLICO>:3000`

⚠️ **Risco de segurança**: Seu computador fica acessível na internet

#### Opção B: Ngrok (Mais Seguro)

1. Instale ngrok: [ngrok.com](https://ngrok.com)
2. Crie uma conta gratuita
3. Execute:
   ```bash
   ngrok http 3000
   ```
4. Ngrok gera um link público (ex: `https://xxxx-xx-xxx.ngrok.io`)
5. Compartilhe este link

✅ Melhor opção para proteger sua máquina!

#### Opção C: Vercel/Heroku

1. Faça deploy para nuvem
2. Qualquer pessoa acessa de qualquer lugar

---

## 📋 Scripts Disponíveis

| Comando | Descrição | Uso |
|---------|-----------|-----|
| `npm install` | Instala dependências | Uma vez |
| `npm run dev:watch` | Dev com hot-reload | Desenvolvimento |
| `npm run dev` | Dev com ts-node | Desenvolvimento |
| `npm run build` | Compila TypeScript | Antes de deploy |
| `npm start` | Rodas servidor compilado | Produção |
| `npm run clean` | Remove pasta dist | Limpeza |

---

## 🔒 Segurança

⚠️ **Importante:**

- CORS está ativado (qualquer origem)
- Não armazena dados sensíveis no servidor
- localStorage é só local (navegador)
- Senhas em plaintext (não usar em produção real)

### Para Produção Real:

1. ❌ Remova CORS aberto
2. ✅ Use HTTPS
3. ✅ Hash de senhas (bcrypt)
4. ✅ Banco de dados seguro
5. ✅ Validação JWT
6. ✅ Rate limiting

---

## 📊 Informações do Servidor

Ao iniciar, você verá:

```
╔════════════════════════════════════════════════════════════╗
║          🏋️ FITPLUS - SERVIDOR INICIADO COM SUCESSO      ║
╚════════════════════════════════════════════════════════════╝

📊 INFORMAÇÕES DO SERVIDOR:
✓ Porta: 3000
✓ Host: 0.0.0.0 (Todos os IPs)
✓ Ambiente: development

📱 ACESSO LOCAL:
🖥️  Máquina local:      http://localhost:3000
🖥️  Na rede local:      http://192.168.1.100:3000

🌐 ACESSO REMOTO:
📡 Se seu PC tiver IP público, acesse de qualquer lugar
   http://<SEU_IP_PÚBLICO>:3000

🔗 COMPARTILHAR COM OUTROS:
Envie este link para outras pessoas acessarem:
http://192.168.1.100:3000

✅ STATUS:
✓ Servidor rodando
✓ CORS ativado
✓ Arquivos estáticos servindo
✓ API de health check disponível

⏹️  Para parar: Pressione Ctrl + C
```

---

## 🐛 Troubleshooting

### Porta 3000 já está em uso

```bash
# Linux/macOS - Encontrar processo
lsof -i :3000
kill -9 <PID>

# Windows - Encontrar processo
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Node.js não encontrado

```bash
# Instale Node.js em: https://nodejs.org
# Depois verifique:
node --version
npm --version
```

### Erro ao instalar dependências

```bash
# Limpar cache
npm cache clean --force

# Tentar novamente
npm install
```

### CORS ainda não funciona

Verifique se o servidor está rodando e acessível:

```bash
# Linux/macOS
curl http://localhost:3000

# Windows PowerShell
Invoke-WebRequest http://localhost:3000
```

---

## 📁 Arquivos do Servidor

```
sites-proprios/
├── server.ts ...................... Servidor principal (TypeScript)
├── tsconfig.json .................. Configuração TypeScript
├── package.json ................... Dependências e scripts
├── setup.sh ....................... Script setup (Linux/macOS)
├── setup.bat ...................... Script setup (Windows)
├── dist/ .......................... Pasta de output (após build)
│   └── server.js .................. Servidor compilado
└── site1/ ......................... Frontend estático
```

---

## 🚀 Deploy em Produção

### Para Heroku

1. Crie conta em [heroku.com](https://heroku.com)
2. Instale Heroku CLI
3. Execute:
   ```bash
   heroku login
   heroku create nome-do-seu-app
   git push heroku main
   ```

### Para Vercel

1. Crie conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório
3. Vercel faz deploy automático

### Para seu próprio servidor

1. Compile: `npm run build`
2. Upload arquivos para servidor
3. Instale dependências: `npm install --production`
4. Rode: `npm start`

---

## 📚 Tecnologias

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| Node.js | 16+ | Runtime |
| Express | 4.18.2 | Web Framework |
| TypeScript | 5.1.3 | Linguagem |
| CORS | 2.8.5 | Cross-Origin |
| ts-node | 10.9.1 | Execução TS direto |
| Nodemon | 3.0.1 | File watcher |

---

## 💡 Dicas

1. **Use `npm run dev:watch` durante desenvolvimento**
   - Recarrega automaticamente
   - Mais rápido

2. **Compile antes de produção**
   - Melhor performance
   - Sem dependência TypeScript

3. **Compartilhe via Ngrok**
   - Seguro
   - Fácil
   - Funciona de qualquer lugar

4. **Monitore com PM2** (Produção)
   ```bash
   npm install -g pm2
   pm2 start dist/server.js --name fitplus
   ```

---

## 📞 Suporte

Qualquer dúvida:

1. Verifique os logs do servidor
2. Teste a conexão: `curl http://localhost:3000`
3. Verifique firewall/antivírus
4. Reinicie o servidor

---

**Sucesso! Seu FitPlus está acessível! 🚀**
