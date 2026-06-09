const selectDimension = document.getElementById('select-dimension-arreglo')
const btnCargarVector = document.getElementById('btn-cargar-vector')
const btnVaciarVector = document.getElementById('btn-vaciar-vector')
const tableTbody = document.querySelector('#id-table-vector-numerico > tbody')
const btnPresentarVector = document.getElementById('btn-presentar-vector')

const NUM_MAXIMO_RANDOM = 1000
let vector = []

btnCargarVector.addEventListener('click', function (e) {
    const dimension = selectDimension.value
    vaciarVector()
    cargarVector(dimension)
    console.log(vector)
})

btnPresentarVector.addEventListener('click', function() {
    presentarVector()
})

function cargarVector(dimension) {
    for(let i = 0; i < dimension; i++){
        const numero = Math.ceil(Math.random() * NUM_MAXIMO_RANDOM)
        vector[i] = numero
    }
}

function vaciarVector(){
    vector = []
}

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