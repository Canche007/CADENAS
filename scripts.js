// 1. Invertir una Cadena
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

// 2. Número Primo
function esPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 3. Eliminar Duplicados en un Arreglo
function eliminarDuplicados(arr) {
    return [...new Set(arr)];
}

// 4. Factorial de un Número
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

// 5. Contar Vocales
function contarVocales(cadena) {
    const vocales = 'aeiouAEIOU';
    let count = 0;
    for (let char of cadena) {
        if (vocales.includes(char)) {
            count++;
        }
    }
    return count;
}

// 6. Sumar los Números de un Arreglo
function sumarNumeros(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

// 7. Buscar el Máximo en un Arreglo
function buscarMaximo(arr) {
    return Math.max(...arr);
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Invertir una Cadena
    const cadena = "Hola Mundo";
    document.getElementById('originalCadena').textContent = cadena;
    document.getElementById('invertirCadena').textContent = invertirCadena(cadena);

    // 2. Número Primo
    const numero = 17;
    document.getElementById('originalNumero').textContent = numero;
    document.getElementById('esPrimo').textContent = esPrimo(numero) ? "Sí" : "No";

    // 3. Eliminar Duplicados en un Arreglo
    const arreglo = [1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 8, 8];
    document.getElementById('originalArreglo').textContent = JSON.stringify(arreglo);
    document.getElementById('eliminarDuplicados').textContent = JSON.stringify(eliminarDuplicados(arreglo));

    // 4. Factorial de un Número
    const numFactorial = 5;
    document.getElementById('originalFactorial').textContent = numFactorial;
    document.getElementById('factorial').textContent = factorial(numFactorial);

    // 5. Contar Vocales
    const cadenaVocales = "No tengo vida social";
    document.getElementById('originalCadenaVocales').textContent = cadenaVocales;
    document.getElementById('contarVocales').textContent = contarVocales(cadenaVocales);

    // 6. Sumar los Números de un Arreglo
    const numeros = [1, 2, 3, 4, 5];
    document.getElementById('originalNumeros').textContent = JSON.stringify(numeros);
    document.getElementById('sumarNumeros').textContent = sumarNumeros(numeros);

    // 7. Buscar el Máximo en un Arreglo
    const arregloMax = [1, 2, 3, 4, 5, 10, 6];
    document.getElementById('originalArregloMax').textContent = JSON.stringify(arregloMax);
    document.getElementById('buscarMaximo').textContent = buscarMaximo(arregloMax);
});
