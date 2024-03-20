class Turma{
    constructor(codigo, nota) {
      this.codigo = codigo;
      this.nota = nota;
    }
    aprovado(){
        if(this.nota>=6){
            console.log("O aluno foi APROVADO com nota: "+this.nota)
        } else{
            console.log("O aluno foi REPROVADO com nota: "+this.nota)
        }
    }
}

module.exports = {Turma};

