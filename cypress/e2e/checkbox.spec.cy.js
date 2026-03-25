import { onCheckboxPage } from "../support/page_object/checkbox";

describe('Checkbox', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes')
    })

    it('should check the checkbox', () => {

        onCheckboxPage.checkCheckboxOne()
        onCheckboxPage.verifyCheckboxChecked()
    })
})