import 'cypress-iframe'
describe('My first test suite',function()
{
it('Iframe TestCase',function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
   cy.frameLoaded('#courses-iframe')
   cy.wait(5000)
   cy.iframe().find("a[href*='mentorship']").eq(0).click()
}
)

}

)