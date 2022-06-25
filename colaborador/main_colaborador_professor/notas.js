  /*const text = document.querySelector('.title_text');
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

function consultarNota(){
    var nota1=document.getElementById("nota1").value;
    var nota2=document.getElementById("nota2").value;
    var nota3=document.getElementById("nota3").value;

    alert('numero 1 é ' + nota1);
    alert('numero 2 é ' + nota2);
    alert('numero 3 é ' + nota3);
        var soma = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);
    alert('a soma é ' + soma);
        var media = soma / 3;
    alert('A media é ' + media);
    
} */


// novo script


function consultarNota(){
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
    }).then(function bimestre(){
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
          })
    }).then(function dispararAlert(){
        Swal.fire({
          html: 'Selecione o Aluno para ver o número de faltas',
          input:'select',
          inputOptions:{
            'Arthur': 'Arthur',
            'Enzo': 'Enzo',
            'Kauan': 'Kauan',
            'Ademilson': 'Ademilson',
            'Allan': 'Allan'
          },
          inputPlaceholder: 'Selecionar Aluno',
          showCancelButton: true,
          inputValidator: function(value){
            return new Promise(function (resolve, reject){
              if (value !== '') {
                resolve();
              } else {
                resolve('Informe o aluno para visualizar o número de faltas');
              }
            });
          }
        }).then(function bimestre(){
            Swal.fire({
                html: 'Selecione o bimestre desejado',
                input: 'select',
                inputOptions:{
                  '1': '1° Bimestre',
                  '2': '2° Bimestre',
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
        }).then(function(result){
            if(result.value == '1'){
                Swal.fire({
                    icon: 'success',
                    html: `<table id="table" border=1>
                    <thead>
                        <tr>
                            <th>Bimestre </th>
                            <th>Portugûes</th>
                            <th>História</th>
                            <th>Ciências</th>
                            <th>Literatura</th>
                            <th>Inglês</th>
                            <th>Filosofia</th>
                            <th>Sociologia</th>
                            <th>Educação Física</th>
                            <th>Artes</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1° Bimestre </td>
                            <td>7,5</td>
                            <td>8,3</td>
                            <td>6,5</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>8,6</td>
                            <td>9</td>
                            <td>5</td>
                            <td>6,7</td>
                        </tr>
                        <tr>
                            <td>2° Bimestre</td>
                            <td>7,5</td>
                            <td>8,3</td>
                            <td>6,5</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>8,6</td>
                            <td>9</td>
                            <td>5</td>
                            <td>6,7</td>
                        </tr>
                        <tr>
                            <td>3° Bimestre</td>
                            <td>7,5</td>
                            <td>8,3</td>
                            <td>6,5</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>8,6</td>
                            <td>9</td>
                            <td>5</td>
                            <td>6,7</td>
                        </tr>
                        <tr>
                            <td>4° Bimestre</td>
                            <td>7,5</td>
                            <td>8,3</td>
                            <td>6,5</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>8,6</td>
                            <td>9</td>
                            <td>5</td>
                            <td>6,7</td>
                        </tr>
            </tbody>
            </table>`
                  })
                }else if(result.value =='2'){
                    Swal.fire({
                      icon: 'success',
                      html: `<table id="table" border=1>
                      <thead>
                          <tr>
                              <th>Bimestre </th>
                              <th>Portugûes</th>
                              <th>História</th>
                              <th>Ciências</th>
                              <th>Literatura</th>
                              <th>Inglês</th>
                              <th>Filosofia</th>
                              <th>Sociologia</th>
                              <th>Educação Física</th>
                              <th>Artes</th>                            
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>1° Bimestre </td>
                              <td>7,5</td>
                              <td>8,3</td>
                              <td>6,5</td>
                              <td>7</td>
                              <td>5,5</td>
                              <td>8,6</td>
                              <td>9</td>
                              <td>5</td>
                              <td>6,7</td>
                          </tr>
                          <tr>
                              <td>2° Bimestre</td>
                              <td>7,5</td>
                              <td>8,3</td>
                              <td>6,5</td>
                              <td>7</td>
                              <td>5,5</td>
                              <td>8,6</td>
                              <td>9</td>
                              <td>5</td>
                              <td>6,7</td>
                          </tr>
                          <tr>
                              <td>3° Bimestre</td>
                              <td>7,5</td>
                              <td>8,3</td>
                              <td>6,5</td>
                              <td>7</td>
                              <td>5,5</td>
                              <td>8,6</td>
                              <td>9</td>
                              <td>5</td>
                              <td>6,7</td>
                          </tr>
                          <tr>
                              <td>4° Bimestre</td>
                              <td>7,5</td>
                              <td>8,3</td>
                              <td>6,5</td>
                              <td>7</td>
                              <td>5,5</td>
                              <td>8,6</td>
                              <td>9</td>
                              <td>5</td>
                              <td>6,7</td>
                          </tr>
              </tbody>
              </table>`
                  })
            }else if(result.value == '3'){
                Swal.fire({
                    icon: 'success',
                    html: `<table id="table" border=1>
                    <thead>
                        <tr>
                            <th>Bimestre </th>
                            <th>Portugûes</th>
                            <th>História</th>
                            <th>Ciências</th>
                            <th>Literatura</th>
                            <th>Inglês</th>
                            <th>Filosofia</th>
                            <th>Sociologia</th>
                            <th>Educação Física</th>
                            <th>Artes</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1° Bimestre </td>
                            <td>7,5</td>
                            <td>8,3</td>
                            <td>6,5</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>8,6</td>
                            <td>9</td>
                            <td>5</td>
                            <td>6,7</td>
                        </tr>
                        <tr>
                            <td>2° Bimestre</td>
                            <td>7,5</td>
                            <td>8,3</td>
                            <td>6,5</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>8,6</td>
                            <td>9</td>
                            <td>5</td>
                            <td>6,7</td>
                        </tr>
                        <tr>
                            <td>3° Bimestre</td>
                            <td>7,5</td>
                            <td>8,3</td>
                            <td>6,5</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>8,6</td>
                            <td>9</td>
                            <td>5</td>
                            <td>6,7</td>
                        </tr>
                        <tr>
                            <td>4° Bimestre</td>
                            <td>7,5</td>
                            <td>8,3</td>
                            <td>6,5</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>8,6</td>
                            <td>9</td>
                            <td>5</td>
                            <td>6,7</td>
                        </tr>
            </tbody>
            </table>`
                  })
            }else if(result.value == '4'){
                Swal.fire({
                    icon: 'success',
                    html: `<table id="table" border=1>
                    <thead>
                        <tr>
                            <th>Bimestre </th>
                            <th>Portugûes</th>
                            <th>História</th>
                            <th>Ciências</th>
                            <th>Literatura</th>
                            <th>Inglês</th>
                            <th>Filosofia</th>
                            <th>Sociologia</th>
                            <th>Educação Física</th>
                            <th>Artes</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1° Bimestre </td>
                            <td>7,5</td>
                            <td>8,3</td>
                            <td>6,5</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>8,6</td>
                            <td>9</td>
                            <td>5</td>
                            <td>6,7</td>
                        </tr>
                        <tr>
                            <td>2° Bimestre</td>
                            <td>7,5</td>
                            <td>8,3</td>
                            <td>6,5</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>8,6</td>
                            <td>9</td>
                            <td>5</td>
                            <td>6,7</td>
                        </tr>
                        <tr>
                            <td>3° Bimestre</td>
                            <td>7,5</td>
                            <td>8,3</td>
                            <td>6,5</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>8,6</td>
                            <td>9</td>
                            <td>5</td>
                            <td>6,7</td>
                        </tr>
                        <tr>
                            <td>4° Bimestre</td>
                            <td>7,5</td>
                            <td>8,3</td>
                            <td>6,5</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>8,6</td>
                            <td>9</td>
                            <td>5</td>
                            <td>6,7</td>
                        </tr>
            </tbody>
            </table>`
                  })
            }else if(result.value == '5'){
                Swal.fire({
                    icon: 'success',
                    html: `<table id="table" border=1>
                    <thead>
                        <tr>
                            <th>Bimestre </th>
                            <th>Portugûes</th>
                            <th>História</th>
                            <th>Ciências</th>
                            <th>Literatura</th>
                            <th>Inglês</th>
                            <th>Filosofia</th>
                            <th>Sociologia</th>
                            <th>Educação Física</th>
                            <th>Artes</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1° Bimestre </td>
                            <td>7,5</td>
                            <td>8,3</td>
                            <td>6,5</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>8,6</td>
                            <td>9</td>
                            <td>5</td>
                            <td>6,7</td>
                        </tr>
                        <tr>
                            <td>2° Bimestre</td>
                            <td>7,5</td>
                            <td>8,3</td>
                            <td>6,5</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>8,6</td>
                            <td>9</td>
                            <td>5</td>
                            <td>6,7</td>
                        </tr>
                        <tr>
                            <td>3° Bimestre</td>
                            <td>7,5</td>
                            <td>8,3</td>
                            <td>6,5</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>8,6</td>
                            <td>9</td>
                            <td>5</td>
                            <td>6,7</td>
                        </tr>
                        <tr>
                            <td>4° Bimestre</td>
                            <td>7,5</td>
                            <td>8,3</td>
                            <td>6,5</td>
                            <td>7</td>
                            <td>5,5</td>
                            <td>8,6</td>
                            <td>9</td>
                            <td>5</td>
                            <td>6,7</td>
                        </tr>
            </tbody>
            </table>`
                  })
            }
          })
      })
  })
}
