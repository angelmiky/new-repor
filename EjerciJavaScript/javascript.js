function mostrarNombre() {
let name = prompt("Introduzca su nombre");
if(name == ""){
    console.warn("No se ha introducido valor.");
    alert("No ha escrito su nombre.")
   }else{
    confirm("Confirme su nombre" + name);
    if(confirm){
        console.log("El nombre es correcto");
        alert("Bienvenido");
    }else{
        console.warn("No se sabe su nombre");
    }
   }
}
function nuevoArray() {
    let array = [];
    let num;
    let numero;
    do{
        let nombre = prompt("Introduzca su nombre");
    let numero = prompt("Introduzca un número");
    num = Number(numero);
        confirm("Va a añadir el valor indicado");
        if(confirm) {
            if(num>=0){
                array.splice(numero,0,nombre);
            }else{
                array.push(nombre);
            }
        }else{
            if(num >= 0) {
                array.splice(numero,1);
            }else{
                array.splice(0,1);
            }
        }
    }while(numero == Number(numero));
    console.log(array);
}
function otroNuevo() {
    let nombre = prompt("introduzca su nombre");
}