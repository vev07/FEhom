/*Создать кнопку и красный квадрат с размерами 200х200px. 
При клике на кнопку менять у квадрата цвет заднего фона на зеленый 
и уменьшать его до размеров 100х100px.


const divRed = document.querySelector('.divRed')
const redButton = document.querySelector('.redButton')
redButton.addEventListener('click', function() {
    divRed.style.backgroundColor = 'green'
    divRed.style.width = '100px'
    divRed.style.height = '100px'
})

Создать кнопку и розовый квадрат с размерами 200х200px.
 При клике на кнопку менять цвет на синий и выводить в 
 консоль обновленный цвет квадрата.

const divPink = document.querySelector('.divPink')
const pinkButton = document.querySelector('.pinkButton')
pinkButton.addEventListener('click', function() {
    divPink.style.backgroundColor = 'blue'
console.log('blue')
})


Создать кнопку и квадрат с размерами 150х150px. 
При клике на кнопку увеличивать высоту и ширину квадрата на 20px.


const square = document.querySelector('.square')
const squareButton = document.querySelector('.squareButton')
let count = 150;
squareButton.addEventListener('click', function() {
    count += 20;
    square.style.width += `${count}px`
    square.style.height += `${count}px` 

})


Создать кнопку и div с классом root.
 При клике на кнопку в div создается параграф синего цвета. 
 Текст параграфа произвольный

const root = document.querySelector('.root')
const rootButton = document.querySelector('.rootButton')
rootButton.addEventListener('click', function() {

    root.innerHTML = '<p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>'
  })


Создать кнопку и div с классом root. 
При клике на кнопку в div создаются по 
очереди параграфы синего и зеленого цветов. Первый цвет синий.
*/

const button = document.querySelector('.rootButton2');
const root = document.querySelector('.root2');
let isBlue = true;

button.addEventListener('click', function() {   
    let color = document.createElement('p')   
    color.innerText = "Hello" 
    root.appendChild(color);
    if(isBlue) {
        color.style.color = 'green'  
    } else {
        color.style.color = 'blue' 
    }
    isBlue = !isBlue })

    

   


    


 

