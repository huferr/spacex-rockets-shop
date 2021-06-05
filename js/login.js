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
        })
    }
}

const loginButton = document.getElementById('login_button')

    loginButton.addEventListener('click', () => {
        
        let emailInput = document.getElementById('email_input')
        let passwordInput = document.getElementById('password_input')
        
        if(emailInput.value === "elonmusk@spacex.com" & passwordInput.value === "ilovedogecoin"){

            displayMessage('success',"Now you're Logged in!")

        } else if(emailInput.value != 'elonmusk@spacex.com' || passwordInput.value != "ilovedogecoin") {

            displayMessage('error', 'Invalid Email/Password, please Try Again!')
        }
        
    })

function displayMessage(situation, message) {
    let loginMessage = document.getElementById('login_msg')

    loginMessage.classList.remove('login_msg_success', 'login_msg_error')
    loginMessage.classList.add(`login_msg_${situation}`)
    loginMessage.innerHTML = message
}    