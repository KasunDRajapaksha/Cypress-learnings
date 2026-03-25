export class CheckboxPage {
    checkCheckboxOne() {
        cy.get('input[type="checkbox"]').first().check()
    }

    verifyCheckboxChecked() {
        cy.get('input[type="checkbox"]').first().should('be.checked')
    }
}

export const onCheckboxPage = new CheckboxPage()