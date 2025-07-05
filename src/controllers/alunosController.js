class AlunosController {
    constructor() {
        this.alunos = [];
        this.currentId = 1;
    }

    getAlunos(req, res) {
        res.json(this.alunos);
    }

    getAlunoById(req, res) {
        const aluno = this.alunos.find(a => a.id === parseInt(req.params.id));
        if (!aluno) return res.status(404).send('Aluno não encontrado.');
        res.json(aluno);
    }

    createAluno(req, res) {
        const { nome, idade, turma } = req.body;
        const novoAluno = { id: this.currentId++, nome, idade, turma };
        this.alunos.push(novoAluno);
        res.status(201).json(novoAluno);
    }

    updateAluno(req, res) {
        const aluno = this.alunos.find(a => a.id === parseInt(req.params.id));
        if (!aluno) return res.status(404).send('Aluno não encontrado.');

        const { nome, idade, turma } = req.body;
        aluno.nome = nome;
        aluno.idade = idade;
        aluno.turma = turma;
        res.json(aluno);
    }

    deleteAluno(req, res) {
        const alunoIndex = this.alunos.findIndex(a => a.id === parseInt(req.params.id));
        if (alunoIndex === -1) return res.status(404).send('Aluno não encontrado.');

        this.alunos.splice(alunoIndex, 1);
        res.status(204).send();
    }
}

module.exports = new AlunosController();