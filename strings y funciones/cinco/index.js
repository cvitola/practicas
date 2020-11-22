let cadena = "¡Hello NUCBERS! Acá tamos aprendiendo metodos de strings";
let entrada = prompt("Ingresá tu palabra");

const estasEnCadena = (cadena,entrada) =>{
    let resultado;
    if(cadena.toUpperCase().includes(entrada.toUpperCase()))
        resultado = "Si, se encontró la palabra";
        else
        resultado = "No amigui, no está esa palabra en el string"
    console.log(resultado);
}

estasEnCadena(cadena,entrada);