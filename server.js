const express = require('express');
const path = require('path');
const app = express();

// A Render exige que a porta seja lida dinamicamente do servidor deles
const PORT = process.env.PORT || 10000; 

// Servir os arquivos diretamente na raiz do projeto
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para a página de Boas-Vindas (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para a página de Validação Corporativa (validar.html)
app.get('/validar', (req, res) => {
    res.sendFile(path.join(__dirname, 'validar.html'));
});

// Inicialização do Servidor do CADMIV na Nuvem Gratuita
app.listen(PORT, '0.0.0.0', () => {
    console.log(`==================================================`);
    console.log(`   SISTEMA NACIONAL CADMIV ATIVO E BLINDADO       `);
    console.log(`   Rodando com sucesso na nuvem mundial!         `);
    console.log(`==================================================`);
});
