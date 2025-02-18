/// <reference types="cypress" />
import { faker } from '@faker-js/faker'


describe('testscripts on unifize app', () => {
    beforeEach(() => {
    
        cy.visit('https://app.unifize.com/signin')
      })
  
//     it('Logging into the unifize app', () => {
        
//         cy.get('#email').should('be.visible')
//         cy.get('#email').type('varun.srinivasan@unifize.com')  
//         cy.wait(7000)
//         cy.get('.chakra-button').click() 
//         cy.get('#password').should('be.visible') 
//         cy.get('#password').type('Varuns@26444')
//         cy.get('form > .chakra-button').click()
//         cy.wait(7000)  

//   })

  it('Logging in and logging out to the unifize app', () => {
    cy.wait(2000)
    cy.get('.css-12lgyg7').contains('Email addrhjess')
    cy.get('#email').should('be.visible')
    cy.get('#email').type('varun.srinivasan@unifize.com')  
    cy.wait(7000)
    cy.get('.chakra-button').click() 
    cy.get('#password').should('be.visible') 
    cy.get('#password').type('Varuns@26444')
    cy.get('form > .chakra-button').click()
    cy.wait(7000)
    cy.get('.css-16ns5tm').click({force:true})
    cy.get('.css-1071rym > :nth-child(2) > :nth-child(7)').click()
  

})
it('clicking on about us', () => {
    cy.wait(2000)
    cy.get('[href="http://www.unifize.com/about-us"]').click()
  

})

it('Using loginng using custom commands', () => {
    
  cy.login(Cypress.env('Username'), Cypress.env('Password'))
  cy.wait(8000)
  cy.get('.css-16ns5tm').click({force:true})
  cy.get('.css-1071rym > :nth-child(2) > :nth-child(7)').click()
  

})

it.only('Creating Process and creating a chatroom and disabling thetextfield once it is field ', () => {
    
    //cy.login(Cypress.env('Username'), Cypress.env('Password'))
    cy.visit('https://app.unifize.com/conversation/1DJ3M2P8E')
    cy.wait(10000)
    cy.get(':nth-child(7) > .css-1d7p3tl').click()
    //create new process template
    cy.get('.css-yb5rku').click()
    cy.get('header > .chakra-input').type('Creating Test input')
    cy.get('#description').type('creating new process')
    // cy.get('header > .chakra-input').type(faker.company.catchPhrase())
    // cy.get('#description').type(faker.company.catchPhrase())
    cy.get('.css-29kerx > .chakra-button').click()
    cy.get('.css-rmxdag > .chakra-button').click()
    //createprocess and exit
    cy.get('.css-e63gvv').click()
    cy.get(':nth-child(7) > .css-1d7p3tl > a > .css-1ygl1zo').click()
    //cy.get(':nth-child(2) > .css-ncn170 > [style="display: flex; align-items: center; gap: 0.5rem;"] > a > .chakra-text').click()
    cy.get(8000)
    cy.get('.css-1e4rb2a').contains('Creating Test input').click()
    cy.get('.css-aggl2l > :nth-child(3)').click()
    cy.get('#title').type('Creating test for Textfield')
    cy.get('.css-no4vsb').click()
     cy.get('.css-ialyia').click()
    cy.get('a > .chakra-stack').click()
    // //ADDING FEILDS
    cy.get('.css-1qukn2z > .chakra-stack > :nth-child(1)').click({force:true})
    cy.wait(1000)
    cy.get('.css-150716z > :nth-child(14)').click()
    cy.wait(1000)
    cy.get('.css-hboir5 > :nth-child(2) > .chakra-button').click({force:true})
    cy.wait(2000)
    //ADDING TEXT IN TEXTFIELD
     cy.get('.css-mze1nh > :nth-child(1) > .chakra-input').type('Testing the input field????')
     cy.get('.css-84zodg > .css-29kerx > .chakra-button').click()
     cy.wait(2000)
     // // //CLICKING ON SETTINGS
    cy.get(':nth-child(2) > :nth-child(1) > .chakra-button').click()
    cy.get('.chakra-tabs > .chakra-tabs__tablist')
  .contains('Conditions')
  .click();
   

    //ADDING CONDITIONS
    cy.get('.css-zdfn8s > .chakra-radio-group > .chakra-stack > label[data-checked=""] > .chakra-radio__control').click()
    cy.get('.css-il7sii > .css-79elbk > .css-1m2c7vz').click()
    cy.get('.css-1tna9at > :nth-child(4)').click()
   //qualifier
    cy.get('.css-1ug7c8t > .css-79elbk > .css-1m2c7vz').click()
    cy.get('.css-1tna9at > :nth-child(1)').click()

    //BEHAVIOUR
    cy.get('.css-1ipuqvb > .css-79elbk > .css-1m2c7vz').click()
    cy.get('.css-1tna9at > :nth-child(2)').click()

    //UPDATING FIELD SETTING
    cy.get('.chakra-modal__footer > :nth-child(2) > .chakra-button').click()
    //SAVING FIELDS
    cy.get('.css-84zodg > .css-29kerx > .chakra-button').click()
    //EXIT
    cy.get('.css-rmxdag > .chakra-button').click()
    cy.get('.css-1is2g17').click()

    cy.get('textarea').type('VARUN SRINIVASAN')
    cy.get('.css-1q5hvdi').click()

    cy.get('.css-10zelb5').dblclick()
    
    
  })


  it('Creating Process and creating a chatroom and do for a field ', () => {
    
    cy.visit('https://app.unifize.com/conversation/1DJ3M2P8E')
    cy.wait(8000)
   // cy.get(':nth-child(7) > .css-1d7p3tl').click({force:true})
    cy.get(':nth-child(7) > .css-1d7p3tl > a > .css-1ygl1zo').click()
    cy.wait(2000)
    //create new process template
    cy.get('.css-yb5rku').click({force:true})
    cy.get('header > .chakra-input').type('Creating Test input')
    cy.get('#description').type('creating new process')
    cy.get('.css-29kerx > .chakra-button').click()
    cy.get('.css-rmxdag > .chakra-button').click()
    //createprocess and exit
     cy.get('.css-e63gvv').click()
     cy.get(':nth-child(7) > .css-1d7p3tl > a > .css-1ygl1zo').click()
     cy.get(':nth-child(2) > .css-ncn170 > [style="display: flex; align-items: center; gap: 0.5rem;"] > a > .chakra-text').click()
     cy.get('.css-1pdhd2d').click()
     cy.get('#tabs-80--tab-2').click()
    //  //ADDING FIELDS
     cy.get('.css-1qukn2z > .chakra-stack > :nth-child(1)').click()
     cy.get('.css-150716z > :nth-child(14)').click()
     cy.get('.css-hboir5 > :nth-child(2) > .chakra-button').click()
     cy.get('.css-mze1nh > :nth-child(1) > .chakra-input').type('TEST DATA')
     cy.wait(2000)
     cy.get('.css-84zodg > .css-29kerx > .chakra-button').click()
     cy.wait(2000)
     cy.get(':nth-child(2) > :nth-child(1) > .chakra-button').click()
     cy.get('#tabs-112--tab-1').click()
     cy.wait(2000)
     
//ADDING CONDITIONS
     cy.get('.css-zdfn8s > .chakra-radio-group > .chakra-stack > :nth-child(2) > .chakra-radio__control')
     cy.get('.css-il7sii > .css-79elbk > .css-1m2c7vz').click()
     cy.get('.css-1tna9at > :nth-child(4)').click()
    //qualifier
     cy.get('.css-1ug7c8t > .css-79elbk > .css-1m2c7vz').click()
     cy.get('.css-1tna9at > :nth-child(2)').click()

     //BEHAVIOUR
     cy.get('.css-1ipuqvb > .css-79elbk > .css-1m2c7vz').click()
     cy.get('.css-1tna9at > :nth-child(3)').click()

     //UPDATING FIELD SETTING
     cy.get('.chakra-modal__footer > :nth-child(2) > .chakra-button').click()
     //SAVING FIELDS
     cy.get('.css-84zodg > .css-29kerx > .chakra-button').click()
     //EXIT
     cy.get('.css-rmxdag > .chakra-button').click()
  })
})