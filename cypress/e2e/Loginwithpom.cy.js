import Login from "../PageObjectModel/LoginPage.js";
import Homepage from "../PageObjectModel/LoginPage.js"

describe('Pom',()=>{

    it('loginTest',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/auth/login");

        const ln=new Login();

        ln.setUserName("Admin");
        ln.setPassword("admin123");
        ln.clicksubmit();
        ln.verifyloginpage();
    })




})