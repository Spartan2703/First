
describe('My first test suite',function()
{
it('my first testcase',function()
{
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
//parent child chaining

 //Here we are writing .get('.products') every time so cypress has given a command 'as' which we can use it as a reusable variable

 cy.get('.products').as('ProductsLoctaorVar')
 // cy.get('.products').find('.product').should('have.length',4)
  //cy.get('@ProductsLoctaorVar').find('.product').should('have.length',4)
//conatins method able to find the text and eq method acts as an array which pull out specific items
  cy.get('@ProductsLoctaorVar').find('.product').eq(2).contains('ADD TO CART').click()
  
  cy.get('.products').find('.product').each(($e1,index,$list) => {
    const textvar=$e1.find('h4.product-name').text()
    
    if(textvar.includes('Carrot'))
    {
          // $e1.contains('ADD TO CART').click()-----not work because contains is not a function
          cy.wrap($e1).find('button').click()
    }
})
//assert if logo text is correctly displayed 
cy.get('.brand').should('have.text','GREENKART')


//this is to print in log
  cy.get('.brand').then(function(logo){

    cy.log(logo.text())
  })



 




}
)

}

)