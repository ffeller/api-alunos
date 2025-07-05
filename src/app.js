const express = require('express');
const setAlunosRoutes = require('./routes/alunosRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

setAlunosRoutes(app);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});