describe("API TEsting",()=>{

    let authToken=null;
before("Creating access token",()=>{

cy.request({
      
    method:"POST",
    url:"https://simple-books-api.glitch.me/api-clients/",
    headers:{'Content-Type':'application/json'},
    body:{
        clientName:"Test",
        clientEmail:Math.random().toString(5).substring(2)+"@gmail.com"
    }
}).then((response)=>{
    authToken=response.body.accessToken;
})

})

it("Order",()=>{//use the access token to generate the order
    cy.request({
        method:"POST",
        url:"https://simple-books-api.glitch.me/orders/",
        headers:{
            'Content-Type':"application/json",
            'Authorization':'Bearer'+authToken
        },
        body:{
            bookid:1,
            customerName:"xyzabc"
        }

    }).then((response)=>{
        //expect(response.status).to.eq(201);
        expect(response.body.created).to.eq(true)
})

})

})