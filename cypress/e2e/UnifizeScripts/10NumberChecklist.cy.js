describe('testscripts on unifize app', () => {

    it('Verify that the Number field is working.', () => {
        
        //cy.login(Cypress.env('Username'), Cypress.env('Password'))
        cy.visit('https://app.unifize.com/conversation/1DJ3M2P8E')
        cy.wait(10000)
        
        cy.get(':nth-child(3) > .css-1d7p3tl > .css-1ygl1zo').click()
        cy.get('.css-1c3jaww').contains('Varun number checklist').click()
        cy.wait(12000)
         // //CLICKING On NUMBER FIELD SETTINGS
         cy.get(':nth-child(1) > .css-13xxfwk > .css-12ogaoi').click()


        // //CLICKING On POSITIVE TESTCASES Test Min-Max (Setting Max=100 & Min= 20)
        cy.get(':nth-child(2) > .css-118f8xd > .css-1wyuvu').click()
         cy.wait(2000)
        // ENTER A NUM BTW 20-100
        cy.get('.css-1kx4sr > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('60')
        cy.get('.css-1q5hvdi').click()
        

        //positive float number
        cy.get(':nth-child(2) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('54.56473')
        cy.get('.css-1q5hvdi').click()
        
        // cy.get('.Toastify__toast-container').contains('The number must be in the range 20 and 100')
        // cy.get('.css-yncqvq').clear().type('14.89473')
        // cy.get('.css-1q5hvdi').click()


        //boundry case
        cy.get(':nth-child(3) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('99.567')
        cy.get('.css-1q5hvdi').click()
        
    

        //DECIMAL NUMBER
        cy.get(':nth-child(4) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type(99.99)
        cy.get('.css-1q5hvdi').click()
        cy.wait(3000)
  
        //TEST SCENARIO FOR MAX NEGATIVECASE GREATER THAN 100
        cy.get(':nth-child(3) > .css-118f8xd > .css-1wyuvu').click()
        cy.wait(3000)
        //ENTER A NUMBER >100
        cy.get(':nth-child(1) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('900')
        cy.get('.css-1q5hvdi').click()

        //ENTER ANY NEGATIVE NUM
        cy.get(':nth-child(2) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('-600')
        cy.get('.css-1q5hvdi').click()

        //ENTERTHE EDGE VALUE
        cy.get(':nth-child(3) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('99.790')
        cy.get('.css-1q5hvdi').click()

        //ENTER NEGATIVE FLOATING VALUE
        cy.get(':nth-child(4) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('-7.9890')
        cy.get('.css-1q5hvdi').click()

        cy.wait(1000)
        //ENTER POSITIVE FLOATING VALUE
        cy.get(':nth-child(5) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('87.9890')
        cy.get('.css-1q5hvdi').click()

      cy.wait(2000)
        //TEST SCENARIO FORM IN NEGATIVE CASES(ENTER A NUMBER LESS THAN 20)
        cy.get(':nth-child(4) > .css-118f8xd > .css-1wyuvu').click()
        //ENTER A NUMBER < 20
        cy.get(':nth-child(1) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('10')
        cy.get('.css-1q5hvdi').click({multiple:true})
        

        //ENTER A NEGATIVE NUMBER
        cy.get(':nth-child(2) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('-80')
        cy.get('.css-1q5hvdi').click({multiple:true})
        

        //ENTER A FLOATING NUMBER
        cy.get(':nth-child(4) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('2.6')
        cy.get('.css-1q5hvdi').click({multiple:true})
        cy.wait(2000)


        //TEST CONDITIONS UNTIL CONDITION IS MET
       cy.get(':nth-child(2) > .css-13xxfwk > .css-12ogaoi').click({force:true})
        cy.wait(2000)
        //WHEN BEHAVIOUR IS SHOWN
        cy.get(':nth-child(2) > .css-13xxfwk > .css-5iufx9 > .css-7byeoi > :nth-child(3) > .css-118f8xd > .css-1wyuvu').click()
        //ENTER A NUMBER LESS THAN 20
        cy.get(':nth-child(1) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('17')
        cy.get('.css-1q5hvdi').click()

        //ENTER A GREATER NUMBER THAN 150
        cy.get(':nth-child(2) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('200')
        cy.get('.css-1q5hvdi').click()
        cy.wait(2000)
        //ENTER A NUMBER EQUALS TO 40
        cy.get(':nth-child(3) > .css-118f8xd > .css-ht2by7 > .css-6e65c0 > :nth-child(3) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click({multiple:true})
        cy.get('.css-yncqvq').type('40')
        cy.get('.css-1q5hvdi').click()

        //IS FILLED SHOWN
        cy.get(':nth-child(4) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('60')
        cy.get('.css-1q5hvdi').click()
      cy.wait(2000)

        //WHEN BEHAVIOUR IS LOCKED
        cy.get(':nth-child(4) > .css-118f8xd > .css-1wyuvu').click({multiple:true})
        cy.wait(2000)
        //ENTER A NUMBER GREATER THAN 100
        cy.get(':nth-child(2) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
         cy.get('.css-yncqvq').type('200')
        cy.get('.css-1q5hvdi').click()

        //ENTER A NUMBER EQUALS TO 80
        cy.get(':nth-child(3) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('80')
        cy.get('.css-1q5hvdi').click()

         //IS FILLED LOCKED
        cy.get(':nth-child(4) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('40')
        cy.get('.css-1q5hvdi').click()


        //WHEN BEHAVIOUR IS HIDDEN
        cy.get(':nth-child(5) > .css-118f8xd > .css-1wyuvu').click()
        cy.wait(2000)
        //ENTER A NUMBER > THAN 50
        cy.get(':nth-child(5) > .css-118f8xd > .css-ht2by7 > .css-6e65c0 > :nth-child(1) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
        cy.get('.css-yncqvq').type('55')
        cy.get('.css-1q5hvdi').click()

        // // //WHEN A NUMBER =25
        cy.get(':nth-child(5) > .css-118f8xd > .css-ht2by7 > .css-6e65c0 > :nth-child(1) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click({multiple:true},{force:true})
        cy.get('.css-yncqvq').type('25')
         cy.get('.css-1q5hvdi').click()


    //     //HIDDEN UNTIL CONTION IS MET WHEN BEHAVIOUR IS SHOWN
    //     cy.get(':nth-child(7) > .css-118f8xd > .css-1wyuvu').click({force:true})
    //     cy.wait(2000)
    //   // ENTER A NUM < THAN 90
    //   //cy.get(':nth-child(1) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
    //   cy.get(':nth-child(7) > .css-118f8xd > .css-ht2by7 > .css-6e65c0 > .css-1ihp9nt > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
    //    cy.get('.css-yncqvq').type('50')
    //    cy.get('.css-1q5hvdi').click()
     
    //    cy.wait(2000)
    //  // IS EMPTY SHOWN
    //   //cy.get(':nth-child(7) > .css-118f8xd > .css-ht2by7 > .css-6e65c0 > .css-1ihp9nt > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click({multiple:true})
    //   cy.get(':nth-child(2) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
    //   cy.get('.css-yncqvq').type('90')
    //  cy.get('.css-1q5hvdi').click()


    //MANDATORY UNTIL CONDITION IS MET(WHEN BEHAVOIUR IS SHOWN)
    cy.get(':nth-child(11) > .css-118f8xd > .css-14osa6n').click()
    cy.wait(2000)
    // //ENTER A NUMBER < 145
    // cy.get(':nth-child(11) > .css-118f8xd > .css-ht2by7 > .css-6e65c0 > :nth-child(1) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
    // cy.get('.css-yncqvq').type('50')
    //  cy.get('.css-1q5hvdi').click()

     //ENTER A NUMBER > 145
     cy.get(':nth-child(2) > .css-1s62gu2 > .css-vr050o > .css-1kowfzf').click()
     cy.get('.css-yncqvq').type('150')
     cy.get('.css-1q5hvdi').click()

      //ENTER A NUMBER = 140
     cy.get(':nth-child(3) > .css-1s62gu2 > .css-vr050o > .css-1kowfzf').click()
     cy.get('.css-yncqvq').type('140')
     cy.get('.css-1q5hvdi').click()

     //IS FILLED SHOWN
     cy.get(':nth-child(4) > .css-1s62gu2 > .css-vr050o > .css-1kowfzf').click()
     cy.get('.css-yncqvq').type('100')
     cy.get('.css-1q5hvdi').click()

    //  //IS EMPTY SHOWN
    //  cy.get(':nth-child(5) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
    //  cy.get('.css-yncqvq').type('10')
    //  cy.get('.css-1q5hvdi').click()

    //WHEN BEHAVIOUR IS LOCKED
    cy.get(':nth-child(12) > .css-118f8xd > .css-14osa6n').click()
    cy.wait(2000)
    //ENTER A NUMBER > 120
    cy.get(':nth-child(2) > .css-1s62gu2 > .css-vr050o > .css-1kowfzf').click()
    cy.get('.css-yncqvq').type('140')
    cy.get('.css-1q5hvdi').click()

    //ENTER NUMBER EQUALS TO 120
    cy.get(':nth-child(3) > .css-1s62gu2 > .css-vr050o > .css-1kowfzf').click()
    cy.get('.css-yncqvq').type('120')
    cy.get('.css-1q5hvdi').click()

    //IS FILLED LOCKED
    cy.get(':nth-child(4) > .css-1s62gu2 > .css-vr050o > .css-1kowfzf').click()
    cy.get('.css-yncqvq').type('110')
    cy.get('.css-1q5hvdi').click()

   // //WHEN BEHAVIOUR IS HIDDEN
   cy.get(':nth-child(13) > .css-118f8xd > .css-14osa6n').click()
   cy.wait(2000)
    //NUMBER > 250
    cy.get(':nth-child(1) > .css-1s62gu2 > .css-vr050o > .css-1kowfzf').click()
    cy.get('.css-yncqvq').type('270')
    cy.get('.css-1q5hvdi').click()

    // //EQUALS TO 250
    // cy.get(':nth-child(2) > .css-1s62gu2 > .css-vr050o > .css-1kowfzf').click({force:true})
    // cy.get('.css-yncqvq').type('250')
    // cy.get('.css-1q5hvdi').click({force:true})

    // // //IS FILLED LOCKED
    // // cy.get(':nth-child(2) > .css-1s62gu2 > .css-vr050o > .css-1kowfzf').click({force:true})
    // // cy.get('.css-yncqvq').type('20')
    // // cy.get('.css-1q5hvdi').click({force:true})


    // //DISABLE UNTIL CONDITION MET (WHEN BEHAVIOUR IS SHOWN)
   //  // cy.get(':nth-child(15) > .css-118f8xd > .css-1wyuvu').click()
   //  // cy.wait(2000)
    // // //ENTER A NUMBER LESS THAN 200
    // // cy.get(':nth-child(1) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click({force:true})
    // // cy.get('.css-yncqvq').type('20')
    //  // cy.get('.css-1q5hvdi').click()

    //TEST AND CONDITIONS
    cy.get(':nth-child(3) > .css-13xxfwk > .css-12ogaoi').click({force:true})
    cy.wait(3000)
    //WITHOUT SETTING MAX AND MIN  
    cy.get(':nth-child(3) > .css-13xxfwk > .css-5iufx9 > .css-7byeoi > :nth-child(2) > .css-118f8xd > .css-1wyuvu').click()
    cy.wait(4000)
    //ENTER A NUMBER >70 and < 80
    cy.get(':nth-child(1) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').should('be.visible').click({force:true},{multiple:true})
     cy.get('.css-yncqvq').should('be.visible').type('75')
    cy.get('.css-1q5hvdi').click()

    //ENTER A NUMBER > 60 <70 AND = 65
    cy.get(':nth-child(2) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').should('be.visible').click({force:true},{multiple:true})
    cy.get('.css-yncqvq').should('be.visible').type('65')
    cy.get('.css-1q5hvdi').click()
      cy.wait(3000)
    //WITHOUT SETTING MAX=50 AND MIN=10
    cy.get(':nth-child(3) > .css-118f8xd > .css-1wyuvu').click({force:true})
    cy.wait(3000)
    //ENTER A NUM >10 < 50
    cy.get(':nth-child(1) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click({force:true},{multiple:true})
    cy.get('.css-yncqvq').should('be.visible').type('25')
    cy.get('.css-1q5hvdi').click()
 cy.wait(2000)
    // //ENTER A NUM > 10 <50 TO BE HIDDEN
    // cy.get(':nth-child(2) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
    // cy.get('.css-yncqvq').type('50')
    // cy.get('.css-1q5hvdi').click()

    // //ENTER A NUMBER > THAN 50
    // cy.get(':nth-child(4) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click()
    // cy.get('.css-yncqvq').type('25')
    // cy.get('.css-1q5hvdi').click()

    //NUMBER >10 < 50 = 25
    cy.get(':nth-child(3) > .css-1s62gu2 > .css-vr050o > .css-1is2g17').click({multiple:true})
    cy.get('.css-yncqvq').type('25')
    cy.get('.css-1q5hvdi').click()

  
      })
    })
    