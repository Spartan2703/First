class Login
{
   setUserName(username){

    cy.get('[name="username"]').type(username)
    
   }

   setPassword(password){
    cy.get('[name="password"]').type(password)

   }

   clicksubmit(){

    cy.get('[type="submit"]').click()
   }

   verifyloginpage(){

    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
   }
}

export default Login;//for using the class we need to export it