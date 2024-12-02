describe('QueryParam',()=>{

    it('QueryPArameter',()=>{
        cy.request({
                method:"GET",
                url:"http://reqres.in/api/users",
                qs:{page:2}//qs for passing query parameter
        

        })
        .then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.page).equal(2);
            expect(response.body.data).has.length(6);
            expect(response.body.data[0]).have.property('id',7)
            expect(response.body.data[0]).have.property('first_name','Michael')


        })



    })
})