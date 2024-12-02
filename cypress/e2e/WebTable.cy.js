import { log } from "async"

describe('My first test suite',function()
{
it('WebTable TestCase',function()
{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('tr td:nth-child(2)').each(($e1,index,$list) =>{
        var i=0
        if($e1.text().includes("Selenium")){
           //"next()" get the immediately following siblings of each DOM element within a set of DOM elements.
           cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
            var pricetext=price.text()
            var sum= i+ parseInt(pricetext)
            i=sum
            cy.log(sum)
           })
           
           
        }
       })
  
}
)

}

)