function obtenerNumeroMayor() {
    // Obtener los valores ingresados por el usuario
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
  
    // Comparar los números y mostrar el resultado
    var resultado = document.getElementById("resultado");
  
    if (num1 > num2 && num1 > num3) {
      resultado.textContent = "El número mayor es: " + num1;
    } else if (num2 > num1 && num2 > num3) {
      resultado.textContent = "El número mayor es: " + num2;
    } else if (num3 > num1 && num3 > num2) {
      resultado.textContent = "El número mayor es: " + num3;
    } else {
      resultado.textContent = "Hay números iguales o no se ha ingresado ningún número.";
    }
  }
  