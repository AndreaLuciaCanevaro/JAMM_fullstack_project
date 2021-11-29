// Validación de REGISTRO //
window.addEventListener("load",function(){
let formulario=document.querySelector(".control-formulario");
formulario.addEventListener("submit",function(e){
let errores=[];
      //validación de fullName//
let campoFullName = document.querySelector("input.fullName");
if (campoFullName.value == ""){
errores.push("Debe completar el campo con su nombre y apellido");
} else if (campoFullName.value.length<3){
errores.push("El campo debe tener al menos 2 caracteres");
}
	//validación de email//
let campoEmail=document.querySelector("input.email");
if(campoEmail.value == ""){
errores.push ("Debe completar el campo con su email");
} //else if (campoEmail.value == isEmail){
   // errores.push ("El campo mail debe contener el siguiente formato: usuario@email.com")}//
	//validación de password//
let campoPassword=document.querySelector("input.password");
if (campoPassword == ""){
errores.push("Debe completar el campo con su contraseña");
} //else if (campoPassword.value ...? validación de contraseña
//validación de imágen//
/* let campoImage=document.querySelector("input.image");
if (campoImage == ""){
errores.push("Debe subir una imágen de perfil");
} */ //else if (campoImage.value ...? formato JPG, JPEG, PNG

if (errores.length>0) {
e.preventDefault();
let ulErrores = document.querySelector ("div.errores ul");
for (let i=0 ; i< errores.length ; i++) {
ulErrores.innerHTML += "<li>" +errores [i] + "</li>"
}}
})
})