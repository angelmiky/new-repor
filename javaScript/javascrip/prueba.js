function prueba(){
    alert("Hola Mundo 2!");

    let nombre = prompt("Introduce tu nombre");
    console.log(nombre);
    if(nombre== "" ||nombre == null){
        console.error("NO ha introducido nombre" +nombre);
        alert("No ha escrito su nombre");
    }else{
        let confirmacion = confirm("¿Es su nombre " + nombre);
        if (confirmacion) {
            console.log("El nombre es correcto");
            alert("Bienvenido")
        }else{
            console.warn("No se sabe su nombre");
        }
    }
}