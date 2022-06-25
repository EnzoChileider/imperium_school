function dispararAlert(){
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
        if(result.value == '1'){
            Swal.fire({
                html: 'A turma do 6° ano Possui 23 alunos, 9 matérias ... '
            })
        }else if (result.value == '2'){
            Swal.fire({
                html: 'A turma do 7° ano Possui 22 alunos, 9 matérias ... '
            })
        }else if (result.value == '3'){
            Swal.fire({
                html: 'A turma do 8° ano Possui 25 alunos, 9 matérias ... '
            })
        }else if (result.value == '4'){
            Swal.fire({
                html: 'A turma do 9° ano Possui 21 alunos, 11 matérias ... '
            })
        }
    })
}