/// <reference types="Cypress" />

describe('My Third test suite',function(){
it('my Third testcase For checkbox',function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //Should is an assertion so if we are validting it then we have to use be and if it is properties then have
    //Checkbox example
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('[type="checkbox"]').check(['option2','option3'])

    
}
)


it('my Third testcase on DropDown',function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //Dropdown Example for static
    cy.get('#dropdown-class-example').select('option1').should('have.value','option1')

    //Dropdown example for dynamic
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item-wrapper').each(($e1,index,$list) =>{
     if($e1.text()==="India"){
        cy.wrap($e1).click()
        

     }
    })
    cy.get('#autocomplete').should('have.value','India')
}
)

it('my Third testcase on Visible and invisisble elements',function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#displayed-text').should('be.visible')

    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
}
)

it('my Third testcase on Radio button',function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
   cy.get('[value="radio1"]').check().should('have.value','radio1').and('be.checked')
   //cy.get('[value="radio1"]').uncheck()
   cy.get('[value="radio2"]').check().should('have.value','radio2')
   cy.get('[value="radio3"]').check().should('have.value','radio3')
}
)

it('my Third testcase on Handling child tab',function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.go('back')
}
)

})