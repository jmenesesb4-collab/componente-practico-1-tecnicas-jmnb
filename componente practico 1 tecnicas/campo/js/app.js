// Obtiene los elementos HTML necesarios para trabajar con el vector
const selectDimension = document.getElementById('select-dimension-arreglo')
const btnCargarVector = document.getElementById('btn-cargar-vector')
const btnVaciarVector = document.getElementById('btn-vaciar-vector')
const tableTbody = document.querySelector('#id-table-vector-numerico > tbody')
const txtRespuesta = document.getElementById('id-txt-respuesta')
const selectOrden = document.getElementById('select-orden')

const btnNumeroMayor = document.getElementById('btn-numero-mayor')
const btnNumeroMenor = document.getElementById('btn-numero-menor')
const btnSumarValores = document.getElementById('btn-sumar-valores')
const btnProductoVector = document.getElementById('btn-producto-vector')
const btnCalcularModa = document.getElementById('btn-calcular-moda')
const btnCalcularMedia = document.getElementById('btn-calcular-media')
const btnCalcularMediana = document.getElementById('btn-calcular-mediana')
const btnOrdenarBurbuja = document.getElementById('btn-ordenar-burbuja')
const btnOrdenarSeleccion = document.getElementById('btn-ordenar-seleccion')

// Valor máximo que pueden tomar los números aleatorios
const NUM_MAXIMO_RANDOM = 1000
// Vector donde se almacenan los datos
let vector = []

// Evento que carga el vector con números aleatorios
btnCargarVector.addEventListener('click', function (e) {
    const dimension = selectDimension.value
    
// Limpia el vector antes de generar nuevos datos
    vaciarVector()
    
// Genera los elementos del vector
    cargarVector(dimension)
    presentarVector()
})

/*
Evento que vacía completamente el vector,
limpia la tabla y muestra un mensaje de confirmación.
*/
btnVaciarVector.addEventListener('click', function () {
    vaciarVector()
    tableTbody.innerHTML = '<tr><td>0</td></tr><tr><td>0</td></tr>'
    txtRespuesta.value = 'Vector vaciado'
})

/*
Evento que busca y muestra el número mayor del vector.
Si el vector está vacío, presenta un mensaje de error.
*/
btnNumeroMayor.addEventListener('click', function () {
    txtRespuesta.value = vector.length === 0 ? 'Error: El vector esta vacio' : obtenerNumeroMayor(vector)
})

/*
Evento que busca y muestra el número menor del vector.
Si el vector está vacío, presenta un mensaje de error.
*/
btnNumeroMenor.addEventListener('click', function () {
    txtRespuesta.value = vector.length === 0 ? 'Error: El vector esta vacio' : obtenerNumeroMenor(vector)
})

/*
Evento que calcula la suma de todos los elementos
almacenados en el vector.
*/
btnSumarValores.addEventListener('click', function () {
    txtRespuesta.value = vector.length === 0 ? 'Error: El vector esta vacio' : 'Suma Total: ' + calcularSuma(vector)
})

/*
Evento que calcula el producto de todos los valores
contenidos en el vector.
*/
btnProductoVector.addEventListener('click', function () {
    txtRespuesta.value = vector.length === 0 ? 'Error: El vector esta vacio' : 'Producto Total: ' + calcularProducto(vector)
})

/*
Evento que calcula y muestra la media o promedio
de los elementos del vector.
*/
btnCalcularMedia.addEventListener('click', function () {
    txtRespuesta.value = vector.length === 0 ? 'Error: El vector esta vacio' : 'Media: ' + calcularMedia(vector)
})

/*
Evento que calcula y muestra la mediana
de los elementos del vector.
*/
btnCalcularMediana.addEventListener('click', function () {
    txtRespuesta.value = vector.length === 0 ? 'Error: El vector esta vacio' : 'Mediana: ' + calcularMediana(vector)
})

/*
Evento que calcula y muestra la moda del vector.
Si no existen elementos repetidos, se informa al usuario.
*/
btnCalcularModa.addEventListener('click', function () {
    txtRespuesta.value = vector.length === 0 ? 'Error: El vector esta vacio' : calcularModa(vector)
})

/*
Evento que ordena el vector utilizando
el algoritmo Burbuja.
*/
btnOrdenarBurbuja.addEventListener('click', function () {
    vector = ordenarBurbuja(vector, selectOrden.value)
    presentarVector()
})

/*
Evento que ordena el vector utilizando
el algoritmo Selección.
*/
btnOrdenarSeleccion.addEventListener('click', function () {
    vector = ordenarSeleccion(vector, selectOrden.value)
    presentarVector()
})

/*
Busca el valor más grande del vector.
Recorre todos los elementos comparándolos con el mayor encontrado.
También almacena la posición donde se encuentra dicho valor.
*/

function obtenerNumeroMayor(arreglo) {
    let mayor = arreglo[0]
    let pos = 0
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i]
            pos = i
        }
    }
    return 'Valor Maximo: ' + mayor + ' (encontrado en posicion ' + pos + ')'
}

/*
Busca el valor más pequeño del vector.
Recorre todos los elementos comparándolos con el menor encontrado.
También registra la posición donde aparece dicho valor.
*/
function obtenerNumeroMenor(arreglo) {
    let menor = arreglo[0]
    let pos = 0
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < menor) {
            menor = arreglo[i]
            pos = i
        }
    }
    return 'Valor Minimo: ' + menor + ' (encontrado en posicion ' + pos + ')'
}

/*
Calcula la suma total de todos los elementos del vector.
Utiliza una variable acumuladora para almacenar el resultado.
*/
function calcularSuma(arreglo) {
    let suma = 0
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i]
    }
    return suma
}

/*
Calcula el producto de todos los elementos del vector.
Multiplica cada valor por el acumulador producto.
*/
function calcularProducto(arreglo) {
    let producto = 1
    for (let i = 0; i < arreglo.length; i++) {
        producto *= arreglo[i]
    }
    return producto
}

/*
Calcula la media o promedio aritmético del vector.
Primero suma todos los elementos y luego divide
el resultado para la cantidad total de datos.
*/
function calcularMedia(arreglo) {
    let suma = 0
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i]
    }
    return (suma / arreglo.length).toFixed(2)
}

/*
Calcula la mediana del vector.
Primero crea una copia del arreglo y la ordena.
Luego obtiene el valor central o el promedio
de los dos valores centrales si existen elementos pares.
*/
function calcularMediana(arreglo) {
    let copia = []
    for (let i = 0; i < arreglo.length; i++) {
        copia[i] = arreglo[i]
    }
    for (let i = 0; i < copia.length - 1; i++) {
        for (let j = 0; j < copia.length - 1 - i; j++) {
            if (copia[j] > copia[j + 1]) {
                let temp = copia[j]
                copia[j] = copia[j + 1]
                copia[j + 1] = temp
            }
        }
    }
    let mitad = Math.floor(copia.length / 2)
    if (copia.length % 2 === 0) {
        return (copia[mitad - 1] + copia[mitad]) / 2
    } else {
        return copia[mitad]
    }
}

/*
Calcula la moda del vector.
Cuenta cuántas veces aparece cada elemento y
determina cuál tiene la mayor frecuencia.
*/
function calcularModa(arreglo) {
    let maxRepeticiones = 0
    let moda = arreglo[0]
    for (let i = 0; i < arreglo.length; i++) {
        let repeticiones = 0
        for (let j = 0; j < arreglo.length; j++) {
            if (arreglo[i] === arreglo[j]) {
                repeticiones++
            }
        }
        if (repeticiones > maxRepeticiones) {
            maxRepeticiones = repeticiones
            moda = arreglo[i]
        }
    }
    if (maxRepeticiones <= 1) {
        return 'Moda: No hay elementos repetidos'
    } else {
        return 'Moda: ' + moda + ' (se repite ' + maxRepeticiones + ' veces)'
    }
}

/*
Ordena el vector mediante el algoritmo Burbuja.
Compara elementos adyacentes e intercambia posiciones
hasta obtener el orden ascendente o descendente.
*/
function ordenarBurbuja(arreglo, orden) {
    if (arreglo.length === 0) {
        txtRespuesta.value = 'Error: El vector esta vacio'
        return arreglo
    }
    for (let i = 0; i < arreglo.length - 1; i++) {
        for (let j = 0; j < arreglo.length - 1 - i; j++) {
            if (orden === 'ASC') {
                if (arreglo[j] > arreglo[j + 1]) {
                    let temp = arreglo[j]
                    arreglo[j] = arreglo[j + 1]
                    arreglo[j + 1] = temp
                }
            } else {
                if (arreglo[j] < arreglo[j + 1]) {
                    let temp = arreglo[j]
                    arreglo[j] = arreglo[j + 1]
                    arreglo[j + 1] = temp
                }
            }
        }
    }
    txtRespuesta.value = 'Ordenado por Burbuja de forma ' + orden
    return arreglo
}

/*
Ordena el vector mediante el algoritmo Selección.
Busca el menor o mayor elemento del segmento no ordenado
y lo intercambia con la posición actual.
*/
function ordenarSeleccion(arreglo, orden) {
    if (arreglo.length === 0) {
        txtRespuesta.value = 'Error: El vector esta vacio'
        return arreglo
    }
    for (let i = 0; i < arreglo.length - 1; i++) {
        let indiceObjetivo = i
        for (let j = i + 1; j < arreglo.length; j++) {
            if (orden === 'ASC') {
                if (arreglo[j] < arreglo[indiceObjetivo]) {
                    indiceObjetivo = j
                }
            } else {
                if (arreglo[j] > arreglo[indiceObjetivo]) {
                    indiceObjetivo = j
                }
            }
        }
        let temp = indiceObjetivo
        let valorTemp = arreglo[temp]
        arreglo[temp] = arreglo[i]
        arreglo[i] = valorTemp
    }
    txtRespuesta.value = 'Ordenado por Seleccion de forma ' + orden
    return arreglo
}

/*
Genera un vector de la dimensión indicada.
Cada posición se llena con un número aleatorio
comprendido entre 1 y el valor máximo definido.
*/
function cargarVector(dimension) {
    for (let i = 0; i < dimension; i++) {
        const numero = Math.ceil(Math.random() * NUM_MAXIMO_RANDOM)
        vector[i] = numero
    }
}

/*
Vacía completamente el contenido del vector.
Se utiliza para reiniciar los datos antes de
generar un nuevo conjunto de valores.
*/
function vaciarVector() {
    vector = []
}

function presentarVector() {
    let contador = 0
    let str = ''
    while (contador < 2) {
        str += '<tr>'
        for (let i = 0; i < vector.length; i++) {
            if (contador === 0) {
                str += '<td>' + i + '</td>'
            } else {
                str += '<td bgcolor="#00FF00">' + vector[i] + '</td>'
            }
        }
        str += '</tr>'
        contador++
    }
    tableTbody.innerHTML = str
}

/*
Botón                 Función                                                                                         
Cargar Vector         Genera un vector de la dimensión seleccionada y lo llena con números aleatorios entre 1 y 1000. 
Vaciar Vector         Elimina todos los elementos almacenados en el vector.                                           
Presentar Vector      Muestra en la tabla los índices y los valores contenidos en el vector.                          
Número Mayor          Busca y muestra el valor más grande del vector.                                                 
Número Menor          Busca y muestra el valor más pequeño del vector.                                                
Suma de Valores       Calcula la suma de todos los elementos del vector.                                              
Producto de Valores   Multiplica todos los elementos del vector y presenta el resultado.                              
Moda                  Determina el valor que más veces se repite en el vector.                                        
Media                 Calcula el promedio de los elementos del vector.                                                
Mediana               Determina el valor central del vector ordenado.                                                 
*/
