const express = require('express');
const alunosController = require('../controllers/alunosController');

const router = express.Router();
// const alunosController = new AlunosController();

function setAlunosRoutes(app) {
    router.get('/alunos', alunosController.getAlunos.bind(alunosController));
    router.get('/alunos/:id', alunosController.getAlunoById.bind(alunosController));
    router.post('/alunos', alunosController.createAluno.bind(alunosController));
    router.put('/alunos/:id', alunosController.updateAluno.bind(alunosController));
    router.delete('/alunos/:id', alunosController.deleteAluno.bind(alunosController));

    app.use('/api', router);
}

module.exports = setAlunosRoutes;