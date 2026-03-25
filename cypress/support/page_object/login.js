export class LoginPage {
    usernameInput(username) {

         cy.get('#username').type(username)
    }
    passwordInput(password) {

         cy.get('#password').type(password)
    }
    loginButton() {

         cy.get('button[type="submit"]').click()
    }

    successLogin() {

        cy.url().should("include", "/secure");
    }

    invalidUsername() {

        cy.get('#flash').should('contain', 'Your username is invalid!');
    }

    invalidPassword() {

        cy.get('#flash').should('contain', 'Your password is invalid!');
    }
}

export const onLoginPage = new LoginPage()