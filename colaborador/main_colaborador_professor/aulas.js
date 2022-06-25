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

/* SCRIPT DE AULAS 

let aulas = [
    // primeiro bimestre
    { bimestre: "1", materia: 'Língua Inglesa', aulas: 1},
    { bimestre: "1", materia: 'Língua Portuguesa',aulas: 3 },
    { bimestre: "1", materia: 'Matemática', aulas: 4},
    { bimestre: "1", materia: 'Física', aulas: 4},
    { bimestre: "1", materia: 'Língua Espanhola', aulas: 2},
    { bimestre: "1", materia: 'Biologia', aulas: 3},
    { bimestre: "1", materia: 'Educação Física', aulas: 1},
    { bimestre: "1", materia: 'Artes', aulas: 1 },
    { bimestre: "1", materia: 'Geografia', aulas: 2},
    { bimestre: "1", materia: 'História', aulas: 2},
    // segundo bimestre
    { bimestre: "2", materia: 'Língua Inglesa', aulas: 1},
    { bimestre: "2", materia: 'Língua Portuguesa',aulas: 3 },
    { bimestre: "2", materia: 'Matemática', aulas: 4},
    { bimestre: "2", materia: 'Física', aulas: 4},
    { bimestre: "2", materia: 'Língua Espanhola', aulas: 2},
    { bimestre: "2", materia: 'Biologia', aulas: 3},
    { bimestre: "2", materia: 'Educação Física', aulas: 1},
    { bimestre: "2", materia: 'Artes', aulas: 1 },
    { bimestre: "2", materia: 'Geografia', aulas: 2},
    { bimestre: "2", materia: 'História', aulas: 2},
    // terceiro bimestre
    { bimestre: "3", materia: 'Língua Inglesa', aulas: 1},
    { bimestre: "3", materia: 'Língua Portuguesa',aulas: 3 },
    { bimestre: "3", materia: 'Matemática', aulas: 4},
    { bimestre: "3", materia: 'Física', aulas: 4},
    { bimestre: "3", materia: 'Língua Espanhola', aulas: 2},
    { bimestre: "3", materia: 'Biologia', aulas: 3},
    { bimestre: "3", materia: 'Educação Física', aulas: 1},
    { bimestre: "3", materia: 'Artes', aulas: 1 },
    { bimestre: "3", materia: 'Geografia', aulas: 2},
    { bimestre: "3", materia: 'História', aulas: 2},
    // quarto bimestre
    { bimestre: "4", materia: 'Língua Inglesa', aulas: 1},
    { bimestre: "4", materia: 'Língua Portuguesa',aulas: 3 },
    { bimestre: "4", materia: 'Matemática', aulas: 4},
    { bimestre: "4", materia: 'Física', aulas: 4},
    { bimestre: "4", materia: 'Língua Espanhola', aulas: 2},
    { bimestre: "4", materia: 'Biologia', aulas: 3},
    { bimestre: "4", materia: 'Educação Física', aulas: 1},
    { bimestre: "4", materia: 'Artes', aulas: 1 },
    { bimestre: "4", materia: 'Geografia', aulas: 2},
    { bimestre: "4", materia: 'História', aulas: 2},
  ];
  
  function gerarCabecalhoTabela(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
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

  function filtroPeriodoSelecionadoAulas() {
    limparTela()
    let table = document.querySelector("table");
    let value = document.getElementById("filtro_periodo").value
    let data = Object.keys(aulas[0]);
  
    var aulas_bimestre =  aulas.filter(function(aulas) {
      return value == "0" ? aulas : aulas.bimestre == value;
  });
    gerarCabecalhoTabela(table, data);
    gerarCorpoTabela(table, aulas_bimestre);


  }


FIM SCRIPT DE Aulas */
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
  }).then(function dispararAlert(){
    Swal.fire({
      html: 'Selecione o bimestre desejado',
      input: 'select',
      inputOptions:{
        '1': '1° Bimestre',
        '2' : '2° Bimestre',
        '3': '3° Bimestre',
        '4': '4° Bimestre'
      },
      inputPlaceholder: 'Selecionar bimestre',
      showCancelButton: true,
      inputValidator: function(value){
        return new Promise(function (resolve, reject){
          if (value !== '') {
            resolve();
          } else {
            resolve('Informe o bimestre para ver as matérias');
          }
        });
      }
    }).then(function (result){
      if (result.value == '1'){
        Swal.fire({
          icon: 'success',
          html: 'Matérias do 1° bimestre:' + ' Língua Inglesa, Língua Portuguesa, Matemática, Física, Língua Espanhola, Biologia, Educação Física, Artes, Geografia, História '
        })
      }else if(result.value =='2'){
        Swal.fire({
          icon:'success',
          html: 'Matérias do 2° bimestre:' + ' Língua Inglesa, Língua Portuguesa, Matemática, Física, Língua Espanhola, Biologia, Educação Física, Artes, Geografia, História '
        })
      }else if(result.value =='3'){
          Swal.fire({
            icon: 'success',
            html: 'Matérias do 3° bimestre:' + ' Língua Inglesa, Língua Portuguesa, Matemática, Física, Língua Espanhola, Biologia, Educação Física, Artes, Geografia, História '        })
      }else if (result.value =='4'){
        Swal.fire({
          icon: 'success',
          html: 'Matérias do 4° bimestre:' + ' Língua Inglesa, Língua Portuguesa, Matemática, Física, Língua Espanhola, Biologia, Educação Física, Artes, Geografia, História '      })
      }
    })
    
  })



}
