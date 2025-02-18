describe('testscripts on unifize app', () => {

    it('Verify that the Revision field is working.', () => {
        
        //cy.login(Cypress.env('Username'), Cypress.env('Password'))
        cy.visit('https://app.unifize.com/conversation/1DJ3M2P8E')
        cy.wait(10000)
        
        cy.get(':nth-child(3) > .css-1d7p3tl > .css-1ygl1zo').click()
        cy.get('.css-1c3jaww').contains('varun revision checklist').click()
        cy.wait(8000)
         // Entering the name of tasks
         cy.get('.css-1kowfzf').click()
         cy.get('textarea').type('Test revision')
         cy.get('.css-1q5hvdi').click()

         //PICKING THE USER FIELD
         cy.get('.chakra-stack > .css-1is2g17').click() 
         cy.get(':nth-child(3) > .chakra-stack').click() 


         //ENTER THE RESOURCE REQUIRED
         cy.get(':nth-child(3) > .css-y7atze > .css-jlt1ai > .css-1is2g17').click()
         cy.get('.css-yncqvq').type('1')
         cy.get('.css-1q5hvdi').click()


        //  //ENTER DATE OF COMPLETION
        //  cy.get(':nth-child(4) > .css-y7atze > .css-jlt1ai > .css-1is2g17').click()
        //  cy.get('.css-15vhaln').click()

        cy.wait(4000)
//         // CREATING REVISION
//         cy.get('#popover-trigger-56').contains('Create Revision').click({force:true})
//         cy.get('.css-nik2af').click()
//         cy.get('.sc-cWSHoV').click()
//         cy.wait(5000)

        //Request Approval
        cy.get('.css-1is2g17').contains('Request Approval').click({force:true})
        cy.wait(3000)
        //ADD SIGNATURE
        cy.get('.css-1qin09d').click()
        //cy.get('#popover-trigger-60').click({force:true})
        //ENTERING EMAIL
        cy.get('#email').type('varun.srinivasan@unifize.com')
        //Enter password
        cy.get('#password').type('Varuns@26444',{log:false})
        cy.get('.css-1cie75h').click()



        // //CLICKING ON REVISION FIELD SETTINGS
        // cy.get('.css-12ogaoi').click()
        // cy.get('.css-12ogaoi').scrollIntoView()
        
         
        // //WHO CAN CREATE REVISIONS
        // cy.get(':nth-child(2) > .css-118f8xd > .css-1wyuvu').click()
        // cy.wait(4000)
        // //AS ALL PARCIPANTS
        // cy.get('#popover-trigger-71').click()
        // cy.get('.css-nik2af').click()
        // cy.get('.sc-cWSHoV').click()


      })
    })
    