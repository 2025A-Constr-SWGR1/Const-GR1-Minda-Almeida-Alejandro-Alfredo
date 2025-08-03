const paqueteSuma = require('2025a-swgr1-nsvz-suma');
const paqueteResta = require('2025a-swgr1-aama-resta');
const paqueteDivision = require('2025a-swgr1-aama-division');
const paqueteMultiplicacion = require('2025a-swgr1-nsvz-multiplicacion');

const respuestaSuma = paqueteSuma.suma(2, 1);
const respuestaResta = paqueteResta.resta(3, 2);
const respuestaDivision = paqueteDivision.division(9, 2);
const respuestaMultiplicacion = paqueteMultiplicacion.multiplicacion(2, 5);

console.log('La respuesta es de la suma es: ', respuestaSuma);
console.log('La respuesta es de la resta es: ', respuestaResta);
console.log('La respuesta es de la division es: ', respuestaDivision);
console.log('La respuesta es de la multiplicacion es: ', respuestaMultiplicacion);