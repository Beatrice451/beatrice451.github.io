const menuButton = document.querySelector('.side-menu-button');
const sidebar = document.querySelector('.header__flex');
const overlay = document.querySelector('.overlay')
const testbutton = document.getElementById('test')
const menuItem = document.querySelectorAll(".menu-item")
const backgr = document.getElementById('banner')
const slides = document.querySelectorAll(".slide")
const brands = document.querySelectorAll('.brand')

// const banners = document.getElementsByClassName("brand__banner")
// const fender = document.getElementById("fender")
// const yamaha = document.getElementById("yamaha")
// const us = document.getElementById("us")
// const casio = document.getElementById("casio")
// const our_banner = document.getElementById("our-banner")
// const our_text = document.getElementById("our-text")


let currentIndex = 0;

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    menuButton.classList.toggle('hide');
    overlay.classList.toggle('open');

})

document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove('open');
        menuButton.classList.remove('hide');
        overlay.classList.remove('open');
    }
  });


function changeSlide(numberOfSlides) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % numberOfSlides;
    slides[currentIndex].classList.add('active');
}

setInterval(() => {
    changeSlide(slides.length);
  }, 10000);

Array.from(brands).forEach(element => {
    element.addEventListener('mouseover', () => {
        console.log('test')
        element.classList.add('shifted');
    })
})

Array.from(brands).forEach(element => {
    element.addEventListener('mouseout', () => {
        element.classList.remove('shifted');
    })
})