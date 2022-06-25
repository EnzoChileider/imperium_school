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


/* Materias */
let http = new XMLHttpRequest();
http.open('get', 'materias.json', true);

http.send();


http.onload = function(){

	if(this.readyState == 4 && this.status == 200){

		let materias = JSON.parse(this.responseText);

		let output = "";

		for(let item of materias){
			output += `

				
			
					<div class="inner_card_materias">
						<img src="${item.image}" alt="${item.description}" id="img_card_materias">
						<h1>${item.title}</h1>
					</div>
			`;
		}

		document.querySelector(".materias").innerHTML = output;
	}
} 

/* Fim Materias */


/*Lista Materiais */

function alert_report(){
	Swal.fire(
		`
		<div class="lista_materiais">
		  <h1>Lista de Materiais : </h1>
		  <h2>-7 Lápis comuns</h2>
		  <h2>-5 Canetas bic </h2>
		  <h2>-1 Caderno 10 matérias</h2>
		  <h2>-1 Tesoura sem ponta</h2>
		  <h2>-1 cola branca ou bastão</h2>
	
		</div>
	
		`
	  )
	}
	

/* Fim Lista Materiais */




/* INFO MATRÍCULA */

function info_matricula(){
	Swal.fire(
		`
		<div class="lista_materiais">
		  <h1>Informações do Aluno : </h1>
		  <h2>Nome: João da Silva</h2>
		  <h2>Data de nascimento: 25/06/2011 : </h2>
		  <h2>Telefone para contato : (41) 7812-6535</h2>
		  <h2>Série : 5º</h2>
		
		</div>
	
		`
	  )
	}



/* FIM INFO MATRÍCULA */




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
          
/* FIM CADASTRO */


/* FINANCEIRO */

function consultar_pagamento(){
	Swal.fire({
		title: 'Select Outage Tier',
		input: 'select',
		inputOptions: {
		  '<iframe src="boletos/janeiro.pdf" frameborder="0" style="width: 100%; height:800px;"></iframe>': 'Janeiro',
		  '<iframe src="boletos/fevereiro.pdf" frameborder="0" style="width: 100%; height:800px;"></iframe>': 'Fevereiro',
		  '<iframe src="boletos/março.pdf" frameborder="0" style="width: 100%; height:800px;"></iframe>': 'Março',
		  '<iframe src="boletos/abril.pdf" frameborder="0" style="width: 100%; height:800px;"></iframe>': 'Abril',
		  '<iframe src="boletos/maio.pdf" frameborder="0" style="width: 100%; height:800px;"></iframe>': 'Maio',
		  '<iframe src="boletos/junho.pdf" frameborder="0" style="width: 100%; height:800px;"></iframe>': 'Junho',
		  '<iframe src="boletos/julho.pdf" frameborder="0" style="width: 100%; height:800px;"></iframe>': 'Julho',
		  '<iframe src="boletos/agosto.pdf" frameborder="0" style="width: 100%; height:800px;"></iframe>': 'Agosto',
		  '<iframe src="boletos/setembro.pdf" frameborder="0" style="width: 100%; height:800px;"></iframe>': 'Setembro',
		  '<iframe src="boletos/outubro.pdf" frameborder="0" style="width: 100%; height:800px;"></iframe>': 'Outubro',
		  '<iframe src="boletos/novembro.pdf" frameborder="0" style="width: 100%; height:800px;"></iframe>': 'Novembro',
		  '<iframe src="boletos/dezembro.pdf" frameborder="0" style="width: 100%; height:800px;"></iframe>': 'Dezembro',
		},
		inputPlaceholder: 'escolha o mês correspondente',
		showCancelButton: true,
		inputValidator: function (value) {
		  return new Promise(function (resolve, reject) {
			if (value !== '') {
			  resolve();
			} else {
			  resolve('You need to select a Tier');
			}
		  });
		}
	  }).then(function (result) {
		if (result.isConfirmed) {
		  Swal.fire({
			icon: 'success',
			html: 'Mês: ' + result.value
		  });
		}

		
	  });

	}


/* FIM FINANCEIRO */ 



/* 

	Swal.fire(
		`
		<div class="lista_materiais">
		  <h1>Lista de Materiais : </h1>
		  <h2>-7 Lápis comuns</h2>
		  <h2>-5 Canetas bic </h2>
		  <h2>-1 Caderno 10 matérias</h2>
		  <h2>-1 Tesoura sem ponta</h2>
		  <h2>-1 cola branca ou bastão</h2>
	
		</div>
	
		`
	  )

	  html: ` <iframe src="boletos/TESTE.pdf" frameborder="0" style="width: 100%; height:800px;"></iframe>



function consultar_pagamento(mes){
	switch(mes) {
        case "janeiro":
            alert("funcionando");
            break;
        case "fevereiro":
            location.href("teste2.html")
            break;

        case "nothing":
            location.reload()
    }




	}

*/