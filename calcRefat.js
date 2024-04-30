var teclado = require("prompt-Sync")();
var numeroUm = 0;
var numeroDois = 0;
var resultado;
function soma(numeroUm, numeroDois) {
    numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    resultado = numeroUm + numeroDois;
    console.log("O valor da soma de ".concat(numeroUm, " com ").concat(numeroDois, " "));
    console.log("".concat(resultado));
    console.log("Digite ENTER para cont...");
    teclado();
    menu();
}
function sair() {
    console.clear();
    console.log("Fim do programa...");
    process.exit(0);
}
function subtração(numeroUm, numeroDois) {
    numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    resultado = numeroUm - numeroDois;
    console.log("O valor da subtra\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " "));
    console.log("".concat(resultado));
    console.log("Digite ENTER para cont...");
    teclado();
    menu();
}
function multiplicação(numeroUm, numeroDois) {
    numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    resultado = numeroUm * numeroDois;
    console.log("O valor da multiplica\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " "));
    console.log("".concat(resultado));
    console.log("Digite ENTER para cont...");
    teclado();
    menu();
}
function divisao(numeroUm, numeroDois) {
    numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    resultado = numeroUm / numeroDois;
    console.log("O valor da divis\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " "));
    console.log("".concat(resultado));
    console.log("Digite ENTER para cont...");
    teclado();
    menu();
}
function selecao(opcao) {
    switch (opcao) {
        case "+":
            soma(numeroUm, numeroDois);
            break;
        case "-":
            subtração(numeroUm, numeroDois);
            break;
        case "*":
            multiplicação(numeroUm, numeroDois);
            break;
        case "/":
            divisao(numeroUm, numeroDois);
            break;
        case "0":
            sair();
            break;
        default: break;
    }
}
function menu() {
    console.log("Qual opera\u00E7\u00E3o deseja?");
    console.log("+ --> Adi\u00E7\u00E3o");
    console.log("- --> Subtra\u00E7\u00E3o");
    console.log("* --> Mutiplica\u00E7\u00E3o");
    console.log("/ --> Divis\u00E3o");
    console.log("0 --> Sair");
    var opcao = teclado("Digite a op\u00E7\u00E3o desejada: ");
    selecao(opcao);
}
menu();
