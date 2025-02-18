describe('testscripts on unifize app', () => {

it.only('2Creating Process and creating a chatroom and Testing the number with min 20 and max 100 ', () => {
    
    //cy.login(Cypress.env('Username'), Cypress.env('Password'))
    cy.visit('https://app.unifize.com/conversation/1DJ3M2P8E')
    cy.wait(10000)
    cy.get(':nth-child(7) > .css-1d7p3tl').click()
    //create new process template
    cy.get('.css-yb5rku').click()
    cy.get('header > .chakra-input').type('Testing the number with min 20 and max 100')
    cy.get('#description').type('Testing the number with the setting of min 20 and max 100')
    // cy.get('header > .chakra-input').type(faker.company.catchPhrase())
    // cy.get('#description').type(faker.company.catchPhrase())
    cy.get('.css-29kerx > .chakra-button').click()
    cy.get('.css-rmxdag > .chakra-button').click()
    //createprocess and exit
    cy.get('.css-e63gvv').click()
    cy.get(':nth-child(7) > .css-1d7p3tl > a > .css-1ygl1zo').click()
   // cy.get(':nth-child(3) > .css-ncn170 > [style="display: flex; align-items: center; gap: 0.5rem;"] > a > .chakra-text').click()
    cy.get(8000)
    cy.get('.css-1e4rb2a').contains('Testing the number with min 20 and max 100').click()
    cy.get('.css-aggl2l > :nth-child(3)').click()
    cy.get('#title').type('Testing the number field with min:20 and max:100')
    cy.get('.css-no4vsb').click()
     cy.get('.css-ialyia').click()
    cy.get('a > .chakra-stack').click()
    // //ADDING FEILDS
    cy.get('.css-1qukn2z > .chakra-stack > :nth-child(1)').click({force:true})
    cy.wait(1000)
    cy.get('.css-150716z > :nth-child(7)').click()
    cy.wait(1000)
    cy.get('.css-hboir5 > :nth-child(2) > .chakra-button').click({force:true})
    cy.wait(2000)
//     //ADDING NUMBER IN NUMBERFIELD
      cy.get('.css-mze1nh > :nth-child(1) > .chakra-input').type('Enter Number between only 20-100')
     cy.get('.css-84zodg > .css-29kerx > .chakra-button').click()
     cy.wait(2000)
     // // //CLICKING ON SETTINGS
    cy.get(':nth-child(2) > :nth-child(1) > .chakra-button').click()
    cy.get('.css-owjkmg > :nth-child(1) > .chakra-stack > .chakra-button').click({force:true})
   // ADDING NUMBERFIELD SETTINGS
   cy.get('#max').type('100')
   cy.get('#min').type('20')
   cy.get('.chakra-modal__footer > :nth-child(2) > .chakra-button').click()
//     //ADDING CONDITIONS
cy.get(':nth-child(2) > :nth-child(1) > .chakra-button').click()
cy.wait(1000)
cy.get('.chakra-tabs > .chakra-tabs__tablist')
  .contains('Conditions')
  .click();

    cy.get('.css-zdfn8s > .chakra-radio-group > .chakra-stack > label[data-checked=""] > .chakra-radio__control').click()
    cy.get('.css-il7sii > .css-79elbk > .css-1m2c7vz').click()
    cy.get('.css-1tna9at > :nth-child(4)').click()
//    //qualifier
    cy.get('.css-1ug7c8t > .css-79elbk > .css-1m2c7vz').click()
    cy.get('.css-1tna9at > :nth-child(1)').click()

//     //BEHAVIOUR
    cy.get('.css-1ipuqvb > .css-79elbk > .css-1m2c7vz').click()
    cy.get('.css-1tna9at > :nth-child(2)').click()

//     //UPDATING FIELD SETTING
    cy.get('.chakra-modal__footer > :nth-child(2) > .chakra-button').click()
//     //SAVING FIELDS
     cy.get('.css-84zodg > .css-29kerx > .chakra-button').click()
//     //EXIT
    cy.get('.css-rmxdag > .chakra-button').click()
    cy.get('.css-1is2g17').click()

    cy.get('.css-yncqvq').type('120')
    cy.get('.css-1q5hvdi').click()
   
   // cy.get('.css-v8h4gg').contains('The number must be in the range 20 and 100')
cy.wait(3000)
    cy.get('.css-10zelb5').dblclick()
    cy.get('.css-1is2g17').click()
   cy.get('.css-yncqvq').type('70')
   cy.get('.css-1q5hvdi').click()
    
  })
})
