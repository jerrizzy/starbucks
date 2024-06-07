const gcfe = document.querySelector('.gcfe');
const ocfe = document.querySelector('.ocfe');
const pcfe = document.querySelector('.pcfe');
const green = document.querySelector('.green');
const orange = document.querySelector('.orange');
const pink = document.querySelector('.pink');

const description = document.getElementById('description');

const popup = document.getElementById('popup');
const popupDescription = document.getElementById('popup-description');
const learnMoreBtn = document.getElementById('button');
const closeBtn = document.querySelector('.close');

let currentCoffee = '';

gcfe.addEventListener('click', () => {
    green.style.opacity = '1';
    green.style.transform = 'rotate(0deg)';

    pink.style.opacity = '0';
    pink.style.transform = 'rotate(-90deg)';
    orange.style.opacity = '0';
    orange.style.transform = 'rotate(-90deg)';

    description.textContent = 'Green coffee is known for its unique flavor and health benefits.';
    currentCoffee = 'green';
})

ocfe.addEventListener('click', () => {
    orange.style.opacity = '1';
    orange.style.transform = 'rotate(0deg)';

    pink.style.opacity = '0';
    pink.style.transform = 'rotate(-90deg)';
    green.style.opacity = '0';
    green.style.transform = 'rotate(-90deg)';

    description.textContent = 'Orange coffee offers a refreshing citrus twist to your regular coffee.';
    currentCoffee = 'orange';
})

pcfe.addEventListener('click', () => {
    pink.style.opacity = '1';
    pink.style.transform = 'rotate(0deg)';

    green.style.opacity = '0';
    green.style.transform = 'rotate(-90deg)';
    orange.style.opacity = '0';
    orange.style.transform = 'rotate(-90deg)';

    description.textContent = 'Pink coffee is a delightful blend with a hint of berry flavor.';
    currentCoffee = 'pink';
})

learnMoreBtn.addEventListener('click', () => {
    let ingredientInfo = '';
    switch (currentCoffee) {
        case 'green':
            ingredientInfo = 'Green Coffee: Contains milk, ice, and matcha tea blend, which includes sugar and ground Japanese green tea.';
            break;
        case 'orange':
            ingredientInfo = 'Orange Coffee: This icy drink combines orange and vanilla flavors, orange zest, coffee beans, water, and is topped with orange and vanilla whipped cream.';
            break;
        case 'pink':
            ingredientInfo = 'Pink coffee: coffee beans, beetroot powder, water, vanilla bean crème Frappuccino base, milk instead of half and half, raspberry syrup, vanilla syrup, dragonfruit, whipped cream, and extra dragonfruit on top.';
            break;
        default:
            ingredientInfo = 'Select a coffee to see its ingredients.';
    }
    popupDescription.textContent = ingredientInfo;
    popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Hide the popup when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});