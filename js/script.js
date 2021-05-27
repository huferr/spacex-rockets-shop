// Hamburguer menu and sidebar Menu

const menuBtnContainer = document.querySelector('.menu_btn_container')
const menuBtn = document.querySelector('.menu_btn')
let menuOpen = false
const sideBarMenu = document.getElementById('sidebar_menu')
const backgroundMenu = document.getElementById('menu_close')
const body = document.getElementById('body')
const navItemsList = document.getElementById('nav_item_list')

menuBtnContainer.addEventListener('click', () => {
    
    if(!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen = true
        sideBarMenu.style.width = '350px'
        backgroundMenu.style.opacity = '1'
        backgroundMenu.style.visibility = 'inherit'
        navItemsList.style.opacity = '1'
        navItemsList.style.visibility = 'inherit'
        navItemsList.style.transition = '2s'
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false

        // take off Side bar Menu, putting its opacity back to 0;
        sideBarMenu.style.width = '0'
        // Take off background Menu, putting its opacity back to 0 and its visibility to hidden;
        backgroundMenu.style.opacity = '0'
        backgroundMenu.style.visibility = 'hidden'

        navItemsList.style.opacity = '0'
        navItemsList.style.visibility = 'hidden'
        navItemsList.style.transition = '0.1s'
    }

})

backgroundMenu.addEventListener('click', () => {
    
    sideBarMenu.style.width = '0'
    backgroundMenu.style.opacity = '0'
    backgroundMenu.style.visibility = 'hidden'
    navItemsList.style.opacity = '0'
    navItemsList.style.visibility = 'hidden'
    navItemsList.style.transition = '0.1s'
    menuBtn.classList.remove('open')
    menuOpen = false
})





