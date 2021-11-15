/**
 *   Descripción principal del fichero.
 *   Descripción secundaria.
 *   @author Juan Manuel Toscano Reyes <jtoscanoreyes.guadalupe>
 *   @license GPL-3.0-or-later
 *   Ref: https://spdx.org/licenses/
 *
 *   Ref JSDoc: https://jsdoc.app/
 */
'use strict'
console.log('asdasd');
window.onload=iniciar
function iniciar(){
    //Creamos una cookie para ello creamos también una fecha para que dure 30 días por ejemplo
    let fechaCaducidad= new Date()
    fechaCaducidad.setDate(fechaCaducidad.getDate()+30)
    /*let fechaUTC=Date.UTC(
        fechaCaducidad.getFullYear(),
        fechaCaducidad.getMonth(),
        fechaCaducidad.getDate())*/
    document.cookie="usuario=Juanma;expires="+fechaCaducidad
    //console.log(document.cookie);
    //Para eliminar una cookie, se le pone en fecha -1 en vez de +30 y se le quita el nombre al usuario
}