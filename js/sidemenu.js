// Hamburguer menu and sidebar Menu

const menuBtnContainer = document.querySelector('.menuBtnContainer') // Variando meios de pegar um elemento
const menuBtn = document.querySelector('.menuBtn')
let menuOpen = false
const sideBarMenu = document.getElementById('sidebarMenu')
const backgroundMenu = document.getElementById('backgroundMenu')
const navItemsList = document.getElementById('navItemsList')


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

const shopButton = document.getElementById('shopBtn')
const shopMenuButton = document.getElementById('shopMenuBtn')
const shopBackground = document.getElementById('shopBackground')
const shopContainer = document.getElementById('shopContainer')
const closeButton = document.getElementById('closeButton')
const body = document.getElementById('body')

shopButton.addEventListener('click', () => {
    shopBackground.style.opacity = '1'
    shopBackground.style.visibility = 'visible'
    shopContainer.style.opacity = '1'
    shopContainer.style.visibility = 'visible'
    closeButton.style.transform = 'translateX(0)'
    body.style.overflow = 'hidden'
})

shopMenuButton.addEventListener('click', () => {

    shopBackground.style.opacity = '1'
    shopBackground.style.visibility = 'visible'
    shopContainer.style.opacity = '1'
    shopContainer.style.visibility = 'visible'
    sideBarMenu.style.width = '0'
    backgroundMenu.style.opacity = '0'
    backgroundMenu.style.visibility = 'hidden'
    navItemsList.style.opacity = '0'
    navItemsList.style.visibility = 'hidden'
    navItemsList.style.transition = '0.1s'
    menuBtn.classList.remove('open')
    body.style.overflow = 'hidden'
    menuOpen = false
})

closeButton.addEventListener('click', () => {
    shopBackground.style.opacity = '0'
    shopBackground.style.visibility = 'hidden'
    shopContainer.style.opacity = '0'
    shopContainer.style.visibility = 'hidden'
    body.style.overflow = 'visible'
})