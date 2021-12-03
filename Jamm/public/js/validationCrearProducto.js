// Validación de CREAR PRODUCTO //
window.addEventListener("load",function(){
      
    let formulario = document.querySelector(".create-form");
    formulario.addEventListener("submit", function(e){
          e.preventDefault();
    
    let errores=[];
    
          //validación de Nombre producto//
    let campoNombreProducto = document.querySelector("input.productName");
    if (campoNombreProducto.value == ""){
    errores.push("Debe completar el campo con el nombre del producto");
    } else if (campoNombreProducto.value.length<3){
    errores.push("El campo debe tener al menos 2 caracteres");
    }
    
        //validación Descripción//
    let campoDescripcion = document.querySelector("textarea.productDescription");
    if (campoDescripcion.value == "" ){
    errores.push("Debe completar el campo con alguna descripción");
    } 

        //validación de Imagen//
     let campoImagen = document.querySelector("input.productImage");
     var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if (campoImagen.value == ""){
    errores.push("Debe subir una imágen de producto");
    }   else if (!allowedExtensions.exec(campoImagen.value)) {
        errores.push("Cargue un formato de imágen .jpeg/.jpg/.png/.gif")
    };

        //validación de Categoría//
    let campoCategoria = document.querySelector("select.categoria");
    if (campoCategoria.value == ""){
    errores.push("Debe completar el campo con una categoría");
    } 

        //validación de Color//
    let campoColor = document.querySelector("select.color");
    if (campoColor.value == ""){
    errores.push("Debe completar el campo con un color");
    } 
    
        //validación de Precio//
    let campoPrecio = document.querySelector("input.precio");
    if (campoPrecio.value == ""){
    errores.push("Debe completar el campo con un precio");
    }    

    
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