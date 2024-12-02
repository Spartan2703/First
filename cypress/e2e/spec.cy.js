describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.in/');
    cy.wait(4000);
    cy.get('#nav-flyout-ya-signin .nav-action-inner').click({force:true});
    cy.get('#createAccountSubmit').click();
  })


  it('Registrat', () => {
    cy.visit('https://www.amazon.in/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F_encoding%3DUTF8%26adgrpid%3D155259813593%26gad_source%3D1%26hvadid%3D717602284796%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9061674%26hvnetw%3Dg%26hvpone%3D%26hvpos%3D%26hvptwo%3D%26hvqmt%3De%26hvrand%3D10031453734656929527%26hvtargid%3Dkwd-64107830%26hydadcr%3D14452_2405310%26ref%3Dpd_sl_5szpgfto9i_e%26tag%3Dgooghydrabk1-21%26ref_%3Dnav_ya_signin&prevRID=BNCTEYVME9WZC1FETN5R&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=inflex&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
    cy.wait(4000);
    cy.get('#ap_customer_name').type('Piyush');
    cy.get('#ap_phone_number').type('9899584258');
    cy.get('#ap_password').type('Piyush@123');
    cy.get('.a-button-inner #continue').click();
  })
 
})