var elements = [3, 7, 9, 18, 24, 5, 7, 27, 32, 35, 42, 47];

// 1 ejercicio: Retorna la suma de los números que son estrictamente mayores que 18


// El elements no tiene nada que ver con el elments de funtion greartherThan18 ya que esta fuera de la función
function greaterThan18(elements) {
var total=0;
  // Escriiu aquí el vostre codi:
  for(i=0;i<elements.length;i++){
    // console.log(elements[i]); Este parametro mira el número del primer resultado de i osea que vale  "3"
    // si quitamos la variable elements solo aparecera de 0 al 11 mostrado por pantalla
    if (elements[i]>18) {
      total=total+elements[i];
    }
  }
  return total;
}
document.getElementById("A").innerHTML = greaterThan18(elements);


// 2 ejercicio: Retorna la suma de los números que son estrictamente mayores que 18
// y que además son pares
function greaterThan18Odd(elements) {

  // Escriviu aquí el vostre codi:
  var total=0
  for (i=0;i<elements.length;i++){
    if ((elements[i]>18) && (elements[i]%2 == 0)){
       total = total +elements[i];
    }
  }
  return total;
}

document.getElementById("B").innerHTML = greaterThan18Odd(elements);

// 3 ejercicio: Retorna la suma de los números que son estrictamente mayores que 18
// y que además son pares y que se encuentran en posiciones impares del vector
function greaterThan18OddEvenPositions(elements) {

  // Escriviu aquí el vostre codi:
  var total = 0;

  for (i = 0; i < elements.length; i++) {

    if ((elements[i] > 18) &&
        (elements[i] % 2 == 1) &&
        (i % 2 == 1)) {
      total = total + elements[i];
    }

  }

return total;
}


document.getElementById("C").innerHTML = greaterThan18OddEvenPositions(elements);
// 4 ejercicio: Retorna la multiplicación de los números que son estrictamente mayores que 18
// y que además son pares y que se encuentran en posiciones pares del vector
function multiplyAll(elements) {

  var total = 0;

  for (i = 0; i < elements.length; i++) {

    if ((elements[i] > 18) &&
        (elements[i] % 2 == 0) &&
        (i % 2 == 1)) {
      total = total + elements[i];
    }

  }

  return total;
}


document.getElementById("D").innerHTML = multiplyAll(elements);
