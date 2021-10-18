(function(){
    let formRegistro = document.getElementsByName('form-input');
        for (let i = 0; i < formRegistro.length; i++) {
            formRegistro[i].addEventListener('blur', function(){
                if (this.value.length >= 1) {
                    this.nextElementSibling.classList.add('active');
                    this.nextElementSibling.classList.remove('error');
                } else if (this.value.length = " ") {
                    this.nextElementSibling.classList.add('error');
                    this.nextElementSibling.classList.remove('active');
                } else {
                    this.nextElementSibling.classList.remove('active');
                }
            })
        }
}())


const nombre= document.getElementById("regnombre");
const apellido= document.getElementById("regap");
const fechan= document.getElementById("regfecha");
const email= document.getElementById("regcorreo");
const telefono= document.getElementById("regtelf");
const contra2= document.getElementById("regpass");
const form= document.getElementById("form-codigo");
const listinputs= document.querySelectorAll(".input-group")

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let cond=validacion();
    if(cond == true ){
        enviar();
        form.lastElementChild.innerHTML="Enviado Correctamente"
    }
});

    function validacion(){
    form.lastElementChild.innerHTML="";
    let cond=true;
    listinputs.forEach((element) =>{
        element.lastElementChild.innerHTML="";
    });

    if(nombre.value.length < 6 || nombre.value.trim() == ""){
        let entrada=document.querySelector(".regnombre");
        entrada.lastElementChild.innerHTML="El nombre debe contener minimo 6 caracteres"
        cond=false;
    }    

    if(apellido.value.length < 6 || apellido.value.trim() == ""){
        let entrada=document.querySelector(".regap");
        entrada.lastElementChild.innerHTML="El Apellido debe contener minimo 6 caracteres"
        cond=false;
    }

    if(fechan.value.length < 1 || fechan.value.trim() == ""){
        let entrada=document.querySelector(".regfecha");
        entrada.lastElementChild.innerHTML="Fecha Invalida"
        cond=false;
    }

    if(email.value.length < 6 || email.value.trim() == ""){
        let entrada=document.querySelector(".regcorreo");
        entrada.lastElementChild.innerHTML="Correo Incorrecto"
        cond=false;
    }

    if(telefono.value.length != 10 || telefono.value.trim() == "" || isNaN(telefono.value)){
        let entrada=document.querySelector(".regtelf");
        entrada.lastElementChild.innerHTML="El numero debe contener 10 caracteres"
        cond=false;
    }

    if(contra2.value.length < 8 || contra2.value.trim() == ""){
        let entrada=document.querySelector(".regpass");
        entrada.lastElementChild.innerHTML="La contraseña debe contener minimo 8 caracteres"
        cond=false;
    }
   return cond;

    
}
    
   function enviar(){
        form.reset();
    }