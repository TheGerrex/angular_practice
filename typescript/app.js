"use strict";
// function saludar( nombre: string ) {
//     console.table( 'Hola, ' + nombre ); // Hola Logan
// }
// const wolverine = {
//     nombre: 'Logan'
// };
// saludar( wolverine.nombre );
function countRegexMatches(string, word) {
    if (string == null) {
        return 0;
    }
    else {
        return string.split(word).length - 1;
    }
}
console.log(countRegexMatches("John James Johny", "oh"));
console.log(countRegexMatches(null, "oh"));
