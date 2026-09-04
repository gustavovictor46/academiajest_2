/**
* Realiza a matrícula de um aluno com base na idade e nome.
*
*@param { number; } idade;
*@throws {Error}
*@returns {string}
*/


export function matricularAluno(idade, nome) {
    if (typeof idade !== 'number' || Number.isNaN(idade)) {
      throw new Error('Idade inválida: Informe um número válido');
    }

    if (idade < 12 || idade > 100) {
        throw new Error('Idade fora da faixa permitida (12 a 100 anos)')
    }

    return `Sucesso! Aluno matriculado com ${idade} anos.`;
}

module.exports = { matricularAluno };
