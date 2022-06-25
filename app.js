const text = document.getElementById('fancy')
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




/* MATERIAS */
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
						<img src="${item.image}" alt="${item.description}" id="img_card">
						<h1>${item.title}</h1>
					</div>
		
			`;
		}

		document.querySelector(".materias").innerHTML = output;
	}
} 