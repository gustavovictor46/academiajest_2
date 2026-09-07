/**
* Realiza a matrícula de um aluno com base na idade e nome.
*
*@param { number; } idade;
*@throws {Error}
*@returns {string}
*/


function matricularAluno(idade, nome) {
    if (typeof idade !== 'number' || Number.isNaN(idade)) {
      throw new Error('Idade inválida: Informe um número válido');
    }

    if (!Number.isInteger(idade) || idade < 0) {
        throw new Error('Idade inválida: Informe um número válido');
    }

    if (idade < 12 || idade > 100) {
        throw new Error('Idade fora da faixa permitida (12 a 100 anos)')
    }
    if (nome === '   ') {
        throw new Error('Nome é obrigatório');
    }
    if (!nome || typeof nome !== 'string' || nome.trim() === '') {
        throw new Error('Nome inválido: Informe um nome válido');
    }

    return `Sucesso! Aluno matriculado com ${idade} anos.`;
}

 export { matricularAluno };
