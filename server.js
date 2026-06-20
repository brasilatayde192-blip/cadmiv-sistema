const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para a página de Boas-Vindas (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página de Validação Corporativa (validar.html)
app.get('/validar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'validar.html'));
});

// Inicialização do Servidor do CADMIV
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`   SISTEMA NACIONAL CADMIV ATIVO E BLINDADO       `);
    console.log(`   Acesse localmente em: http://localhost:${PORT} `);
    console.log(`==================================================`);
});
});
app.listen(3000, () => { 
    console.log('🚀 SERVIDOR CADMIV LIGADO COM SUCESSO!'); 
    console.log('👉 Acesse no seu navegador: http://localhost:3000/validar');
});




