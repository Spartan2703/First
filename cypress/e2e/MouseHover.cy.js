describe('My first test suite',function()
{
it('WebTable TestCase',function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //cy.get('.mouse-hover-content').invoke('show')
    //cy.contains('Top').click()
    cy.contains('Top').click({force: true})// Cypress will directly handle the hidden elemment without hovering the button though {force :true}
    cy.url().should('include','top')
  
}
)

}

)