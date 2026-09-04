const Turma = require('../src/turma');

describe('Turma', () => {
    let turma;
    beforeEach(() => {
        turma = new Turma(2);
    });

    afterEach(() => {
        turma = null;
    });

    it('deve matricular alunos enquanto houver vagas disponíveis', () => {
        expect(turma.matricular('Amanda')).toBe(1);
        expect(turma.matricular('Amora')).toBe(2);
    });


    it('deve retornar a quantidade atualizada de alunos a cada matrícula', () => {
        const totalAposPrimeira = turma.matricular('Boris');
        expect(totalAposPrimeira).toBe(1);
    });

    it('deve recusar a matrícula e lançar erro quando a turma estiver cheia', () => {
        turma.matricular('Pearl');
        turma.matricular('Anora');

        expect(() => turma.matricular('Luna')).toThrow('Turma lotada');
    });

    it('deve iniciar com a turma vazia e isolada dos testes anteriores ', () => {
        expect(turma.alunos.length).toBe(0);
    });
});
