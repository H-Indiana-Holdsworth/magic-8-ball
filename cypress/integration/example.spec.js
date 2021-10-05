
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains textarea', ()=>{
            cy.get('#user-input').should('be.visible');

            
        });

        it('button clicks', ()=>{
            cy.get('#button').click();
            
        });
    });
});