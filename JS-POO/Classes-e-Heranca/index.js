import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Rodrigo', 'rodrigo@bock.com', '24/03/2000')
console.log(novoUser.exibirInfos())
