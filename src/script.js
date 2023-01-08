const ham_menu = document.querySelector(".ham-menu")
const ham_butt = document.querySelector(".ham-butt")
const middle_bar = document.querySelector(".middle-bar")
const menu = document.querySelector(".nav")
const img = document.querySelector(".img")
const nav_btn = document.querySelectorAll(".nav_btn")
var menu_tuggle = false

ham_butt.addEventListener( 'click', () => {
    if(window.screen.width <= 550) {
        if (menu_tuggle == false){
            middle_bar.style.transform= 'translateX(-0.1rem)'
            middle_bar.style.opacity= '0'
            document.querySelector('.bottom-bar').style.transform= 'rotate(45deg)'
            document.querySelector('.top-bar').style.transform= 'rotate(-45deg)'
            document.querySelector('.bottom-bar').style.marginTop= '-1rem'
            menu.style.top = '0vh';
            menu_tuggle = true
        }
        else{
            middle_bar.style.transform= 'translateX(0)'
            middle_bar.style.opacity= '1'
            document.querySelector('.bottom-bar').style.transform= 'rotate(0)'
            document.querySelector('.top-bar').style.transform= 'rotate(0)'
            document.querySelector('.bottom-bar').style.marginTop= '0'
            menu.style.top = '-100vh';
            menu_tuggle = false
        }
    } if(window.screen.width >= 550) {
        if (menu_tuggle == false){
            middle_bar.style.transform= 'translateX(-0.1rem)'
            middle_bar.style.opacity= '0'
            document.querySelector('.bottom-bar').style.transform= 'rotate(45deg)'
            document.querySelector('.top-bar').style.transform= 'rotate(-45deg)'
            document.querySelector('.bottom-bar').style.marginTop= '-1.4rem'
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
    }
})
