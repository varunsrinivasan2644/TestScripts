describe('testscripts on unifize app', () => {

    it('Verify that the date picker opens when user clicks on it.', () => {
        
        //cy.login(Cypress.env('Username'), Cypress.env('Password'))
        cy.visit('https://app.unifize.com/conversation/1DJ3M2P8E')
        cy.wait(10000)
        
        cy.get(':nth-child(3) > .css-1d7p3tl > .css-1ygl1zo').click()
        cy.get('.css-1c3jaww').contains('Varun date checklist').click()
        //cy.get('.css-y46zp7 > .css-i93py').click()
        cy.wait(8000)
        //CLICKING On DATE FIELD SETTINGS
        cy.get(':nth-child(1) > .css-13xxfwk > .css-12ogaoi').click()
        //CLICKING On POSITIVE TESTCASES
        cy.get(':nth-child(2) > .css-118f8xd > .css-1wyuvu').click()
        cy.wait(2000)
        //CLICKING OF DATE PICKER
        cy.get(':nth-child(1) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
       // cy.get('.css-15vhaln').trigger('click',{force:true})

       cy.get('.css-15vhaln').then(($input) => {
        // Get the position and dimensions of the textbox
        const rect = $input[0].getBoundingClientRect();

        // Calculate the coordinates where you want to click (e.g., 10px from the left, 5px from the top)
        const x = rect.left + 200;  // Adjust the 10px based on your desired position (X-axis)
        const y = rect.top + 150;    // Adjust the 5px based on your desired position (Y-axis)

        // Trigger the click at the specified coordinates
        cy.wrap($input)
          .trigger('mousedown', { clientX: x, clientY: y })
          .trigger('mouseup', { clientX: x, clientY: y })
          .trigger('click', { clientX: x, clientY: y });
      });
      })
    })
    