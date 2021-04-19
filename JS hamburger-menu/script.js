//gelijk maar een vraagje: Ik heb voor elke menu-item een variabele 
//en een Eventlistener gemaakt, maar ik heb het gevoel dat dit 
//efficienter moet kunnen. Kan ik een eventlistener aan een soort 
//array van items toevoegen en zo ja hoe?

const menuWrapper = document.querySelector('.menu-wrapper');
const hamburger = document.querySelector('.hamburger-menu');
const showMenu = document.querySelector('.inner-menu');
const bgBeige = document.querySelector('.item1');
const bgRed = document.querySelector('.item2');
const bgSalmon = document.querySelector('.item3');
const bgLightblue = document.querySelector('.item4');
const bgDarkblue = document.querySelector('.item5');
const header = document.querySelector('.title')

menuWrapper.addEventListener('click', function(e) {
    hamburger.classList.toggle('animate');
    showMenu.classList.toggle('visible');
});

bgBeige.addEventListener('click', function(e) {
    document.body.classList.add('background-beige');
    header.innerHTML = "<h1>beige</h1>";
    document.body.classList.remove('background-salmon');
    document.body.classList.remove('background-red');
    document.body.classList.remove('background-lightblue');
    document.body.classList.remove('background-darkblue');
    showMenu.classList.remove('visible');
    hamburger.classList.toggle('animate');
})

bgRed.addEventListener('click', function(e) {
    document.body.classList.add('background-red');
    header.innerHTML = "<h1>red</h1>";
    document.body.classList.remove('background-beige');
    document.body.classList.remove('background-salmon');
    document.body.classList.remove('background-lightblue');
    document.body.classList.remove('background-darkblue');
    showMenu.classList.remove('visible');
    hamburger.classList.toggle('animate');
})

bgSalmon.addEventListener('click', function(e) {
    document.body.classList.add('background-salmon');
    header.innerHTML = "<h1>salmon</h1>";
    document.body.classList.remove('background-beige');
    document.body.classList.remove('background-red');
    document.body.classList.remove('background-lightblue');
    document.body.classList.remove('background-darkblue');
    showMenu.classList.remove('visible');
    hamburger.classList.toggle('animate');
})

bgLightblue.addEventListener('click', function(e) {
    document.body.classList.add('background-lightblue');
    header.innerHTML = "<h1>light blue</h1>";
    document.body.classList.remove('background-beige');
    document.body.classList.remove('background-red');
    document.body.classList.remove('background-salmon');
    document.body.classList.remove('background-darkblue');
    showMenu.classList.remove('visible');
    hamburger.classList.toggle('animate');
    
})

bgDarkblue.addEventListener('click', function(e) {
    document.body.classList.add('background-darkblue');
    header.innerHTML = "<h1>dark blue</h1>";
    document.body.classList.remove('background-beige');
    document.body.classList.remove('background-red');
    document.body.classList.remove('background-lightblue');
    document.body.classList.remove('background-salmon');
    showMenu.classList.remove('visible');
    hamburger.classList.toggle('animate');
})


