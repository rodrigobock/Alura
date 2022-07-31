import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso){
        return `Estudante ${estudante} aprovado no curso ${curso}.`
    }
}

const novoDocente = new Docente('Beatriz', 'b@b.com', '2021-01-01')
console.log(novoDocente)
console.log(novoDocente.exibirInfos())
console.log(novoDocente.aprovaEstudante('Rodrigo', 'JS'))
