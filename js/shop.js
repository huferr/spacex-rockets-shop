const shopButton = document.getElementById('shop_btn')
const shopMenuButton = document.getElementById('shop_menu_btn')
const shopBackground = document.getElementById('shop_background')
const shopContainer = document.getElementById('shop_container')
const closeButton = document.getElementById('close_button')

shopButton.addEventListener('click', () => {
    shopBackground.style.opacity = '1'
    shopBackground.style.visibility = 'visible'
    shopContainer.style.opacity = '1'
    shopContainer.style.visibility = 'visible'
    closeButton.style.transform = 'translateX(0)'
})

shopMenuButton.addEventListener('click', () => {
    shopBackground.style.opacity = '1'
    shopBackground.style.visibility = 'visible'
    shopContainer.style.opacity = '1'
    shopContainer.style.visibility = 'visible'
    closeButton.style.transform = 'translateX(0)'


    sideBarMenu.style.width = '0'
    backgroundMenu.style.opacity = '0'
    backgroundMenu.style.visibility = 'hidden'
    navItemsList.style.opacity = '0'
    navItemsList.style.visibility = 'hidden'
    navItemsList.style.transition = '0.1s'
    menuBtn.classList.remove('open')
    menuOpen = false
})

closeButton.addEventListener('click', () => {
    shopBackground.style.opacity = '0'
    shopBackground.style.visibility = 'hidden'
    shopContainer.style.opacity = '0'
    shopContainer.style.visibility = 'hidden'
    closeButton.style.transform = 'translateX(-15px)'
})



