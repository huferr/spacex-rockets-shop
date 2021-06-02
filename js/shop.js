const shopButton = document.getElementById('shop_btn')
const shopMenuButton = document.getElementById('shop_menu_btn')
const shopBackground = document.getElementById('shop_background')
const shopContainer = document.getElementById('shop_container')
const closeButton = document.getElementById('close_button')
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
    menuOpen = false
    body.style.overflow = 'hidden'

})

closeButton.addEventListener('click', () => {
    shopBackground.style.opacity = '0'
    shopBackground.style.visibility = 'hidden'
    shopContainer.style.opacity = '0'
    shopContainer.style.visibility = 'hidden'
    body.style.overflow = 'visible'
})


const rockets = [
    {name: "Falcon 9", price: 90, speed: "10.500 km/h", image: "./images/rockets/falcon9.png" },
    {name: "Falcon Heavy", price: 120, speed: "15.000 km/h", image: "./images/rockets/falconheavy.png"},
    {name: "Saturn V", price: 40, speed: "5.000 km/h", image: "./images/rockets/saturnv.png"},
    {name: "Ariane 5", price: 45, speed: "6.000 km/h", image: "./images/rockets/ariane5.png"},
    {name: "Energia", price: 20, speed: "3.000 km/h", image: "./images/rockets/energia.png"},
    {name: "Proton", price: 60, speed: "8.000 km/h", image: "./images/rockets/proton.png"},
    {name: "PSLV", price: 10, speed: "1.500 km/h", image: "./images/rockets/pslv.png"},
    {name: "SPUTNIK", price: 70, speed: "9.000 km/h", image: "./images/rockets/sputnik.png"},
    {name: "KOSMOS-3M", price: 75, speed: "8.500 km/h", image: "./images/rockets/kosmos-3m.png"}
]



const maiorValorFilter = document.getElementById('maior_valor_filter')
const menorValorFilter = document.getElementById('menor_valor_filter')
const searchInput = document.getElementById('search_input')

menorValorFilter.addEventListener('click', () => {
    let filter = rockets.sort((a, b) => {
        return a.price - b.price
    })
    displayRockets(filter)
})

maiorValorFilter.addEventListener('click', () => {
    let filter = rockets.sort((a, b) => {
        return b.price - a.price
    })
    displayRockets(filter)
})

searchInput.addEventListener('keyup', (words) => {
    let wordEntered = words.target.value.toLowerCase()
    
    const filteredRockets = rockets.filter((allRockets) => {
        return (
            allRockets.name.toLowerCase().includes(wordEntered) ||
            allRockets.speed.includes(wordEntered)
        )
    })

    displayRockets(filteredRockets)
})

const loadRockets = () => {
   displayRockets(rockets)
}

let rocketsList = document.getElementById('rockets_list')

const displayRockets = (allRockets) => {
    const htmlString = allRockets
        .map((allRockets) => {
        return `
            <li class="rockets">
                <img src="${allRockets.image}"></img>
                <h3>${allRockets.name}</h3>
                <p>PRICE: ${allRockets.price} BTC</p>
                <p>MAX SPEED: ${allRockets.speed}</p>
                <button>BUY</button>
            </li>
        `
        })
        .join("")
    rocketsList.innerHTML = htmlString  
}

loadRockets()


