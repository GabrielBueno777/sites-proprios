const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'site1')));
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'site1', 'index.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'site1', 'dashboard.html'));
});

app.get('/config', (req, res) => {
    res.sendFile(path.join(__dirname, 'site1', 'config.html'));
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🏋️ FitPlus rodando em http://localhost:${PORT}`);
    console.log(`Abra seu navegador e acesse: http://localhost:${PORT}`);
});
