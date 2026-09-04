class Turma {
    /**
     * @param {number} capacidadeMaxima - limite de vagas da turma
     */
    constructor(capacidadeMaxima) {
        if (typeof capacidadeMaxima !== 'number' || capacidadeMaxima <= 0) {
            throw new Error('Capacidade deve ser um número maior que zero');
        }
        this.capacidadeMaxima = capacidadeMaxima;
        this.alunos = [];
    }

    /**
     *
     * @param {sting} nome - Nome do aluno.
     * @returns {number} Quantidade atual de alunos na turma.
     */
    matricular(nome) {
        if (!nome || typeof nome !== 'string' || nome.trim() === '') {
            throw new Error('Nome do aluno é obrigatório');
        }
        if (this.alunos.length >= this.capacidadeMaxima) {
            throw new Error('Turma lotada');
        }

        this.alunos.push(nome);
        return this.alunos.length;
    }
}

module.exports = Turma;
