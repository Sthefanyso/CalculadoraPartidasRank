
// cria a variável saldoVitorias como global, chama a função e passa os pârametros que serão utilizados
var saldoVitorias = calcularPartidas(50, 25)
var nivel = verificarNivel(50)

// executa o calcula e armazena na variável saldoVitorias
function calcularPartidas(vitorias, derrotas) {
    return vitorias - derrotas
}

// passa a quantidade de vitórias como pârametro e faz a verificação entre os intervalos, retorna o nível
function verificarNivel(vitorias) {
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    } 
    
    return nivel
}

console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)
