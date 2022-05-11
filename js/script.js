"use strict";
const loader = document.querySelector(".loader")

setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(()=> {
        loader.style.display = "none";
    }, 1500)
}, 2000);

//TABS

const tabs = document.querySelectorAll(".tabheader__item"),
tabContent = document.querySelectorAll(".tabcontent"),
headerParents = document.querySelector(".tabheader__items");

function hideTabContent() {
    tabContent.forEach((item) => {
        item.style.display = "none";
    });
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

function showTabContent (i = 0) {
    tabContent[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
}
hideTabContent();
showTabContent();

headerParents.addEventListener("click", (event) =>{
    if(event.target && event.target.classList.contains("tabheader__item")) {
        tabs.forEach((item, i) => {
            if(event.target == item) {
                hideTabContent();
                showTabContent(i);
            }
        })
    }
});

//Modal

const allModalBtn = document.querySelectorAll("[data-modal]"),
modal = document.querySelector(".modal"),
modalClose = document.querySelector("[data-close]");

allModalBtn.forEach((btn) => {
btn.addEventListener("click", openModal);
});

function openModal() {
modal.classList.add("show");
modal.classList.remove("hide");
document.body.style.overflow = "hidden";
clearInterval(ModalTimer);
}

function closeModal() {
modal.classList.add("hide");
modal.classList.remove("show");
document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        closeModal();
    }
})

const ModalTimer = setTimeout(openModal , 6000);

//SLIDER

// SLIDER
const slides = document.querySelectorAll('.offer__slide'),
prev = document.querySelector('.offer__slider-prev'),
next = document.querySelector('.offer__slider-next'),
current = document.querySelector('#current'),
total = document.querySelector('#total');

let slideIndex = 1;
show(slideIndex)
function show(s) {
if(s > slides.length){
  slideIndex = 1
}
if(s < 1) {
  slideIndex = slides.length
}
slides.forEach(item => item.style.cssText = 'display: none')
slides[slideIndex - 1].style.display = 'block'
if(slides.length < 10) {
  current.textContent = `0${slideIndex}`
}else{
  current.textContent = slideIndex
}
}
function sliderPlus(s) {
show(slideIndex += 1)
}
prev.addEventListener('click', () => {
sliderPlus(-1)
})
next.addEventListener('click', () => {
sliderPlus(1)
});

//Accardions

const accordion = document.querySelectorAll(".accordion")

accordion.forEach(acc => {
    acc.addEventListener('click', () => {
        acc.classList.toggle('active')
        const panel = acc.nextElementSibling
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null
        }else{
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
    })
})