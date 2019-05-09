
const carouselUl = document.querySelector('.carousel_collection');
let carouselImages = document.querySelectorAll('.carousel_collection li')
carouselImages = Array.from(carouselImages)
const nextButton = document.querySelector('.arrow_wrapper_left');
const prevButton = document.querySelector('.arrow_wrapper_right');

//********************SLIDER TOP***********************//

let current = 0

function reset (){
    carouselImages.forEach((item)=> {
        item.style.display = 'none'
    })
}
function startSlide(){
    reset();
    carouselImages[0].style.display = 'flex'
}
//***************************SLIDE LEFT**************************//
function slideLeft(){
    reset();
    carouselImages[current - 1].style.display = 'flex';
    current--
}

prevButton.addEventListener('click',function moveSlideLeft() {
    if (current === 0) {
        current = carouselImages.length
    }
    slideLeft() 
})

//***************************SLIDE RIGHT**************************//
function slideRight(){
    reset();
    carouselImages[current + 1].style.display = 'flex';
    current++
}
nextButton.addEventListener('click', () => {
    if (current === carouselImages.length - 1) {
        current = -1
    }
    slideRight();
})
setInterval(() => {
    if (current === carouselImages.length - 1) {
        current = -1
    }
    slideRight();
}, 5000);
startSlide()

//***************SECTION SLIDER WITH MODAL****************///
const currentImage = document.querySelector('.second_box img');
const images = document.querySelectorAll('.phone_details_image img');

images.forEach(item=> item.addEventListener('click', changeImage))
images[0].style.opacity = '.5'

let i = 0;

function changeImg() {
    currentImage.src = images[i].src;
    currentImage.style.cursor = 'pointer'
    images.forEach(item => item.style.opacity = '1');
    currentImage.addEventListener('click', showModal)
    
    if (i < images.length - 1) {
        i++;
        images[i-1].style.opacity = '.5'
    }else {
        images[2].style.opacity = '.5'
        i = 0;
    }
    setTimeout("changeImg()", 3000);
}
window.onload = changeImg;

function changeImage(e) {
    images.forEach(item => item.style.opacity = '1');

    currentImage.src = e.target.src;
    currentImage.classList.add('fadeIn')

    setTimeout(() => {
        currentImage.classList.remove('fadeIn')
    }, 500);

    e.target.style.opacity = '.5';
}

const formSelect = document.querySelector('.form_select');
formSelect.addEventListener('submit', getSelectInput);

function getSelectInput(e){
    e.preventDefault();
    const inputValue = document.querySelector('.select_input').value
    let percentage = inputValue /starsTotal * 100
    let roundPercentage = Math.round(percentage/10)*10
    starInner.style.width = `${roundPercentage + "%"}`  
}

let rating = 3.5;
let starsTotal = 5;
const starRating = document.querySelector('.stars_raitng p');
const starInner = document.querySelector('.star_inner')
function getRatings(){
    let percentage = rating /starsTotal * 100
    let roundPercentage = Math.round(percentage/10)*10
    starInner.style.width = `${roundPercentage + "%"}`  
}
document.addEventListener('DOMContentLoaded', getRatings);

const modal = document.querySelector('.modal_overlay');
const modalWindow = document.querySelector('.modal_window')
const closeSpan = document.querySelector('.close_modal');


closeSpan.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

function closeModal(e) {
    modal.style.display = 'none'
    modalWindow.style.display = 'none';
    modalWindow.children[1].remove();
}

function showModal(e) {
    modal.style.display = 'block'
    modalWindow.style.display = 'flex';

    const modalImage = document.createElement('img');
    modalImage.src = e.target.src

    modalWindow.appendChild(modalImage);
}

const hamburgerMenu = document.querySelector('.hamburger');
const navbarLinks = document.querySelector('.menu_collapse')


hamburgerMenu.addEventListener('click', showMenu);


function showMenu(){
    
    if (!hamburgerMenu.classList.contains('change')) {

        hamburgerMenu.classList.add('change');
        navbarLinks.style.display = 'flex'
    }else{
        hamburgerMenu.classList.remove('change');
        navbarLinks.style.display = 'none'
    }   
}

