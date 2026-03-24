const inputPessoas = document.getElementById("quantidadePessoas");
const diasUteis = document.getElementById("diasUteis");
const resultado = document.getElementById("resultado");

function calculoCustoMensal() {
    const qtd = Number(inputPessoas.value);
    const dias = Number(diasUteis.value);
    let valorPessoaPorDia;

    if (qtd < 50) {
        valorPessoaPorDia = 4.50;
    } else if (qtd < 100) {
        valorPessoaPorDia = 4.10;
    } else if (qtd < 150) {
        valorPessoaPorDia = 3.80;
    } else {
        valorPessoaPorDia = 3.50; 
    }

    const custoMensal = valorPessoaPorDia * qtd * dias;
    
    if (isNaN(qtd) || qtd <= 0) {
        resultado.textContent = "Insira uma quantidade válida.";
    } else {
        resultado.textContent = `Custo mensal: R$ ${custoMensal.toFixed(2)} para ${qtd} pessoas durante ${dias} dias úteis.`;
    }
}
