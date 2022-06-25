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






















/* NOTAS */


let http1 = new XMLHttpRequest();
http1.open('get', 'materias.json', true);

http1.send();


http1.onload = function(){

	if(this.readyState == 4 && this.status == 200){

		let materias1 = JSON.parse(this.responseText);

		let output1 = "";

		for(let item of materias1){
			output1 += `

					<div class="inner_card_notas">
						<img src="${item.image}" alt="${item.description}" id="img_card_notas">
						<h1>${item.title}</h1>
                        <h2>1º Bimestre : ${item.nota1}</h2>
                        <h2>2º Bimestre : ${item.nota2}</h2>
                        <h2>3º Bimestre : ${item.nota3}</h2>
                        <h2>4º Bimestre : ${item.nota4}</h2>
					</div>
			`;
		}

		document.querySelector(".notas").innerHTML = output1;
	}
} 




/* FIM NOTAS */



/* LISTA NOTAS */


function listar_notas(){
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
	

/* FIM LISTA NOTAS*/ 