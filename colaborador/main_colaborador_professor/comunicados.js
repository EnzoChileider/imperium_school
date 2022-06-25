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
          resolve('Informe o Ano da turma para consultar os comunicados de cada bimestre');
        }
      });
    }
    }).then(function (result){
        if(result.value == '1'){
            Swal.fire({
              icon: 'success',
              html: `<table id="table" border=1>
              <thead>
                  <tr>
                      <th>Bimestre</th>
                      <th>Comunicados:</th>
                      
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1° Bimestre </td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                      
                  </tr>
                  <tr>
                      <td>2° Bimestre</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                     
                  </tr>
                  <tr>
                      <td>3° Bimestre</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                     
                  </tr>
                  <tr>
                      <td>4° Bimestre</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
        
                  </tr>
      </tbody>
      </table>`
            })
          }else if(result.value =='2'){
            Swal.fire({
              icon:'success',
              html: `<table id="table" border=1>
              <thead>
                  <tr>
                      <th>Bimestre</th>
                      <th>Comunicados:</th>
                      
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1° Bimestre </td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                      
                  </tr>
                  <tr>
                      <td>2° Bimestre</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                     
                  </tr>
                  <tr>
                      <td>3° Bimestre</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                     
                  </tr>
                  <tr>
                      <td>4° Bimestre</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
        
                  </tr>
      </tbody>
      </table>`
            })
          }else if(result.value =='3'){
              Swal.fire({
                icon: 'success',
                html: `<table id="table" border=1>
                <thead>
                    <tr>
                        <th>Bimestre</th>
                        <th>Comunicados:</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1° Bimestre </td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                        
                    </tr>
                    <tr>
                        <td>2° Bimestre</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                       
                    </tr>
                    <tr>
                        <td>3° Bimestre</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                       
                    </tr>
                    <tr>
                        <td>4° Bimestre</td>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
          
                    </tr>
        </tbody>
        </table>`     })
          }else if (result.value =='4'){
            Swal.fire({
              icon: 'success',
              html: `<table id="table" border=1>
              <thead>
                  <tr>
                      <th>Bimestre</th>
                      <th>Comunicados:</th>
                      
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1° Bimestre </td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                      
                  </tr>
                  <tr>
                      <td>2° Bimestre</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                     
                  </tr>
                  <tr>
                      <td>3° Bimestre</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                     
                  </tr>
                  <tr>
                      <td>4° Bimestre</td>
                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
        
                  </tr>
      </tbody>
      </table>`
            })
          }
    })
}