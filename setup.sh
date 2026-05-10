#!/bin/bash
# Script para rodar o servidor FitPlus com TypeScript

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║                   🏋️ FitPlus Setup Script                     ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado!"
    echo "Baixe em: https://nodejs.org"
    exit 1
fi

echo "✓ Node.js encontrado: $(node --version)"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

echo ""
echo "✓ Dependências instaladas com sucesso!"
echo ""

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║                     ✅ Tudo Pronto!                          ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

echo "📋 COMANDOS DISPONÍVEIS:"
echo "─────────────────────────────────────────────────────────────"
echo ""
echo "1️⃣  Desenvolvimento (com hot-reload):"
echo "   npm run dev:watch"
echo ""
echo "2️⃣  Desenvolvimento (ts-node):"
echo "   npm run dev"
echo ""
echo "3️⃣  Build (compilar para JavaScript):"
echo "   npm run build"
echo ""
echo "4️⃣  Produção (rodar servidor compilado):"
echo "   npm start"
echo ""
echo "─────────────────────────────────────────────────────────────"
echo ""
echo "🚀 COMEÇANDO AGORA:"
echo ""
echo "Execute: npm run dev:watch"
echo ""
echo "Depois acesse:"
echo "  🖥️  Local:     http://localhost:3000"
echo "  🌐 Rede:      http://<seu_ip>:3000"
echo ""
