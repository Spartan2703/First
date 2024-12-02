describe('Foundation',()=>{
 
it('TestCase',()=>{
   
    cy.visit("https://foundationfinance.com/");
    cy.viewport(1920,1080);
   
    cy.get("li[id='menu-item-8970'] span[class='menu-text']").click({force:true});

    cy.get('.fl-module-content > .fl-photo > .fl-photo-content > .fl-photo-img').its('length').then((count)=>{
        cy.log("Numberof images"+count);

        
    })
})






})