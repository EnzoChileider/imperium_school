
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





showData();
function enviar() {
    let name, psw;
    name = document.getElementById("name").value;

    texto = document.getElementById("texto").value;


    location.reload(true);


    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("comu1")) ? JSON.parse(localStorage.getItem("comu1")) : []
    if (user_records.some((v) => { return v.name == name })) {
        alert("duplicate data");
    } else {
        user_records.push({
            "name": name,

            "texto": texto,



        });

        localStorage.setItem("comu1", JSON.stringify(user_records));
    }
    showData();
}

function showData() {
    document.getElementById("showUsers1").innerHTML = "";
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("comu1")) ? JSON.parse(localStorage.getItem("comu1")) : []
    if (user_records) {
        for (let i = 0; i < user_records.length; i++) {
            let addDiv = document.createElement('div');
            addDiv.className = "row";
            addDiv.innerHTML = '<div class="inner_list_duvida"><br><h2> Nome: ' + user_records[i].name + '<br> <h2>Título : ' + user_records[i].texto + '</h2> <br></div>';
            document.getElementById("showUsers1").appendChild(addDiv);

        }
    }
}

