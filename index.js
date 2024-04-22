
let especialista1 = document.getElementById("opcao");
let dentista = document.getElementById("dentista");
let endocrino = document.getElementById("endocrino");
let ginecologista = document.getElementById("ginecologista");
let nutricionista = document.getElementById("nutricionista");
let nefrologista = document.getElementById("nefrologista");
let psiquiatra = document.getElementById("psiquiatra");

let nomeMedico = document.getElementById("nome");
let res = document.getElementById("resultado");
let dia = document.getElementById("diaConsulta");

dataAtual();

especialista1.addEventListener('change', function() {
    nomeMedico.value = especialista1.value;

    switch (especialista1.value) {
        case dentista.value:
            nomeMedico.value = "Alfredo Francesquini";
            break;
      
        case endocrino.value:
            nomeMedico.value = "Cintia Silva";
            break;
      
        case ginecologista.value:
            nomeMedico.value = "Márcia Almeida";
            break;
      
        case nefrologista.value:
            nomeMedico.value = "Gilberto Ferreira";
            break;
      
        case nutricionista.value:
            nomeMedico.value = "Fernanda Watanabe";
            break;
      
        case psiquiatra.value:
            nomeMedico.value = "Carolina Prudente";
            break;
    }
});

function mostrarPlanilha() {
    let nomeMedico = document.getElementById("nome").value;
    let hora = document.getElementById("hora").value;
    let dia = document.getElementById("diaConsulta").value;
    let especialista1 = document.getElementById("opcao").value;

    hora.value;
    resultado2.textContent = hora;
    especialista1.value;
    Especialidade.textContent = especialista1;
    nomeMedico.value;
    nomeDoMedico.textContent = nomeMedico;
    dia.value;
    diaDaConsulta.textContent = dia;

    limparInput();
}

radio.addEventListener('click', function() {
    mostrarPlanilha();
    openModal();

    if (mostrarPlanilha) {
        modal.style.display = "inline";
    }
});

btn.addEventListener('click', mostrarPlanilha);

function dataAtual() {
    let data = document.getElementById("data");
    let dataatual = new Date();
    let ano = dataatual.getFullYear();
    let mes = dataatual.getMonth() + 1;
    let dia1 = dataatual.getDate();
    let dataFormatada = dia1 + '/' + (dia1 < 10 ? '0' : '') + (mes < 10 ? '' : '0') + mes + '/' + ano;
    data.value = dataFormatada;
}

function limparInput() {
    hora.value = "";
    nome.value = "";
    opcao.value = "";
    diaConsulta.value = "";
}

function openModal() {
    let meuModal = document.getElementById('myModal').style.display = 'inline';
}

function closeModal() {
    modal.style.display = "none";
    iconeVermelho.removeAttribute('none');
    iconeVermelho.style.display = 'inline';

    // Elementos a serem modificados
    const elementos = [resultado2, Especialidade, nomeDoMedico, diaDaConsulta];
    
    // Definindo estilos e conteúdo
    elementos.forEach(elemento => {
        elemento.innerHTML = `<s>${elemento.innerHTML}</s>`;
        elemento.style.color = "red";
    });

    document.getElementById('myModal').style.display = 'none';
}

function confirmAr() {
    icone.style.display = 'inline';
    const elementos = [resultado2, Especialidade, nomeDoMedico, diaDaConsulta];
    elementos.forEach(elemento1 => {
        elemento1.style.color = "blue";
    });
    document.getElementById('myModal').style.display = 'none';
    modal.style.display = "none";
}
