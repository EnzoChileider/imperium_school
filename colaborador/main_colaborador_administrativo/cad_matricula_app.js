
const text = document.querySelector('.title_text');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i=0; i<splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}


let char = 0
let timer = setInterval(onTick,50);


function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete();
        return;
    }
}


function complete(){
    clearInterval(timer);
    timer = null;
}





showData();
function saveData()
{
let name,email,psw;
name=document.getElementById("name").value;
email=document.getElementById("email").value;
texto=document.getElementById("texto").value;
serie = document.getElementById("serie").value;
materia = document.getElementById("materia").value
location.reload(true);


let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("cad_matri"))?JSON.parse(localStorage.getItem("cad_matri")):[]
if(user_records.some((v)=>{return v.email==email}))
{
  alert("duplicate data");
} else{
  user_records.push({
  "name":name,
  "email":email,
  "texto":texto,
  "serie":serie,
  "materia":materia   

});

localStorage.setItem("cad_matri",JSON.stringify(user_records));
}
showData();
}

function showData()
{
  document.getElementById("showUsers2").innerHTML="";
  let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("cad_matri"))?JSON.parse(localStorage.getItem("cad_matri")):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {
      let addDiv=document.createElement('div');
  addDiv.className="row";
  addDiv.innerHTML='<div class="inner_list_duvida"><br><h1> Nome: '+user_records[i].name+'<br> <h1>Email : '+user_records[i].email+' </h1> <br> <h1> Data de nascimento : '+user_records[i].materia+' </h1> <br> <h1>Série : '+user_records[i].serie+'</h1> <br> <h1> Dúvida :'+user_records[i].texto+'</h1> <br></div>';
  document.getElementById("showUsers2").appendChild(addDiv);

    }
  }
  }


