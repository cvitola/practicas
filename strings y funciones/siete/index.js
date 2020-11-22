let cadena = "¡Hello NUCBERS! Acá tamos aprendiendo metodos de strings";
vectorizacion(cadena);
function vectorizacion(valor){
    let vector=[];
    for(let i=0; i<cadena.length;i++){
        vector[i] = cadena[i];
    }
    console.log(vector)
}