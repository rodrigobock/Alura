const user = {
    nome: 'Rodrigo',
    email: 'r@bock.com',
    nascimento: '2000/03/24',
    role: 'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Admin',
    email: 'admin@admin.com',
    nascimento: '2000/03/24',
    role: 'admin',
    ativo: true,
    criarCurso: function(){
        console.log('Curso criado')
    }
}

// Passa o método exibirInfos do user pro admin
Object.setPrototypeOf(admin, user)

admin.criarCurso()
admin.exibirInfos()


/* Métodos 

const exibir = function(){
    console.log(this.nome)
}
const exibirNome = exibir.bind(user) // -> bind permite que o this funcione, pois adiciona contexto ao this

// Chamadas

user.exibirInfos()

exibirNome()

*/