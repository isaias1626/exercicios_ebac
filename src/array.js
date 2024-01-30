const alunos = [
    { nome: "Beto", nota: 8 },
    { nome: "Viviane", nota: 7 },
    { nome: "Pedro", nota: 5 },
    { nome: "Ana", nota: 6 },
    { nome: "Carlos", nota: 9 },
    { nome: "Pietro", nota: 4 }
];

function alunosAprovados(arrayAlunos) {
    return arrayAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovadosArray = alunosAprovados(alunos);

console.log("Alunos aprovados:");
console.log(alunosAprovadosArray);