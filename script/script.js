function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: No se puede dividir por cero";
        }
        return num1 / num2;
    } else {
        return "Error: Operación no válida";
    }
}

function iniciarCalculadora() {
    let continuar = true;
    
    while(continuar) {
        const inputNum1 = prompt("Ingrese el primer número (o escriba 'salir' para terminar):");
        
        if (inputNum1 === null || inputNum1.toLowerCase() === "salir") {
            alert("¡Hasta luego! Gracias por usar la calculadora.");
            continuar = false;
            break;
        }
        
        const inputNum2 = prompt("Ingrese el segundo número:");
        if (inputNum2 === null || inputNum2.toLowerCase() === "salir") {
            alert("¡Hasta luego! Gracias por usar la calculadora.");
            continuar = false;
            break;
        }
        
        const operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):");
        if (operacion === null || operacion.toLowerCase() === "salir") {
            alert("¡Hasta luego! Gracias por usar la calculadora.");
            continuar = false;
            break;
        }
        
        const num1 = parseFloat(inputNum1);
        const num2 = parseFloat(inputNum2);
        
        if (isNaN(num1) || isNaN(num2)) {
            alert("Error: Por favor ingrese números válidos");
            continue;
        }
        
        const resultado = realizarOperacion(num1, num2, operacion);
        
        alert(`Resultado: ${resultado}`);
        
        const respuesta = prompt("¿Desea realizar otra operación? (si/no)");
        if (respuesta === null || respuesta.toLowerCase() !== "si") {
            alert("¡Hasta luego! Gracias por usar la calculadora.");
            continuar = false;
        }
    }
}