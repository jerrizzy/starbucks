const gcfe = documemt.querySelector('.gcfe');
const ocfe = documemt.querySelector('.ocfe');
const pcfe = documemt.querySelector('.pcfe');
const green = documemt.querySelector('.green');
const orange = documemt.querySelector('.orange');
const pink = documemt.querySelector('.pink');

gcfe.addEventListener('click', () =>{
    green.style.opacity = '1'
    green.style.transform = 'rotate(0deg)'

    pink.style.opacity = '0'
    pink.style.transform = 'rotate(-90deg)'
    orange.style.opacity = '0'
    orange.style.transform = 'rotate(-90deg)'
})

ocfe.addEventListener('click', () =>{
    orange.style.opacity = '1'
    orange.style.transform = 'rotate(0deg)'

    pink.style.opacity = '0'
    pink.style.transform = 'rotate(-90deg)'
    green.style.opacity = '0'
    green.style.transform = 'rotate(-90deg)'
})

pcfe.addEventListener('click', () =>{
    pink.style.opacity = '1'
    pink.style.transform = 'rotate(0deg)'

    green.style.opacity = '0'
    green.style.transform = 'rotate(-90deg)'
    orange.style.opacity = '0'
    orange.style.transform = 'rotate(-90deg)'
})