let especialista1 = document.getElementById("opcao")
let nomeMedico = document.getElementById("nome")
let dentista = document.getElementById("dentista")
let endocrino = document.getElementById("endocrino")
let ginecologista = document.getElementById("ginecologista")
let nutricionista = document.getElementById("nutricionista")
let nefrologista = document.getElementById("nefrologista")
let psiquiatra = document.getElementById("psiquiatra")
let res = document.getElementById("resultado")
let dia = document.getElementById("diaConsulta")
    dataAtual()
especialista1.addEventListener('change',function(){

  
      nomeMedico.value = especialista1.value
    
   if(especialista1.value === dentista.value){
nomeMedico.value = "Alfredo Francesquini"
}
   
if(especialista1.value === endocrino.value){
nomeMedico.value = "Cintia Silva"
}
if(especialista1.value === ginecologista .value){
nomeMedico.value = "Márcia Almeida"
}
if(especialista1.value === nefrologista.value){
nomeMedico.value = "Gilberto Ferreira"
}
if(especialista1.value === nutricionista.value){
nomeMedico.value = "Fernanda Watanabe"
}
if(especialista1.value === psiquiatra.value){
nomeMedico.value = "Carolina Prudente"
}



function mostrarPlanilha(){
   
    let res = document.getElementById("resultado")
    let nomeMedico = document.getElementById("nome").value
    let data = document.getElementById("data")
    let hora = document.getElementById("hora").value
    let dia = document.getElementById("diaConsulta").value
    let btn = document.getElementById("btn")
    let resultado2 = document.getElementById("resultado2")
    let Especialidade = document.getElementById("Especialidade")
    let especialista1 = document.getElementById("opcao").value
    let nomeDoMedico = document.getElementById("nomeDoMedico")
    let diaDaConsulta = document.getElementById("diaDaConsulta")
    let icone2 = document.getElementById("icone2")

hora.value
   resultado2.textContent =  hora

  especialista1.value 
Especialidade.textContent =  especialista1

nomeMedico.value
nomeDoMedico.textContent = nomeMedico

dia.value
diaDaConsulta.textContent = dia


   limparInput()

}



 
      


radio.addEventListener('click',function(){
let radio = document.getElementById("radio")
let icone = document.getElementById("icone")
let iconeVermelho = document.getElementById("iconeVermelho")
let btn = document.getElementById('nao')
let btn2 = document.getElementById('sim')
  
mostrarPlanilha()
openModal()

if(mostrarPlanilha){
    modal.style.display = "inline";

}


})

      btn.addEventListener('click',mostrarPlanilha)
       
    }) 


function dataAtual(){
    let data = document.getElementById("data")
    let dataatual = new Date()
    let ano = dataatual.getFullYear()
    let mes = dataatual.getMonth() + 1
    let dia1 = dataatual.getDate()
    let dataFormatada = dia1 + '/' + (dia1 < 10 ? '0' : '') + (mes < 10 ? '' : '0') + mes + '/' +   ano
   data.value = dataFormatada
}



function limparInput(){
hora.value = ""
nome.value = ""
opcao.value = ""
diaConsulta.value = ""

}

 function openModal() {
   let meuModal = document.getElementById('myModal').style.display = 'inline';
   
   
  
  }

  function closeModal() {
     let btn = document.getElementById("nao")
     modal.style.display = "none";
     
    iconeVermelho.removeAttribute('none')
       iconeVermelho.style.display = 'inline'
       resultado2.innerHTML = `<s>` + resultado2.innerHTML + `<s>`
           
           Especialidade.innerHTML = `<s>` + Especialidade.innerHTML + `<s>`
               nomeDoMedico.innerHTML = `<s>` + nomeDoMedico.innerHTML + `<s>`
                   diaDaConsulta.innerHTML = `<s>` + diaDaConsulta.innerHTML + `<s>`
nomeDoMedico.style.color = "red"
diaDaConsulta.style.color = "red"
Especialidade.style.color = "red"
resultado2.style.color ="red" 
document.getElementById('myModal').style.display = 'none';
   
  }

  function confirmAr() {
    let btn2 = document.getElementById('sim')
       icone.style.display = 'inline'
       nomeDoMedico.style.color = "blue"
diaDaConsulta.style.color = "blue"
Especialidade.style.color = "blue"
resultado2.style.color ="blue" 
document.getElementById('myModal').style.display = 'none';
modal.style.display = "none";
  
  }
   








 
   



 

 







                      

 



