import { faker } from '@faker-js/faker'

describe('Registration Flow', () => {
    let password = faker.internet.password()

    it('Enter the form details', () => {
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
        cy.get('#input-firstname').type(faker.company.catchPhrase())
        cy.wait(3000)
        cy.get('#input-lastname').type(faker.commerce.productDescription())
        cy.wait(3000)
        cy.get('#input-email').type(faker.commerce.productDescription())
        cy.get('#input-telephone').type(faker.phone.number())
        cy.get('#input-password').type(password)
        cy.get('#input-confirm').type(password)
        cy.get('input[type="radio"]').eq(1).check()
        cy.get('input[type="checkbox"]').check()
        cy.get('.btn.btn-primary').click()
        cy.contains('Your Account Has Been Created!').should('exist')

    })
})