const ham_menu = document.querySelector(".ham-menu")
const ham_butt = document.querySelector(".ham-butt")
const middle_bar = document.querySelector(".middle-bar")
const menu = document.querySelector(".nav")
const img = document.querySelector(".img")
const nav_btn = document.querySelectorAll(".nav_btn")
const project = document.querySelector(".projects_cat")
const home = document.querySelector(".home")

const first_container = document.querySelector(".container")
const second_container = document.querySelector(".second_container")

var main_page = true
var projcet_tuggle = false
var menu_tuggle = false

ham_butt.addEventListener( 'click', () => {
    if (menu_tuggle == false){
        middle_bar.style.transform= 'translateX(-3rem)'
        middle_bar.style.opacity= '0'
        document.querySelector('.bottom-bar').style.transform= 'rotate(45deg)'
        document.querySelector('.top-bar').style.transform= 'rotate(-45deg)'
        document.querySelector('.bottom-bar').style.marginTop= '-1.3rem'
        ham_menu.style.left = '0';
        menu.style.left = '0';
        img.style.marginLeft = '18rem';
        menu_tuggle = true
    }
    else{
        middle_bar.style.transform= 'translateX(0)'
        middle_bar.style.opacity= '1'
        document.querySelector('.bottom-bar').style.transform= 'rotate(0)'
        document.querySelector('.top-bar').style.transform= 'rotate(0)'
        document.querySelector('.bottom-bar').style.marginTop= '0'
        ham_menu.style.left = '-14rem';
        menu.style.left = '-14rem';
        img.style.marginLeft = '4rem';
        menu_tuggle = false
    }
    
})

home.addEventListener('click', () => {
    if (main_page == false){
        first_container.classList.remove('hide')
        siblings.classList.add('hide')
        main_page = true
    }
    else{
       
    }
})
project.addEventListener('click', () => {
    if (projcet_tuggle == false){
        siblings.classList.add('hide')
        second_container.style.animation = ('roll_in 0.5s')
        second_container.classList.remove('hide')
        projcet_tuggle = true
    }
    else{
        projcet_tuggle = false
    }
})
