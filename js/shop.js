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
                <button class="buy">BUY</button>
            </li>
        `
        })
        .join("")

    rocketsList.innerHTML = htmlString

    login()
}

import {login} from './login.js'

loadRockets()

