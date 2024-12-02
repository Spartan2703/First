

describe('My first test suite',function()
{
it('my first testcase',function()
{
    cy.visit("https://rahulshettyacademy.com/");
    cy.get(':nth-child(2) > .theme-btn').should('have.text','Register').click({force:true});
    cy.get('.heading3').should('be.visible');
  
}
)

}

)