describe('My first test suite',function()
{
it('ChildWindow  TestCase',function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //for getting the link of window of child tab, we use prop() of jquery where we can retrive href value.
    cy.get('#opentab').then(function(e1){
      const val=e1.prop('href')
      cy.visit(val)
      cy.origin(val,()=>{
        cy.get("div.sub-menu-bar a[href*='about']").click()
      })
    })
}
)





}

)