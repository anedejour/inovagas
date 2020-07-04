var vetorData = [];
var vetorValor = [];


var valor = document.getElementById("valorCredito");  
var varData = document.getElementById("data");


var resposta = document.getElementById("resposta");


function historico(){

    if (varData.value != "" && valor.value !== ""){
        vetorData.push(varData.value);
        vetorValor.push(valor.value);

        data.value="";
        valorCredito.value="";
        credito.value="";
        debito.value="";
        numeroCartao.value="";
        valorCredito.focus();


    }
    else{
        alert("Insira os dados corretamente");
        document.getElementById("valorCredito").focus();
    }
    var result = "";

    for(i=0; i<vetorValor.length; i++){
        result += "\t\t\t" + vetorData[i] + "\t\t\t\t\t\t\t" + vetorValor[i] + "\n";
    }
    document.getElementById("resposta").textContent = result;
}
var btEnviar = document.getElementById("enviar");
btEnviar.addEventListener("click", historico);