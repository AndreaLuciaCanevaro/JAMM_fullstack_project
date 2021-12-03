// Validación de LOGIN //
window.addEventListener("load",function(){
      
    let formulario = document.querySelector(".create-form");
    formulario.addEventListener("submit", function(e){
          e.preventDefault();
    
    let errores=[];
    
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
    if (campoPassword.value == ""){
    errores.push("Debe completar el campo con su contraseña");
    } //else if (campoPassword.value ...? validación de contraseña
    
    //validación de imagen//
    /* let campoImage=document.querySelector("input.image");
    if (campoImage == ""){
    errores.push("Debe subir una imagen de perfil");
    } */ //else if (campoImage.value ...? formato JPG, JPEG, PNG
    
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