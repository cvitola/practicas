let cadena = "¡Hello NUCBERS! Acá tamos aprendiendo metodos de strings";
let entrada = prompt("Ingresá tu palabra");

const estasEnCadena = (cadena,entrada) =>{
    let agregado = " y vamos a ser cracks en JS!";
    let cadenaMayuscula = cadena.toUpperCase();
    let entradaMayuscula = entrada.toUpperCase();
    if(cadenaMayuscula.includes(entradaMayuscula))
        console.log(cadena.concat(agregado));
 
        
}

estasEnCadena(cadena,entrada);