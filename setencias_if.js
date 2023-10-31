//CONDIONALES => setencia if. // Operador ternario y switch

/**
 * La sentencia if, es una estructura de  control. Se utiliza para crear bifurcasiones en el flujo de ejecución del programa. Nosotros algunas veces  dedemos ejecutar diferentes acciones bassada en diferentes condiciones. 
  * El if estará evaluando la condición, y si,  se cumple ejecutará el codigo correspondiente, y si no continuará con el flujo del programa.
 */


if (true) {
  console.log('Esto siempre se imprime');
}

if (false) { //no se imprime, porque la condicion se evalua como false
  console.log('Esto nunca se imprimira');
}

if (10 > 5) {
  console.log('10 es mayor que 5');
}

if (10 > 20) {
  console.log('10 es mayor que 20');
}

//tambien podemos pasar como condicion una variable

const resultado = 10 > 2 //true
console.log(resultado); //true

if (resultado) {
  console.log('pase como condicion una variable');
}


//podemos utilizar todos los if que necesitemos
const num1 = 10
const num2 = 5

if (num1 < num2) {
  console.log('num2 es mayor que num1');
}

if (num1 > num2) {
  console.log('num1 es mayor a num2');
}

if (num1 === num2) console.log('num1 es igual a num2');


//else - El else es una clausula opcional. Se ejecutara en caso que la condicion sea falsa

if (num1 > num2) {
  console.log('Gana Boca');
} else {
  console.log('Gana fluminense');
}

if (num1 > num2) {
  console.log('Voy por la ruta de la derecha');
} else {
  console.log('Voy por la ruta de la izquierda');
}

const edad = 18

if (edad >= 18) {
  console.log('Puede comprar sin  el consetimiento de sus padres');
} else {
  console.log('Debe pedir el consentimiento');
}

//else if
//nos proporciona bloques opcionales para probnar todas nuestras variantes

if (num1 > num2) {
  console.log('num1 es mayor a num2');
} else if (num1 < num2) {
  console.log('num2 es mayor que num1');
} else {
  console.log('num1 es igual a num2');
}

const isValid = 10 < 30 > 14

if (isValid) {
  console.log('30 es mayor que 10');
} else if (30 > 10) {
  console.log('30 es mayor que 10');
} else if (30 > 14) {
  console.log('30 es mayor que 14');
} else {
  console.log('todas las condiciones son falsas');
}

function weekDay(day) {

  const message = 'El dia de la semana es:'
  let dayWeek = null

  const dayLoweCase = day.toLowerCase()

  if (dayLoweCase === 'lunes' || 'monday') {
    dayWeek = "lunes"
  } else if (dayLoweCase === 'martes') {
    dayWeek = "martes"
  } else if (dayLoweCase === 'miercoles') {
    dayWeek = "miercoles"
  } else if (dayLoweCase === 'jueves') {
    dayWeek = "jueves"
  } else if (dayLoweCase === 'viernes') {
    dayWeek = "viernes"
  } else if (dayLoweCase === 'sabado') {
    dayWeek = "sabado"
  } else if (dayLoweCase === 'domingo') {
    dayWeek = "domingo"
  }
  else {
    return 'No has pasado un dia valido'
  }

  return `${message} ${dayWeek}`
}

console.log(weekDay('monday'));


