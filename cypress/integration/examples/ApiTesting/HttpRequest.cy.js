describe('HttpRequest',()=>{

it('GetCall',()=>{
 cy.request('GET','https://rahulshettyacademy.com/maps/api/place/get/json?key=qaclick123&place_id=62bae1dffe3de72d0782c08c25170286')
 .its('status')
 .should('equal',200 
 )
})
it('Post',()=>{
    cy.request(
        {
            method:'POST',
            url:'https://rahulshettyacademy.com/maps/api/place/add/json?key=qaclick123'
            
                  
            
        }
        
        
    )
   })
})