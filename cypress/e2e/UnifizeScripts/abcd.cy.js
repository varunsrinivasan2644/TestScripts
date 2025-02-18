describe('testscripts on unifize app', () => {

    it('Verify that the Revision field is working.', () => {
        
        //cy.login(Cypress.env('Username'), Cypress.env('Password'))
        cy.visit('https://app.unifize.com/conversation/1DJ3M2P8E')
        cy.wait(10000)
        
        cy.get(':nth-child(3) > .css-1d7p3tl > .css-1ygl1zo').click()
        cy.get('.css-1c3jaww').contains('varun userfield approval checklist').click()
        cy.wait(8000)
         
      })
    })
    