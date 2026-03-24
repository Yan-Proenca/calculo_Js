const salarioBruto = document.getElementById("salarioBruto")
const horasExtrasDiasUteis = document.getElementById("horasExtrasDiasUteis")
const horasExtrasFinaisSemana = document.getElementById("horasExtrasFinaisSemana")
const resultado = document.getElementById("resultado")

function calcularHorasExtras() {
    const salario = parseFloat(salarioBruto.value)
    const horasUteis = parseFloat(horasExtrasDiasUteis.value)
    const horasFinaisSemana = parseFloat(horasExtrasFinaisSemana.value)
    const valorHora = salario / 200

    const valorHorasUteis = horasUteis * valorHora
    const valorHorasFinaisSemana = horasFinaisSemana * valorHora * 1.5
    const totalHorasExtras = valorHorasUteis + valorHorasFinaisSemana

    resultado.textContent = `Valor total das horas extras: R$ ${totalHorasExtras.toFixed(2)}`
}




