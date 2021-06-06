export function login() {
    let buy = document.getElementsByClassName("buy")

    for (let i = 0; i < buy.length; i++) {
        buy[i].addEventListener('click', () => {
            const backgroundLogin = document.getElementById('backgroundLogin')
            const loginContainer = document.getElementById('loginContainer')
            const closeLoginButton = document.getElementById('closeLoginBtn')
            
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

const loginButton = document.getElementById('loginButton')

    loginButton.addEventListener('click', () => {
        
        let emailInput = document.getElementById('emailInput')
        let passwordInput = document.getElementById('passwordInput')
        
        if(emailInput.value === "elonmusk@spacex.com" & passwordInput.value === "ilovedogecoin"){

            displayMessage('Success',"Now you're Logged in!")

        } else if(emailInput.value != 'elonmusk@spacex.com' || passwordInput.value != "ilovedogecoin") {

            displayMessage('Error', 'Invalid Email/Password. Please, Try Again!')
        }
        
    })

function displayMessage(situation, message) {
    let loginMessage = document.getElementById('loginMsg')

    loginMessage.classList.remove('loginMsgSuccess', 'loginMsgError')
    loginMessage.classList.add(`loginMsg${situation}`)
    loginMessage.innerHTML = message
}    