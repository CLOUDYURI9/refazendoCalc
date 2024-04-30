const teclado = require(`prompt-Sync`)();

let numeroUm = 0;
let numeroDois = 0;
let resultado: 0;

function soma(numeroUm: number, numeroDois: number): void {

    numeroUm = parseInt(teclado(`Digite o 1º número: `));
    numeroDois = parseInt(teclado(`Digite o 2º número: `));
    resultado = numeroUm + numeroDois;
    console.log(`O valor da soma de ${numeroUm} com ${numeroDois} `);
    console.log(`${resultado}`);
    console.log(`Digite ENTER para cont...`);
    teclado();
    menu();
}

function sair(): void{
    console.clear();
    console.log(`Fim do programa...`);
    process.exit(0);
}

function subtração(numeroUm: number, numeroDois: number): void {
    numeroUm = parseInt(teclado(`Digite o 1º número: `));
    numeroDois = parseInt(teclado(`Digite o 2º número: `));
    resultado = numeroUm - numeroDois;
    console.log(`O valor da subtração de ${numeroUm} com ${numeroDois} `);
    console.log(`${resultado}`);
    console.log(`Digite ENTER para cont...`);
    teclado();
    menu();
}

function multiplicação(numeroUm: number, numeroDois: number) {
    numeroUm = parseInt(teclado(`Digite o 1º número: `));
    numeroDois = parseInt(teclado(`Digite o 2º número: `));
    resultado = numeroUm * numeroDois;
    console.log(`O valor da multiplicação de ${numeroUm} com ${numeroDois} `);
    console.log(`${resultado}`);
    console.log(`Digite ENTER para cont...`);
    teclado();
    menu();
}

function divisao(numeroUm: number, numeroDois: number) {
    numeroUm = parseInt(teclado(`Digite o 1º número: `));
    numeroDois = parseInt(teclado(`Digite o 2º número: `));
    resultado = numeroUm / numeroDois;
    console.log(`O valor da divisão de ${numeroUm} com ${numeroDois} `);
    console.log(`${resultado}`);
    console.log(`Digite ENTER para cont...`);
    teclado();
    menu();
}

function selecao(opcao: string): void {
    switch (opcao) {
        case `+` : soma(numeroUm,numeroDois); break;
        case `-` : subtração(numeroUm, numeroDois); break;
        case `*` : multiplicação(numeroUm,numeroDois); break;
        case `/` : divisao(numeroUm, numeroDois); break;
        case `0` : sair(); break;
        default: break;
    }

}

function menu(): void{
console.log(`Qual operação deseja?`);
console.log(`+ --> Adição`);
console.log(`- --> Subtração`);
console.log(`* --> Mutiplicação`);
console.log(`/ --> Divisão`);
console.log(`0 --> Sair`);
let opcao: string = teclado(`Digite a opção desejada: `);
selecao(opcao)
}
menu();
