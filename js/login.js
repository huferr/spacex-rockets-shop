export function login() {
    let buy = document.getElementsByClassName("buy")

    for (let i = 0; i < buy.length; i++) {
        buy[i].addEventListener('click', () => {
            const backgroundLogin = document.getElementById('background_login')
            const loginContainer = document.getElementById('login_container')
            const closeLoginButton = document.getElementById('close_login_btn')
            
            backgroundLogin.style.visibility = 'visible'
            backgroundLogin.style.opacity = 1
            loginContainer.style.opacity = 1

            closeLoginButton.addEventListener('click', () => {
                backgroundLogin.style.visibility = 'hidden'
                backgroundLogin.style.opacity = 0
                loginContainer.style.opacity = 0
            })

            
            const loginButton = document.getElementById('login_button')

            loginButton.addEventListener('click', () => {
                
                let emailInput = document.getElementById('email_input')
                let passwordInput = document.getElementById('password_input')

                console.log('it works fine')
                
                
            })

        })
    }
    
}