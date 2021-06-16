var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

var dataAtual = new Date();
var mesAMostra = dataAtual.getMonth();
var anoAMostra = dataAtual.getFullYear();

function AtualizarCalendario(direcao)
{
    mesAMostra += direcao;
    if(mesAMostra < 0)
    {
        mesAMostra = 11;
        anoAMostra--;
    }
    if(mesAMostra > 11)
    {
        mesAMostra = 0;
        anoAMostra++;
    }

    // Apagando o conteudo das celulas dos dias:
    for(i = 0; i < 6; i++)
        for(j = 0; j < 7; j++)
        {
            document.getElementById("dia_" + i + "_" + j).innerHTML = "";
            document.getElementById("dia_" + i + "_" + j).style.background = "";
        }

    // Mostrando o mes e o ano:
    document.getElementById("mes").innerHTML = meses[mesAMostra]  + " " + anoAMostra;

    var diaPrimeiroDoMes = new Date(anoAMostra, mesAMostra, 1); // Retorna a estrutura inteira da data passada como parametro
    var diaSemanaPrimeiro = diaPrimeiroDoMes.getDay(); // Retorna exatamente o numero do dia da seman (0 a 6, onde 0 é domingo e 6 é sabado)
    var ultimoDiaMesAtual = new Date(anoAMostra, mesAMostra + 1, 0); // Retorna a estrutura da data do ultimo dia do mes
    var ultimoDia = ultimoDiaMesAtual.getDate(); // Retorna um numero de 0-31 

    var diaContador = 1;
    for(i = 0; i < 6; i++)
    {
        for(j = diaSemanaPrimeiro; j < 7; j++)
        {
            if(diaContador <= ultimoDia)
            { document.getElementById("dia_" + i + "_" + j).style.color = "#c9aa71";
                for(k = 0; k < diasMarcados.length; k++){
                   
                    if(diaContador == diasMarcados[k].dia && mesAMostra == diasMarcados[k].mes && anoAMostra == diasMarcados[k].ano)
                    {document.getElementById("dia_" + i + "_" + j).style.background = "#c9aa71";
                    document.getElementById("dia_" + i + "_" + j).style.color = "black";}}
                        

                if(diaContador == dataAtual.getDate() && mesAMostra == dataAtual.getMonth() && anoAMostra == dataAtual.getFullYear())
                {
                    document.getElementById("dia_" + i + "_" + j).style.background = "#c9aa719f";
                    document.getElementById("dia_" + i + "_" + j).style.color = "black";
                }
               
                document.getElementById("dia_" + i + "_" + j).innerHTML = diaContador;
                diaContador++;
            }
            document.getElementById("dia_" + i + "_" + j).style.cursor = "pointer";
        }
        diaSemanaPrimeiro = 0;
    }

}

var diasMarcados = Array();
class DiaMarcado
{
    constructor(dia, mes, ano)
    {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
function SelecionarDia(elementoHTML)
{
    var dia = elementoHTML.innerHTML;

    // Verificando se a data ja existe
    for(k = 0; k < diasMarcados.length; k++)
        if(dia == diasMarcados[k].dia && mesAMostra == diasMarcados[k].mes && anoAMostra == diasMarcados[k].ano)    
            return;
    
    diasMarcados.push(new DiaMarcado(dia, mesAMostra, anoAMostra));
    AtualizarCalendario(0);
}

function MostrarSelecionados()
{
    var text = "";
    for(i = 0; i < diasMarcados.length; i++)
        text += diasMarcados[i].dia + " de " + meses[diasMarcados[i].mes] + " de " + diasMarcados[i].ano + "<br>";
    document.getElementById("diasMarcados").innerHTML = text;
}