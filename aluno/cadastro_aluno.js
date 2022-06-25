/* CADASTRO */

showData();
function saveData()
{
let name,email,psw;
name=document.getElementById("name").value;
email=document.getElementById("email").value;
data_nascimento = document.getElementById("data_nascimento").value;
box=document.getElementById("box").value;
sexo = document.getElementById("sexo").value;
serie = document.getElementById("serie").value;
cod = document.getElementById("cod").value;

location.reload(true);

let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("cad"))?JSON.parse(localStorage.getItem("cad")):[]
if(user_records.some((v)=>{return v.email==email}))
{
  alert("duplicate data");
} else{
  user_records.push({
  "name":name,
  "cod":cod,
  "data_nascimento":data_nascimento,
  "email":email,
  "box":box,
  "sexo":sexo,
  "serie":serie   

});

localStorage.setItem("cad",JSON.stringify(user_records));
}
showData();
}

function showData()
{
  document.getElementById("showUsers").innerHTML="";
  let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("cad"))?JSON.parse(localStorage.getItem("cad")):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {
      let addDiv=document.createElement('div');
  addDiv.className="row";
  addDiv.innerHTML='<div class="inner_list"> <h1> Nome: '+user_records[i].name+'<br> <h1> Código de Acesso : '+user_records[i].cod+' </h1> <br> <h1>Data de Nascimento : '+user_records[i].data_nascimento+'</h1> <br> <h1> Email :'+user_records[i].email+'</h1> <br> <h1>Sexo: '+user_records[i].sexo+'</h1> <br> <h1>Série : '+user_records[i].serie+'  </h1><br> <h1> Comentário : '+user_records[i].box+'</h1><br> </div>';
  document.getElementById("showUsers").appendChild(addDiv);

    }
  }
  }
          




/* CADASTRO */