import { onLoginPage } from "../support/page_object/login";

describe('Login', () => {

    let loginData

    beforeEach(() => {

        cy.visit('https://the-internet.herokuapp.com/login')

        cy.fixture("../fixtures/data/login.json").then((data) => {
            loginData = data
        })
    })
  it('should login successfully', () => {

    const username = loginData[0].username
    const password = loginData[0].password

    onLoginPage.usernameInput(username);
    onLoginPage.passwordInput(password);
    onLoginPage.loginButton();
    onLoginPage.successLogin();
  });

  it('should show error for invalid username', () => {

    const username = loginData[1].username
    const password = loginData[1].password

    onLoginPage.usernameInput(username);
    onLoginPage.passwordInput(password);
    onLoginPage.loginButton();
    onLoginPage.invalidUsername();
  });

  it('should show error for invalid password', () => {

    const username = loginData[2].username
    const password = loginData[2].password

    onLoginPage.usernameInput(username);
    onLoginPage.passwordInput(password);
    onLoginPage.loginButton();
    onLoginPage.invalidPassword();
  });
});