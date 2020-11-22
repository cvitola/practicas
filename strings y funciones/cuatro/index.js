let nombre = "Cristian";

const mensaje = nombre => {
    let apellido = "Vitola"

    function armarNombre(){
        console.log(nombre.concat(' ').concat(apellido));
    }
    armarNombre();
}

mensaje(nombre);