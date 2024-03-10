// Valores de faturamento mensal por estado
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Função para calcular o total de faturamento mensal
function calcularTotalFaturamento(faturamentoPorEstado) {
    let total = 0;
    for (let estado in faturamentoPorEstado) {
        total += faturamentoPorEstado[estado];
    }
    return total;
}

// Chamada da função para calcular o total de faturamento mensal
const totalFaturamento = calcularTotalFaturamento(faturamentoPorEstado);

// Exibindo o total de faturamento mensal
console.log("Total de faturamento mensal:", totalFaturamento.toFixed(2));
