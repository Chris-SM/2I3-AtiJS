if(localStorage.getItem("Reg") == null || localStorage.getItem("Reg") == "NaN")
{
    localStorage.setItem("Reg",1);
}
var reg = Number(localStorage.getItem("Reg"));


function salvar() {
    var Nome = document.getElementById("Nome").value;
    var Curso = document.getElementById("Curso").value;
    var Ano = document.getElementById("Ano").value;
    alert("A");
    localStorage.setItem("Nome"+reg,Nome);
    localStorage.setItem("Curso"+reg,Curso);
    localStorage.setItem("Ano"+reg,Ano);
    reg ++;
    localStorage.setItem("Reg",reg);
    Nome = "";
    Curso = "";
    Ano = "";
}


function Pesq(){
var Pesqui = "<table>";
Pesqui += "<tr><th>Nome</th><th>Curso</th><th>Ano de Conclusão</th></tr>"
    for (let index = 1; index < reg; index++) {
        if(localStorage.getItem("Nome"+index) == ""){
        }
        else{
            Pesqui += "<tr>";
            Pesqui += "<td>"+localStorage.getItem("Nome"+index)+"</td>";
            Pesqui += "<td>"+localStorage.getItem("Curso"+index)+"</td>";
            Pesqui += "<td>"+localStorage.getItem("Ano"+index)+"</td>";
            Pesqui += "</tr>";
        }
    }
    Pesqui += "</table>";
    document.getElementById("AlunosCadas").innerHTML = Pesqui;
}

function PesqEsp(Campo){
    if(Campo == null || Campo == "")
    {
        Pesq();
    }
    var foi = false;
    for (let index = 0; index < reg; index++) {
        if(Campo == localStorage.getItem("Nome"+index))
        {
            Nome = localStorage.getItem("Nome"+index);
            Curso = localStorage.getItem("Curso"+index);
            Ano =localStorage.getItem("Ano"+index);
            foi = true;
            return;
        }
        else
        {
            foi = false;
        }
    }
    if(!foi)
    {
        alert("nada encontrado - Mostrando tudo");
        Pesq();
    }
}