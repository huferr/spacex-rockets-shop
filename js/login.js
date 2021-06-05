export function login() {
    let buy = document.getElementsByClassName("buy")

    for (let i = 0; i < buy.length; i++) {
        buy[i].addEventListener('click', () => {
            const backgroundLogin = document.getElementById('background_login')
            const loginContainer = document.getElementById('login_container')
            backgroundLogin.style.visibility = 'visible'
            backgroundLogin.style.opacity = 1
            loginContainer.style.opacity = 1
        })
    }
    
}