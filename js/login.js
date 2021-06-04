export function login() {
    let buy = document.getElementsByClassName("buy")

    for (let i = 0; i < buy.length; i++) {
        buy[i].addEventListener('click', () => {
            const backgroundLogin = document.getElementById('background_login')
            backgroundLogin.style.visibility = 'visible'
        })
    }
    
}