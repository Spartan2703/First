describe('DynamicElement',()=>{
    it('TestCAse',()=>{
         cy.visit('https://news.google.com/home');
         cy.wait(5000);
         cy.get('.Ax3bC .VCnfNe').each(($e1,index,$list)=>{
              console.log($e1.text());
           });
          });
        });  