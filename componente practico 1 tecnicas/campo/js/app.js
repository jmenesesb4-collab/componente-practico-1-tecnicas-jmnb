// Obtiene los elementos HTML necesarios para trabajar con el vector
const selectDimension = document.getElementById('select-dimension-arreglo')
const btnCargarVector = document.getElementById('btn-cargar-vector')
const btnVaciarVector = document.getElementById('btn-vaciar-vector')
const tableTbody = document.querySelector('#id-table-vector-numerico > tbody')
const btnPresentarVector = document.getElementById('btn-presentar-vector')

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
    console.log(vector)
})

// Evento que muestra el vector en la tabla
btnPresentarVector.addEventListener('click', function() {
    presentarVector()
})

//Genera un vector de tamaño N con números aleatorios entre 1 y 1000.
function cargarVector(dimension) {
    for(let i = 0; i < dimension; i++){
        const numero = Math.ceil(Math.random() * NUM_MAXIMO_RANDOM)
        vector[i] = numero
    }
}

//Elimina todos los elementos del vector
function vaciarVector(){
    vector = []
}

/*
Presenta el contenido del vector en la tabla HTML.
Primera fila: índices.
Segunda fila: valores almacenados.
*/
function presentarVector() {
    let contador = 0
    let str = ''
    while(contador < 2) {
        str += '<tr>'
        for(let i = 0; i < vector.length; i++){
            if(contador === 0){
               str += `<td>${i}</td>`
            } else {
                str += `<td bgcolor="#00FF00" >${vector[i]}</td>`
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
