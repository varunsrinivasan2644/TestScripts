describe('testscripts on unifize app', () => {

    it('Verify tall the textfield are working.', () => {
        
        //cy.login(Cypress.env('Username'), Cypress.env('Password'))
        cy.visit('https://app.unifize.com/conversation/1DJ3M2P8E')
        cy.wait(10000)
        
        cy.get(':nth-child(3) > .css-1d7p3tl > .css-1ygl1zo').click()
        cy.get('.css-1c3jaww').contains('Varun textfield checklist').click()
        cy.wait(10000)
         //CLICKING ON TEXTFIELD TEST CASES
         cy.get(':nth-child(1) > .css-13xxfwk > .css-12ogaoi').click()


        // //ENTER TEXT INTO THE FIELD
        cy.get(':nth-child(3) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('textarea').scrollIntoView()
        cy.get('textarea').type('HELLO VARUN')
        cy.get('.css-1q5hvdi').click()
         cy.wait(2000)

         //CLEAR INPUT MANUALLY FIELD BECOMES EMPTY
         cy.get(':nth-child(4) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
         cy.get('textarea').scrollIntoView()
         cy.get('textarea').type('abcdefghi').clear()
         cy.get('.css-1q5hvdi').click()
         cy.wait(3000)

         //COPY AND PASTE TEXT 
         cy.get(':nth-child(5) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
         cy.get('textarea').type('The cat runs across the road quickly A dog sings loudly in the park.My friend reads a book silently in the corner.The teacher writes a note carefully on the board.')
         cy.get('.css-1q5hvdi').click()
      
    //CLICK OUTSIDE AFTER ENTERING TEXT
    cy.get(':nth-child(6) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
    cy.get('textarea').type('abcdefghi')
    cy.wait(2000)

    //LEAVE FIELD EMPTY AND TRY TO SUBMIT
    cy.get(':nth-child(7) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
    cy.get('.css-1q5hvdi').click()

    //ENTER LONG TEXT
    cy.get(':nth-child(8) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
    cy.get('textarea').type('abcdefghijklmnopqrstuvwxyz')
    cy.get('.css-1q5hvdi').click()

    //ENTER ONLY SPACES
    cy.get(':nth-child(9) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
    cy.get('textarea').type('     ')
    cy.get('.css-1q5hvdi').click()


    //MINIMUM CHARACTER LIMIT
    cy.get(':nth-child(10) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
    cy.get('textarea').type('a')
    cy.get('.css-1q5hvdi').click()

     //MAX CHARACTER LIMIT
     cy.get(':nth-child(11) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
     cy.get('textarea').type('The cat danced across the table with grace. He found a forgotten treasure beneath the old oak tree.She sipped her coffee while watching the rain fall gently outside.The dog barked loudly, chasing after a butterfly.A mysterious light flickered in the distance as the storm raged.The book was filled with secrets that no one dared to uncover.His shoes were covered in mud after the long hike through the forest.They sat in silence, letting the music fill the room with emotion.The cake tasted like summer, with hints of lemon and strawberries.The mountain peak was shrouded in mist, making it look like a painting.She could hear the faint hum of the city far below.The clock struck midnight as they exchanged a quiet smile.')
     cy.get('.css-1q5hvdi').click()
 
      //MULTI LINE SELECT
      cy.get(':nth-child(12) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
     cy.get('textarea').type('The book was filled with secrets that no one dared to uncover.His shoes were covered in mud after the long hike through the forest.They sat in silence, letting the music fill the room with emotion.The cake tasted like summer, with hints of lemon and strawberries.The mountain peak was shrouded in mist, making it look like a painting.The clock struck midnight as they exchanged a quiet smile.')
     cy.get('.css-1q5hvdi').click()


     //MULTI LINE NOT SELECT
     cy.get(':nth-child(13) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
     cy.get('textarea').type('.My friend reads a book silently in the corner.The dog barked loudly, chasing after a butterfly.A mysterious light flickered in the distance as the storm raged.The book was filled with secrets that no one dared to uncover..The clock struck midnight as they exchanged a quiet smile.')
     cy.get('.css-1q5hvdi').click()


     //PLACEHOLDER IS FILLED
     cy.get(':nth-child(16) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
     cy.wait(3000)
     cy.get('textarea').type('YOU CAN SEE THE PLACEHOLDER')
    cy.get('.css-1q5hvdi').click()

    //PLACEHOLDER IS NOT FILLED
    cy.get(':nth-child(17) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
     cy.wait(3000)
     cy.get('textarea').type('YOU CANNOT SEE THE PLACEHOLDER')
    cy.get('.css-1q5hvdi').click()

    cy.wait(3000)

    //CLICK ONTEXTFIELD CONDITION TESTS
    cy.get(':nth-child(2) > .css-13xxfwk > .css-12ogaoi').click()
    cy.wait(1000)
    //SHOW UNTIL CONDITION IS MET
    cy.get(':nth-child(2) > .css-118f8xd > .css-1wyuvu').click()
    cy.wait(2000)
    //VALUE IS FILLED AND LOCKED
    cy.get(':nth-child(1) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
      cy.get('textarea').type('HELLO UNIFIZE IS LOCKED')
    cy.get('.css-1q5hvdi').click()

    //VALUE IS FILLED AND SHOWED
    cy.get(':nth-child(2) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
    cy.get('textarea').type('HELLO UNIFIZE')
    cy.get('.css-1q5hvdi').click()


    //VALUE IS FILLED AND HIDDEN 
    cy.get(':nth-child(3) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
    cy.get('textarea').type('HELLO UNIFIZE IS HIDDEN')
    cy.get('.css-1q5hvdi').click()
    cy.wait(2000)

   //  // //HIDDEN UNTIL CONDITION IS MET 
   //  // cy.get(':nth-child(3) > .css-118f8xd > .css-1wyuvu').click()
    // // cy.wait(2000)

    //MANDATORY UNTIL CONDITION IS MET
    cy.get('.css-14osa6n').click()
    cy.wait(2000)
    //VALUE IS FILLED BUT LOCKED 
    cy.get(':nth-child(1) > .css-1s62gu2 > .css-vr050o > .css-1kowfzf').click() 
    cy.get('textarea').type('NAMASTE UNIFIZE IS LOCKED')
    cy.get('.css-1q5hvdi').click()

    //VALUE IS FILLED BUT SHOWN
    cy.get(':nth-child(2) > .css-1s62gu2 > .css-vr050o > .css-1kowfzf').click() 
    cy.get('textarea').type('HELLO UNIFIZE IS SHOWN')
    cy.get('.css-1q5hvdi').click()
      
//VALUE IS FILLED BUT HIDDEN
      cy.get(':nth-child(3) > .css-1s62gu2 > .css-vr050o > .css-1kowfzf').click()
      cy.get('textarea').type('HELLO UNIFIZE IS HIDDEN')
    cy.get('.css-1q5hvdi').click()


    //DISABLE UNTIL CONDITIOM IS MET
    cy.get(':nth-child(5) > .css-118f8xd > .css-1wyuvu').click()
    cy.wait(2000)
    // //VALUE IS SHOWN
    // cy.get(':nth-child(5) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
    // cy.get('textarea').type('HELLO UNIFIZE')
    // cy.get('.css-1q5hvdi').click()

    })
  })