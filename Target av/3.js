// Dados de faturamento diário
const faturamentoDiario = [1000, 1200, 800, 1500, 1400, 1600, 1100, 1300, 1700, 1250, 0, 0, 1350, 1450, 1550, 1650, 0, 0, 1800, 1900, 2000, 0, 0, 2100, 2200, 2300, 2400, 0, 0];

// Função para calcular o menor valor de faturamento
function menorFaturamento(faturamento) {
    return Math.min(...faturamento);
}

// Função para calcular o maior valor de faturamento
function maiorFaturamento(faturamento) {
    return Math.max(...faturamento);
}

// Função para calcular a média mensal de faturamento, ignorando dias sem faturamento
function mediaMensal(faturamento) {
    let total = 0;
    let contador = 0;
    for (let valor of faturamento) {
        if (valor > 0) {
            total += valor;
            contador++;
        }
    }
    return total / contador;
}

// Função para contar o número de dias em que o faturamento diário foi superior à média mensal
function diasAcimaMedia(faturamento) {
    const media = mediaMensal(faturamento);
    let diasAcima = 0;
    for (let valor of faturamento) {
        if (valor > media) {
            diasAcima++;
        }
    }
    return diasAcima;
}

// Chamada das funções para obter os resultados
const menorValor = menorFaturamento(faturamentoDiario);
const maiorValor = maiorFaturamento(faturamentoDiario);
const diasAcima = diasAcimaMedia(faturamentoDiario);

// Exibindo os resultados
console.log("Menor valor de faturamento:", menorValor);
console.log("Maior valor de faturamento:", maiorValor);
console.log("Número de dias com faturamento acima da média:", diasAcima);
