class LoginPage {

    selectorList(){
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: ".oxd-button",
            wrongCredentialAlert: ".oxd-alert",
        } 
        
        return selectors
    }

    accessLoginPage(){
        cy.visit('/auth/login')
    }
    
    loginWithAnyUSer(username, password){
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }

    checkAccessInvalid(){
        cy.get(this.selectorList().wrongCredentialAlert)
    }
}

export default LoginPage