function Calcular()
{
    var dddOrigem = parseInt(document.getElementById('dddOrigem').value);
    var dddDestino = parseInt(document.getElementById('dddDestino').value);
    var minutosFalados = parseInt(document.getElementById('minutos').value);
    var plano = parseInt(document.getElementById('plano').value);

    if (isNaN(dddDestino) || isNaN(dddOrigem) || isNaN(minutosFalados) || isNaN(plano)) {
        alert("Todos os campos devem ser preenchidos");
        return;
    }

    var tarifa = 0.0;
    var precoComPlano = 0.0;
    var precoSemPlano = 0.0;

    if (dddOrigem === dddDestino) {
        alert("O DDD de destino deve ser diferente do DDD de origem");
        return;
    }

    if (dddOrigem == 11) {
        switch (dddDestino) {
            case 16:
                tarifa = 1.90;
                break;
            case 17:
                tarifa = 1.70;
                break;
            case 18:
                tarifa = 0.90;
                break;
            default:
        }
    }
    else {
        if (dddDestino != 11) {
            alert("O DDD de destino deve ser (011) quando o DDD de origem for (016), (017) ou (018)");
            return;
        }
        switch (dddOrigem) {
            case 16:
                tarifa = 2.90;
                break;
            case 17:
                tarifa = 2.70;
                break;
            case 18:
                tarifa = 1.90;
                break;
            default:
        }
    }

    if (minutosFalados > plano) {
        precoComPlano = (minutosFalados - plano) * tarifa;
    }

    precoSemPlano = (minutosFalados * tarifa).toFixed(2);
    precoComPlano = precoComPlano.toFixed(2);

    document.getElementById('comFaleMais').innerHTML = "R$ " + precoComPlano;
    document.getElementById('semFaleMais').innerHTML = "R$ " + precoSemPlano;

    MostrarResultado();
}

function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

function MostrarResultado()
{
    x = document.getElementById('tabelaResultado').style = "display: block";
}

