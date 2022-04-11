let alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabel', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

let sala1 = alunos.slice(alunos[0], alunos.length/2);
let sala2 = alunos.slice(alunos.length/2);

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);