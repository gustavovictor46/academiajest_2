const { matricularAluno } = require('../src/matricula');

describe('matricularAluno', () => {
    describe('idades válidas', () => {
        it('deve aceitar uma idade no início da faixa permitida (12 anos)', () => {
            expect(matricularAluno(12, 'José')).toBe(true);
        });

        it('deve aceitar uma idade no início da faixa permitida (25 anos)', () => {
            expect(matricularAluno(25, 'Mário')).toBe(true);
        });

        it('deve aceitar uma idade no início da faixa permitida (100 anos)', () => {
            expect(matricularAluno(100, 'Ana')).toBe(true);
        });
    });

    describe('idades inválidas (fora da faixa)', () => {
        it('deve recusar a matrícula para idade menor que 12 anos', () => {
            expect(matricularAluno(11, 'Carlos')).toBe(false);
        });

        it('deve recusar a matrícula para idade maior que 100 anos', () => {
            expect(matricularAluno(105, 'Jéssica')).toBe(false);
        });
    });

    describe('valores-limite', () => {
        it('deve recusar a matrícula para 11 anos (limite inferior -1)', () => {
            expect(() => matricularAluno(11, 'Courtney')).toThrow('Idade fora da faixa permitida (12 a 100 anos)');
        });
        it('deve aceitar a matrícula para 12 anos (limite inferior exato)', () => {
            expect(() => matricularAluno(12, 'Bill')).toBe(true);
        });
        it('deve aceitar a matrícula para 100 anos (limite superior exato)', () => {
            expect(() => matricularAluno(100, 'Akira')).toBe(true);
        });
        it('deve recusar a matrícula para 101 anos (limite superior +1)', () => {
            expect(() => matricularAluno(101, 'João')).toThrow('Idade fora da faixa permitida (12 a 100 anos)');
        });

        describe('entradas inesperadas e edge cases (idade)', () => {
            it('deve recusar idade decimal (ex: 12.5)', () => {
                expect(() => matricularAluno(12.5, 'Alice')).toThrow('Idade inválida: Informe um número válido');
            });
            it('deve recusar idade negativa (ex: -1)', () => {
                expect(() => matricularAluno(-1, 'Alicia')).toThrow('Idade inválida: Informe um número válido');
            });
            it('deve recusar quando a idade for fornecida como string (ex: "12")', () => {
                expect(() => matricularAluno("12", 'Livia')).toThrow('Idade inválida: Informe um número válido');
            });
            it('deve recusar quando a idade for undefined ()', () => {
                expect(() => matricularAluno(undefined, 'Yasmin')).toThrow('Idade inválida: Informe um número válido');
            });
            it('deve recusar quando a idade for null ()', () => {
                expect(() => matricularAluno(null, 'Bianca')).toThrow('Idade inválida: Informe um número válido');
            });
            it('deve recusar quando a idade for NaN ()', () => {
                expect(() => matricularAluno(NaN, 'Beatriz')).toThrow('Idade inválida: Informe um número válido');
            });
        });

        describe('validação nome do aluno', () => {
            it('deve aceitar a matrícula quando o nome estiver preenchido corretamente', () => {
                expect(() => matricularAluno(20, 'Arthur')).toBe(true);
            });
            it('deve recusar o nome quando for uma string vazia', () => {
                expect(() => matricularAluno(20, '')).toThrow('Nome inválido: Informe um nome válido');
            });
            it('deve recusar quando o nome contiver apenas espaço em branco', () => {
                expect(() => matricularAluno(20, '   ')).toThrow('Nome é obrigatório');
            });
            it('deve recusar quando nome for undefined ()', () => {
                expect(() => matricularAluno(20, undefined)).toThrow('Nome inválido: Informe um nome válido');
            });
            it('deve recusar quando o nome for null ()', () => {
                expect(() => matricularAluno(20, null)).toThrow('Nome inválido: Informe um nome válido');
            });
        });
