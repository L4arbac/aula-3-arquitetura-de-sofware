const { Turma } = require('./Turma');

class TurmaPresencial extends Turma{

    constructor(frequencia) {
        super();
        this.frequencia = frequencia;
    }

    aprovado(){
        if(this.frequencia>=75){
            console.log("Aluno APROVADO com frequencia: "+this.frequencia+"%")
        } else{
            console.log("Aluno REPROVADO com frequencia: "+this.frequencia+"%")
        }
    }
}


module.exports = {TurmaPresencial};