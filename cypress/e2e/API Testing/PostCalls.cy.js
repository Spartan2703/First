describe('API Requests',()=>
    {
    it('Approach1-Hardcoded Json Object',()=>
    {
     const requestbody={
        title:"Test Post",
        body:"This is post call",
        user:1

         }

     cy.request(
               {
                method:'POST',
                url:'https://jsonplaceholder.typicode.com/posts/',
                body:requestbody
               })
               .then((response)=>{
                expect(response.status).to.eq(201)
                expect(response.body.title).to.eq("Test Post")
                expect(response.body.body).to.eq("This is post call")
                expect(response.body.user).to.eq(1)
               })
    
    })


    it('Approach2-Dynamically Generating json object',()=>
        {
         const requestbody={
            title:Math.random().toString(6).substring(2),
            body:Math.random().toString(6).substring(2),
            user:1
    
             }
    
         cy.request(
                   {
                    method:'POST',
                    url:'https://jsonplaceholder.typicode.com/posts/',
                    body:requestbody
                   })
                   .then((response)=>{
                    expect(response.status).to.eq(201)
                    expect(response.body.title).to.eq(requestbody.title)
                    expect(response.body.body).to.eq(requestbody.body)
                    expect(response.body.user).to.eq(1)
                   })
        
        })
    
    
    it('Approach3-Fixture Generating json object',()=>{
            cy.fixture('example').then((myfixture)=>{

                const requestbody=myfixture;
                cy.request(
                    {
                     method:'POST',
                     url:'https://jsonplaceholder.typicode.com/posts/',
                     body:requestbody
                    })
                    .then((response)=>{
                     expect(response.status).to.eq(201)
                     expect(response.body.title).to.eq(requestbody.title)
                     expect(response.body.body).to.eq(requestbody.body)
                     expect(response.body.user).to.eq(1)
                    })

            })
        
             
            
            })
    })
    