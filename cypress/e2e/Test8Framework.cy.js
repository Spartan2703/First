
/// <reference types="Cypress" />
import Homepage from "../PageObjectModel/Homepage.js"
describe('My first test suite',function()
{

    before(() => {
        
        // runs once before all tests
        cy.fixture('Test8Frame').then(function(data){
            this.value=data
        })
      })

     

      
it('my first testcase',function()
 
{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')

    const homepage= new Homepage()
    
   // const email =cy.get('input[name="email"]')
    cy.get('input[name="email"]').as('value')
    homepage.getEditBox().type(this.value.name)
    cy.get('@value').type(this.value.email)
    homepage.getGender().select(this.value.gender).should('have.value','Male')
    cy.get('#inlineRadio1').check()
    cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength',2)
    homepage.getEnterpreneaur().should('be.disabled')

    //New Feature testing
    homepage.getShopTab().click()
    
    //Created custom command and put that in support(command.js) as making it as a reusable component
    cy.SelectProduct('Nokia Edge')
     cy.SelectProduct(this.value.Mobile)
     cy.contains('checkout').click()
   
}
)

}

)