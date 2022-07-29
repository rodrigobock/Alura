function User(nome, email){
    this.nome = nome
    this.email = email

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}

/*

const novoUsuario = new User('Beatriz', 'bia@bia.com')
console.log(novoUsuario.exibirInfos())

function Admin(role){
    User.call(this, 'Admin', 'admin@admin.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('admin')
console.log(novoUser.exibirInfos())
console.log(novoUser.role)

*/

const user = {
    init: function(nome, email){
        this.nome = nome
        this.email = email
    },
    exibirInfos: function(){
        return this.nome
    }
}


const novoUser = Object.create(user)
novoUser.init('Admin', 'admin@admin.com')
console.log(novoUser.exibirInfos())