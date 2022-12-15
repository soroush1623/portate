const ham_menu = document.querySelector(".ham-menu")
const ham_butt = document.querySelector(".ham-butt")
const middle_bar = document.querySelector(".middle-bar")
const menu = document.querySelector(".nav")
const img = document.querySelector(".img")

var bool = true
ham_butt.addEventListener( 'click', () => {
    if (bool == true){
        middle_bar.style.transform= 'translateX(-3rem)'
        middle_bar.style.opacity= '0'
        document.querySelector('.bottom-bar').style.transform= 'rotate(45deg)'
        document.querySelector('.top-bar').style.transform= 'rotate(-45deg)'
        document.querySelector('.bottom-bar').style.marginTop= '-1.3rem'
        ham_menu.style.left = '0';
        menu.style.left = '0';
        img.style.marginLeft = '18rem';
        bool = false
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
        bool = true
    }
    
})
