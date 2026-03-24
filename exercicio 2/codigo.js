const inputSalario = document.getElementById("salarioBruto");
const resultado = document.getElementById("resultado");

function calculoAumentoSalarial() {
    const valorSalario = parseFloat(inputSalario.value); 
    
    // Verificação básica para não calcular campos vazios ou NaN
    if (isNaN(valorSalario)) {
        resultado.textContent = "Por favor, digite um valor válido.";
        return;
    }

    let percentual;

    if (valorSalario <= 1200) {
        percentual = 0.16;
    } else if (valorSalario <= 2100) {
        percentual = 0.13;
    } else if (valorSalario <= 3000) {
        percentual = 0.10;
    } else {
        percentual = 0.05;
    }

    const novoSalario = valorSalario * (1 + percentual);
    resultado.textContent = `Novo salário: R$ ${novoSalario.toFixed(2)}`;
}
