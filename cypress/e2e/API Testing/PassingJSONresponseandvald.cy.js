describe('PAssingJSon',()=>{

    it("Parsing Simple JSON Response",()=>
    {
     cy.request({
         method:'GET',
         url:"https://fakestoreapi.com/products"
     })
     .then((response)=>{
        expect(response.status).to.equal(200);
        expect(response.body[0].id).to.equal(1);
        expect(response.body[0].title).to.equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
        
     })

    })

    it("Parsing complex JSON Response",()=>
        
            {
                let totalprice=0;
             cy.request({
                 method:'GET',
                 url:"https://fakestoreapi.com/products",
                 qs:{limit:5}
             })
             .then((response)=>{
                expect(response.status).to.equal(200);
                
                response.body.forEach(element => {
                    totalprice=totalprice+element.price;

                });
                expect(totalprice).to.equal(899.23);
                
             })
        
            })


})