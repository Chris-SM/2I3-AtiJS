if(localStorage.getItem("Reg") == null || localStorage.getItem("Reg") == "NaN")
{
    localStorage.setItem("Reg",1);
}
var reg = Number(localStorage.getItem("Reg"));

function salvar() {
    var Nome = document.getElementById("Nome").value;
    var Curso = document.getElementById("Curso").value;
    var Ano = document.getElementById("Ano").value;
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
    for (let index = 1; index < reg; index++) {
        if(Campo == localStorage.getItem("Nome"+index))
        {
            Nome = localStorage.getItem("Nome"+index);
            Curso = localStorage.getItem("Curso"+index);
            Ano =localStorage.getItem("Ano"+index);
            foi = true;
            var Pesqui = "<table>"
            Pesqui += "<tr>";
            Pesqui += "<td>"+localStorage.getItem("Nome"+index)+"</td>";
            Pesqui += "<td>"+localStorage.getItem("Curso"+index)+"</td>";
            Pesqui += "<td>"+localStorage.getItem("Ano"+index)+"</td>";
            Pesqui += "</tr>";
            Pesqui += "</table>";
            document.getElementById("AlunosCadas").innerHTML = Pesqui;
            return;
        }
        else
        {
            foi = false;
        }
    }
    if(!foi)
    {
        alert("Nada encontrado - Mostrando tudo");
        Pesq();
    }
}

function MudoPesq(Escrito) {
    if(Escrito == "" || Escrito == null)
    {
        document.getElementById('ConfPesq').innerHTML = "Mostrar Todos";
    }
    else
    {
        document.getElementById('ConfPesq').innerHTML = "Pesquisar";
    }
}

function Alterar(){
    var digi = prompt("Digite o nome da pessoa que gostaria de alterar");
    var Conf = confirm("Você realmente deseja alterar: "+digi);
    var Foi = false;
    if(Conf && !(digi == "" || digi == null))
    {
        for (let index = 1; index < reg; index++) {
            if(localStorage.getItem("Nome"+index) == digi){
                var NomeEnc = localStorage.getItem("Nome"+index);
                var CursoEnc = localStorage.getItem("Curso"+index);
                var AnoEnc = localStorage.getItem("Ano"+index);
                var RegPesq = index;
                Foi = true;
            }
            else if(index == reg-1 && !Foi){
                alert("Nada Encontrado");
                return;
            }
        }
    }
    else
    {
        return;
    }
    alert("Encontrado");
    var NewNome = prompt("Digite o novo Nome: ",NomeEnc);
    var NewCurso = prompt("Digite o novo Curso: ",CursoEnc);
    var NewAno = prompt("Digite o novo Ano de Conclusão: ",AnoEnc);
    if(NewAno<1900)
    NewAno = 1900;
    localStorage.setItem("Nome"+RegPesq,NewNome);
    localStorage.setItem("Curso"+RegPesq,NewCurso);
    localStorage.setItem("Ano"+RegPesq,NewAno);
    document.getElementById("AlunosCadas").innerHTML = "";
}

function Remover(){
    var digi = prompt("Digite o nome da pessoa que gostaria de Excluir: ");
    var Conf = confirm("Você realmente deseja excluir: "+digi);
    var Foi = false;
    if(Conf && !(digi == "" || digi == null))
    {
        for (let index = 1; index < reg; index++) {
            if(localStorage.getItem("Nome"+index) == digi){
                var RegRemo = index;
                Foi = true;
            }
            else if(index == reg-1 && !Foi){
                alert("Nada Encontrado");
                return;
            }
        }
    }
    else
    {
        return;
    }
    if(confirm("Certeza mesmo que deseja excluir: "+localStorage.getItem("Nome"+RegRemo)+"?"))
    {
        if(localStorage.getItem("Nome"+RegRemo+1) == null || localStorage.getItem("Nome"+RegRemo)== "")
        for (let index = RegRemo; index < reg; index++) {
            {
                localStorage.setItem("Nome"+index,localStorage.getItem("Nome"+(index+1)));
                localStorage.setItem("Curso"+index,localStorage.getItem("Curso"+(index+1)));
                localStorage.setItem("Ano"+index,localStorage.getItem("Ano"+(index+1)));
            }
        }
        localStorage.removeItem("Nome"+reg);
        localStorage.removeItem("Curso"+reg);
        localStorage.removeItem("Ano"+reg);
        if(reg>1)
        {
            reg --;
            localStorage.setItem("Reg",reg);
        }
    }
    document.getElementById("AlunosCadas").innerHTML = "";
}