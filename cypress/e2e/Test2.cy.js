/// <reference types="Cypress" />

describe('My Second test suite',function()
{
it('my Second testcase',function()
{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
//parent child chaining
 //Here we are writing .get('.products') every time so cypress has given a command 'as' which we can use it as a reusable variable

 cy.get('.products').as('ProductsLoctaorVar')
 
  cy.get('@ProductsLoctaorVar').find('.product').should('have.length',4)
//conatins method able to find the text and eq method acts as an array which pull out specific items
  
  cy.get('.products').find('.product').each(($e1,index,$list) => {
    const textvar=$e1.find('h4.product-name').text()
    
    if(textvar.includes('Carrot'))
    {
          cy.wrap($e1).find('button').click()
    }
})

cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.wait(2000)
cy.contains("Place Order").click()





 




}
)

}

)