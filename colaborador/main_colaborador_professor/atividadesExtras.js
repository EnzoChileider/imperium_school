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

/* Script atividades extras 

let atividadesExtras = [
    // primeiro bimestre
    { bimestre: "1", materia: 'Futsal', aulas: 1},
    { bimestre: "1", materia: 'Música',aulas: 1 },
    { bimestre: "1", materia: 'Dança', aulas: 1},
    // segundo bimestre
    { bimestre: "2", materia: 'Artes Plásticas', aulas: 1},
    { bimestre: "2", materia: 'Culinária',aulas: 1 },
    { bimestre: "2", materia: 'Teatro', aulas: 4},
    // terceiro bimestre
    { bimestre: "3", materia: 'Lógica de Programação', aulas: 1},
    { bimestre: "3", materia: 'Banco de dados relacional básico',aulas: 1 },
    { bimestre: "3", materia: 'Oficinas relacionadas ao tema de sustentabilidade', aulas: 1},
    // quarto bimestre
    { bimestre: "4", materia: 'Atividades esportivas', aulas: 1},
    { bimestre: "4", materia: 'Jogos educativos', aulas: 1},
    { bimestre: "4", materia: 'Gincana', aulas: 1},
  ];

function gerarCabecalhoTabela(table, data){
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data){
        let th = document.createElement("th");
        let text = document.createElement(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function gerarCorpoTabela(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  function limparTela() {
    const tableTag = document.querySelectorAll('table');
    tableTag.forEach(function(table) {
      table.innerHTML = "";
    }); 
}

  function filtroPeriodoSelecionadoAtividadesExtras() {
    limparTela()
    let table = document.querySelector("table");
    let value = document.getElementById("filtro_periodo").value
    let data = Object.keys(atividadesExtras[0]);
  
    var atividadesExtras_bimestre =  atividadesExtras.filter(function(atividadesExtras) {
      return value == "0" ? atividadesExtras : atividadesExtras.bimestre == value;
  });
    gerarCabecalhoTabela(table, data);
    gerarCorpoTabela(table, atividadesExtras_bimestre);


  }
*/


function selecionarAno(){
  Swal.fire({
    Title: 'Selecione o ano da turma',
    input: 'select',
    inputOptions:{
      '1': '6° ano',
      '2': '7° ano',
      '3': '8° ano',
      '4': '9° ano'

    },
    inputPlaceholder: 'Selecionar Ano da turma',
    showCancelButton: true,
    inputValidator: function(value){
      return new Promise(function (resolve, reject){
        if (value !== '') {
          resolve();
        } else {
          resolve('Informe o Ano da turma para consultar as atividades extracurriculares');
        }
      });
    }
  }).then(function (result){
    if (result.isConfirmed){
      Swal.fire({
        //vazio
      })
    }
  }).then(function dispararAlert(){
    Swal.fire({
      Title: 'Selecione o bimestre desejado',
      input: 'select',
      inputOptions:{
        'Futsal, Música e Dança.': '1° Bimestre',
        'Artes Plásticas, Culinária e Teatro.' : '2° Bimestre',
        'Lógica de Programação, Banco de dados relacional básico e Oficinas relacionadas ao tema de sustentabilidade.': '3° Bimestre',
        'Atividades esportivas, Jogos educativos e Gincana.': '4° Bimestre'

      },
      inputPlaceholder: 'Selecionar bimestre',
      showCancelButton: true,
      inputValidator: function(value){
        return new Promise(function (resolve, reject){
          if (value !== '') {
            resolve();
          } else {
            resolve('Informe o bimestre para ver disponibilidade de aulas');
          }
        });
      }
    }).then(function (result){
      if (result.isConfirmed){
        Swal.fire({
          icon: 'success',
          html: 'Atividades extras no bimestre: '+ result.value, 
        })
      }
    })
		

	})
}


