/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arr = [];
   for(let clave in objeto){
      arr.push([clave , objeto[clave]]);
   }
   return arr
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objeto = {}
   for (let i = 0 ; i < string.length ; i++){
      if(objeto.hasOwnProperty(string[i])){ // existe "i" dentro del objeto?
         objeto[string[i]] = objeto[string[i]] + 1; // si existe, a "i" sumarle 1 (contador)
      }else{
         objeto[string[i]] = 1; // si no existe, ingresarlo y darle valor 1
      }
   }
   // Object.keys(objeto) extrae las propiedades del objeto y las mete en un nuevo array para que
   // .sort() tome esos valores y los ordene alfabeticamente.
   let letrasOrdenadas = Object.keys(objeto).sort(); 
   // Creo nuevo objeto para ingresarle los keys anteriores pero ordenados alfabeticamente en la linea 40.
   let sortedObjeto = {}
   for(const letra of letrasOrdenadas){
      sortedObjeto[letra] = objeto[letra]; 
   }
   return sortedObjeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let caps = [];
   let nonCaps = [];
   for(let i = 0 ; i < string.length ; i++){
      const char = string.charAt(i)
      if (char === char.toUpperCase()){
         caps.push(char)
      }else {
         nonCaps.push(char)
      }
   }
   return caps.join('') + nonCaps.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
      let words = frase.split(' '); // divide la oracion en palabras y crea un array de ellas.
      let mirroredWords = words.map(function(word) {
         return word.split('').reverse().join('');
      });
      return mirroredWords.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numberToString = String(numero);
   let reversedNumber = numberToString.split('').reverse().join('');
   if(numberToString === reversedNumber){
      return "Es capicua"
   }
   return "No es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let stringArray = string.split('');
   function isAbOrC (letter){
      return letter !== "a" && letter !== "b" && letter !== "c";
   }
   let noAbOrC = stringArray.filter(isAbOrC);
   return noAbOrC.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort(function(a, b) {
      return a.length - b.length;
    });
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
