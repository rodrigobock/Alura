const user = {
    nome: 'Rodrigo',
    email: 'r@bock.com',
    nascimento: '2000/03/24',
    role: 'admin',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

// Métodos 

const exibir = function(){
    console.log(this.nome)
}
const exibirNome = exibir.bind(user) // -> bind permite que o this funcione, pois adiciona contexto ao this

// Chamadas

user.exibirInfos()

exibirNome()
