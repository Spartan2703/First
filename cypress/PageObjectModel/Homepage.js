class Homepage
{
    
getEditBox(){

    return cy.get('input[name="name"]:nth-child(2)')
}
getGender(){
    return cy.get('#exampleFormControlSelect1')
}
getEnterpreneaur(){
    return cy.get('#inlineRadio3')
}
getShopTab(){
    return  cy.get(':nth-child(2) > .nav-link')
}

}
export default Homepage
