const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 10000; 

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Banco de dados simulado para o teste de cores
const bancoCredenciais = {
    "CAD-112233-BR": { status: "REGULAR", mensagem: "✓ CREDENCIAL REGULAR E ATIVA NO SISTEMA NACIONAL" },
    "CAD-445566-BR": { status: "ROUBO", mensagem: "⚠️ ALERTA: CREDENCIAL BLOQUEADA POR MOTIVO DE ROUBO/FURTO" },
    "CAD-778899-BR": { status: "ADORMECIDO", mensagem: "💤 STATUS: CREDENCIAL ADORMECIDA / AGUARDANDO ATUALIZAÇÃO" }
};

// Rota principal (Boas-vindas)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// NOVA ROTA BLINDADA: Mudamos o caminho para evitar conflito com o nome do arquivo
app.get('/validar-sistema', (req, res) => {
    res.sendFile(path.join(__dirname, 'tela-validar.html'));
});

// Processamento da consulta
app.post('/api/consultar', (req, res) => {
    const codigoDigitado = req.body.codigo;
    if (bancoCredenciais[codigoDigitado]) {
        res.json(bancoCredenciais[codigoDigitado]);
    } else {
        res.json({ status: "INVALIDO", mensagem: "❌ ERRO: CÓDIGO NÃO ENCONTRADO NO CADMIV" });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`==================================================`);
    console.log(`   SISTEMA NACIONAL CADMIV ATIVO E BLINDADO       `);
    console.log(`==================================================`);
});
