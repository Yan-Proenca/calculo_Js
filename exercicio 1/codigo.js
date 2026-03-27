const salarioBruto = document.getElementById('salarioBruto')
const horasExtrasDiasUteis = document.getElementById('horasExtrasDiasUteis')
const horasExtrasFinaisSemana = document.getElementById('horasExtrasFinaisSemana')
const resultado = document.getElementById('resultado')

function calcularHorasExtras() {
    const salario = parseFloat(salarioBruto.value)
    const horasUteis = parseFloat(horasExtrasDiasUteis.value)
    const horasFinaisSemana = parseFloat(horasExtrasFinaisSemana.value)
    const valorHora = salario / 200

    const valorHorasUteis = horasUteis * valorHora * 1.5
    const valorHorasFinaisSemana = horasFinaisSemana * valorHora * 2
    const totalHorasExtras = valorHorasUteis + valorHorasFinaisSemana

    resultado.textContent = `Valor total das horas extras: R$ ${totalHorasExtras.toFixed(2)}`
}

function atualizarDataHora(){
    const agora = new Date(); // O objeto Date pega a data/hora do sistema do usuário:

    const data = agora.toLocaleDateString('pt-BR'); // Formata para padrão brasileiro
    const hora = agora.toLocaleTimeString('pt-BR'); // Hora em tempo real

    const dataHoraEl = document.getElementById('dataHora');

    dataHoraEl.textContent = `Data: ${data} | Hora: ${hora}`;
}

// atualiza a cada segundo
setInterval(atualizarDataHora, 1000);

// executa imediatamente ao carregar
atualizarDataHora();
