let sala1 = [7 ,8 ,8 ,7 ,10 ,6.5 ,4 ,10 ,7];
let sala2 = [6, 5, 8, 9, 5, 6];
let sala3 = [7, 3.5, 8, 9.5];

function mediaSala(notasDasSalas) {
    let somaDasNotas = notasDasSalas.reduce((acum, atual) => atual + acum, 0);
    return somaDasNotas/notasDasSalas.length;
}

console.log(`Média da sala 1 é de: ${mediaSala(sala1)}`);
console.log(`Média da sala 2 é de: ${mediaSala(sala2)}`);
console.log(`Média da sala 3 é de: ${mediaSala(sala3)}`);