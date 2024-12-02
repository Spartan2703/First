describe('TestAutomation',()=>{

 it('LoginToPage',()=>{
    cy.visit('https://www.amazon.in/ap/signin?openid.pape.max_auth_age=900&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fyourstore%2Fhome%3Fpath%3D%252Fgp%252Fyourstore%252Fhome%26signIn%3D1%26useRedirectOnSuccess%3D1%26action%3Dsign-out%26ref_%3Dnav_AccountFlyout_signout&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
    cy.get("#ap_email").type('thakurpiyush147@gmail.com');
    cy.get('#continue').click();
 })
 it('TestCase',()=>{

    cy.visit('https://www.amazon.in/gp/yourstore/home?path=%2Fgp%2Fyourstore%2Fhome&signIn=1&useRedirectOnSuccess=1&action=sign-out&ref_=nav_AccountFlyout_signout&');
    cy.get('#twotabsearchtextbox').type('Iphone15');
    cy.get('#nav-search-submit-button').click();
    cy.get('#a-autoid-1-announce').click();
 })
})