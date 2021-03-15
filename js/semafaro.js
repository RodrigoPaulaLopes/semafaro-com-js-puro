const img = document.getElementById('semafaro')
const botoes = document.getElementById('button')

let colorIndex = 0
let intervalId = null

const trafficLight = (event) =>{
    stopIntevrval()
   turnOn[event.target.id]();
   
}
const nextIndex =() =>{
    if(colorIndex < 2){
        colorIndex++
    }else{
        colorIndex = 0
    }
}

const changeColor = () => {
    const colors = ['vermelho', 'verde', 'amarelo']
    const color =  colors[colorIndex] 
    turnOn[color]()
    nextIndex()
}
const stopIntevrval = () =>{
   clearInterval(intervalId)
}
const turnOn = {
    'vermelho': () => img.src = './img/vermelho.png',
    'verde': () => img.src = './img/verde.png',
    'amarelo': () => img.src = './img/amarelo.png',
    'automatico': intervalId = setInterval(changeColor, 1000)
}

botoes.addEventListener('click', trafficLight)