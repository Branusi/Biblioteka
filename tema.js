(function() {
    'use strict';

    // Objeto con metodo que se utilizará globalmente
    var temaJS = {
        getTema: getTema
    };

    var tema = {
        palabraClave: undefined
    }

    function getTema(textBlock) {
        palabraClaveTema(textBlock);
        return Object.assign({}, tema);
    }

    function palabraClaveTema(textBlock) {

        let palabras = textBlock.replace(/\n/gi, "").replace(/[!@#$%^&*()-=_+|;':",.<>?']/gi, "").split(' ').sort();
        console.log(palabras);


var diccionario = {};
for(var i = 0; i <palabras.length; i++)
{
    // eliminamos los espacios en blanco y separamos el resultado por el |
    var clan = palabras[i].replace(" ", "").split("|"); 
    
  // verificamos que el clan exista en el diccionario
   if(diccionario[clan[0]] != undefined){
    // como existe, aumentamos el contador del clan en 1
     diccionario[clan[0]] = diccionario[clan[0]] + 1;
   }
  else{
    // como no existe entonces agregamos el clan al diccionario con un valor inicial a 1
    diccionario[clan[0]] = 1;
  }
}


var valorMasAlto = {conincidencias: 0};

// Recoremos cada elemento del diccionario
for(var property in diccionario)
  {
     
    if(valorMasAlto.conincidencias < diccionario[property])
    {
        valorMasAlto.key = property;
        valorMasAlto.conincidencias = diccionario[property];
        tema.palabraClave = valorMasAlto.key;
    }
  }

console.log(valorMasAlto);
        /*for (var i = 0; i < palabras.length-1; i++) {
          if ( palabras[i+1] == palabras[i]){
            tema.palabraClave = valorMasAlto.key;
          }

        }*/


    }

    // Valida si el objeto está declarado
    if (typeof window.temaJS === 'undefined')
        window.temaJS = temaJS;
})();