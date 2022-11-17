const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeNota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){

        const indice = listaDeAlunosEMedias[0].indexOf(aluno)

        const mediaDoAluno = listaDeAlunosEMedias[1][indice]
        console.log(`${aluno} possui média igual a ${mediaDoAluno}`)


    }else{
        console.log('Error 404 - Aluno not found')
    }
}

exibeNomeNota("João")