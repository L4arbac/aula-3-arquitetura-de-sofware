const { Aluno } = require('./Classes/Aluno');
const { Turma } = require('./Classes/Turma');
const { TurmaPresencial } = require('./Classes/TurmaPresencial');

const aluno1 = new Aluno('Maria','maria@email.com',2348004);
const turma1 = new Turma('ES45A',8);
const turmaPresencial1 = new TurmaPresencial(95);


turma1.aprovado();
turmaPresencial1.aprovado();