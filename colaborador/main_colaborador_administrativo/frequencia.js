const text = document.querySelector('.title_text');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}


let char = 0
let timer = setInterval(onTick, 50);


function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }
}


function complete() {
    clearInterval(timer);
    timer = null;
}



/* SCRIPT DE FREQUÊNCIA 

let faltas = [
    { bimestre: "1", materia: 'JavaScript', faltas: 2},
    { bimestre: "1", materia: 'Java', faltas: 4 },
    { bimestre: "2", materia: 'JavaScript', faltas: 1},
    { bimestre: "2", materia: 'Java', faltas: 3},
    { bimestre: "3", materia: 'JavaScript', faltas: 1},
    { bimestre: "3", materia: 'Java', faltas: 1},
    { bimestre: "4", materia: 'Java', faltas: 2 },
    { bimestre: "4", materia: 'JavaScript', faltas: 5},
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

  function filtroPeriodoSelecionado() {
    limparTela()
    let table = document.querySelector("table");
    let value = document.getElementById("filtro_periodo").value
    let data = Object.keys(faltas[0]);
  
    var faltas_periodo =  faltas.filter(function(falta) {
      return value == "0" ? faltas : falta.bimestre == value;
  });
    gerarCabecalhoTabela(table, data);
    gerarCorpoTabela(table, faltas_periodo);


  }


 FIM SCRIPT DE FREQUÊNCIA */

function selecionarAno() {
    Swal.fire({
        Title: 'Selecione o ano da turma',
        input: 'select',
        inputOptions: {
            '1': '6° ano',
            '2': '7° ano',
            '3': '8° ano',
            '4': '9° ano'

        },
        inputPlaceholder: 'Selecionar Ano da turma',
        showCancelButton: true,
        inputValidator: function (value) {
            return new Promise(function (resolve, reject) {
                if (value !== '') {
                    resolve();
                } else {
                    resolve('Informe o Ano da turma para consultar as atividades extracurriculares');
                }
            });
        }
    }).then(function dispararAlert() {
        Swal.fire({
            html: 'Selecione o Aluno para ver o número de faltas',
            input: 'select',
            inputOptions: {
                'Arthur': 'Arthur',
                'Enzo': 'Enzo',
                'Kauan': 'Kauan',
                'Ademilson': 'Ademilson',
                'Allan': 'Allan'
            },
            inputPlaceholder: 'Selecionar Aluno',
            showCancelButton: true,
            inputValidator: function (value) {
                return new Promise(function (resolve, reject) {
                    if (value !== '') {
                        resolve();
                    } else {
                        resolve('Informe o aluno para visualizar o número de faltas');
                    }
                });
            }
        }).then(function (result) {
            if (result.value == 'Arthur') {
                Swal.fire({
                    icon: 'success',
                    html: 'Número de faltas do aluno: ' + result.value + ' = ' + ' 4'
                })
            } else if (result.value == 'Enzo') {
                Swal.fire({
                    icon: 'success',
                    html: 'Número de faltas do aluno: ' + result.value + ' = ' + ' 2'
                })
            } else if (result.value == 'Kauan') {
                Swal.fire({
                    icon: 'success',
                    html: 'Número de faltas do aluno: ' + result.value + ' = ' + ' 3'
                })
            } else if (result.value == 'Ademilson') {
                Swal.fire({
                    icon: 'success',
                    html: 'Número de faltas do aluno: ' + result.value + ' = ' + ' 3'
                })
            } else if (result.value == 'Allan') {
                Swal.fire({
                    icon: 'success',
                    html: 'Número de faltas do aluno: ' + result.value + ' = ' + ' 1'
                })
            }
        })
    })
}





