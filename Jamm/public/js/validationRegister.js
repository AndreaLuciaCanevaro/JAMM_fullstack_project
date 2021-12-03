// Validación de REGISTRO //
window.addEventListener("load",function(){
      
let formulario = document.querySelector(".create-form");
formulario.addEventListener("submit", function(e){
      e.preventDefault();

let errores=[];

      //validación de fullName//
let campoFullName = document.querySelector("input.fullName");
if (campoFullName.value == ""){
errores.push("Debe completar el campo con su nombre y apellido");
} else if (campoFullName.value.length<3){
errores.push("El campo debe tener al menos 2 caracteres");
}
	//validación de email//
let campoEmail = document.querySelector("input.email");
let emaill = campoEmail.value;
const charEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+\.\S+/.test(emaill);
if(campoEmail.value == ""){
errores.push ("Debe completar el campo con su email");
} else if (!charEmail){
   errores.push ("El campo mail debe contener el siguiente formato: usuario@email.com")};

	//validación de password//
let campoPassword = document.querySelector("input.password");
let passwordd = campoPassword.value;
const charPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(passwordd);
if (campoPassword.value == ""){
errores.push("Debe completar el campo con su contraseña");
} /* else if (!charPass) {
      errores.push ("El campo password debe contener al menos un caracter")
}; */

      //validación de imagen//
let campoImage = document.querySelector("input.registerFormImg");
var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
if (campoImage.value == ""){
errores.push("Debe subir una imagen de perfil")
} else if (!allowedExtensions.exec(campoImage.value)) {
  errores.push("Cargue un formato de imagen .jpeg/.jpg/.png/.gif")
      
    };

if (errores.length>0) {
let ulErrores = document.querySelector ("div.errores ul");
ulErrores.innerHTML = "";
for (let i=0 ; i< errores.length ; i++) {
ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
}}else{
      this.submit()
}
})
})