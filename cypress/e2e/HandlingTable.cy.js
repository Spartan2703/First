describe('My first test suite',function()
{
it('handlingTable TestCase',function()
{
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get("[name='BookTable'] tr td:nth-child(2)").each(($e1,index,$list) =>{

      var data=$e1.text()
      if(data.includes("Animesh")){
        cy.get("[name='BookTable'] tr td:nth-child(2)").eq(index).next().next().then(function(price){
          var pricetext=price.text()

         cy.log(pricetext)
       
      
      
      })
      }

          



})
})
})

