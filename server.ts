import express, { Express, Request, Response } from 'express';
import path from 'path';
import os from 'os';
import cors from 'cors';

const app: Express = express();
const PORT: number = parseInt(process.env.PORT || '3000', 10);
const HOST: string = '0.0.0.0'; // Aceita conexões de qualquer IP

// ============================================
// MIDDLEWARE
// ============================================

// CORS - Permite acesso de qualquer origem
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// JSON Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos
const sitePath = path.join(__dirname, '..', 'site1');
app.use(express.static(sitePath));

// ============================================
// ROTAS
// ============================================

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(sitePath, 'index.html'));
});

app.get('/dashboard', (req: Request, res: Response) => {
    res.sendFile(path.join(sitePath, 'dashboard.html'));
});

app.get('/config', (req: Request, res: Response) => {
    res.sendFile(path.join(sitePath, 'config.html'));
});

// API Health Check
app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Fallback - Serve index.html para rotas não encontradas
app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(sitePath, 'index.html'));
});

// ============================================
// FUNÇÕES AUXILIARES
// ============================================

function getLocalIPAddress(): string {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        const iface = interfaces[name];
        if (!iface) continue;
        
        for (const addr of iface) {
            if (addr.family === 'IPv4' && !addr.internal) {
                return addr.address;
            }
        }
    }
    return 'localhost';
}

function printBanner(): void {
    console.log('\n');
    console.log('╔════════════════════════════════════════════════════════════╗');
    console.log('║                                                            ║');
    console.log('║          🏋️  FITPLUS - SERVIDOR INICIADO COM SUCESSO      ║');
    console.log('║                                                            ║');
    console.log('╚════════════════════════════════════════════════════════════╝');
    console.log('\n');
    
    console.log('📊 INFORMAÇÕES DO SERVIDOR:');
    console.log('─────────────────────────────────────────────────────────────');
    console.log(`✓ Porta: ${PORT}`);
    console.log(`✓ Host: ${HOST} (Todos os IPs)`);
    console.log(`✓ Ambiente: ${process.env.NODE_ENV || 'development'}`);
    console.log('');
    
    const localIP = getLocalIPAddress();
    console.log('📱 ACESSO LOCAL:');
    console.log('─────────────────────────────────────────────────────────────');
    console.log(`🖥️  Máquina local:      http://localhost:${PORT}`);
    console.log(`🖥️  Na rede local:      http://${localIP}:${PORT}`);
    console.log('');
    
    console.log('🌐 ACESSO REMOTO:');
    console.log('─────────────────────────────────────────────────────────────');
    console.log(`📡 Se seu PC tiver IP público, acesse de qualquer lugar`);
    console.log(`   http://<SEU_IP_PÚBLICO>:${PORT}`);
    console.log('');
    
    console.log('🔗 COMPARTILHAR COM OUTROS:');
    console.log('─────────────────────────────────────────────────────────────');
    console.log(`Envie este link para outras pessoas acessarem:`);
    console.log(`http://${localIP}:${PORT}`);
    console.log('');
    console.log('✅ STATUS:');
    console.log('─────────────────────────────────────────────────────────────');
    console.log('✓ Servidor rodando');
    console.log('✓ CORS ativado (aceita requisições de qualquer origem)');
    console.log('✓ Arquivos estáticos servindo');
    console.log('✓ API de health check disponível');
    console.log('');
    
    console.log('⏹️  Para parar: Pressione Ctrl + C');
    console.log('\n');
}

// ============================================
// INICIAR SERVIDOR
// ============================================

app.listen(PORT, HOST, () => {
    printBanner();
});

// Tratamento de erros
process.on('unhandledRejection', (err) => {
    console.error('❌ Erro não tratado:', err);
    process.exit(1);
});

process.on('SIGTERM', () => {
    console.log('\n📛 Servidor interrompido (SIGTERM)');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('\n📛 Servidor interrompido (SIGINT)');
    process.exit(0);
});
