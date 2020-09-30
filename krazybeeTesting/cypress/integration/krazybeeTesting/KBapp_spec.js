//Cypress.on('fail',(err, runnable) => { debugger }) 

describe("Play with krazybee App", () => {
    it("Ecomm scraping", () => {
        cy.visit('/'+'login',{failOnStatusCode: false})
       // cy.get('span').contains('Login with Registered Mobile').click()

        // cy.get('input[type="tel"]')
        // .type(6209771204)
        // .should('have.value','6209771204')

        // cy.get('span').contains('Get OTP').click()

        //cy.get('input[type="number"]')
        /*
        cy.get('.skins__PdtItemsNewCon-hCuquY.jZWzLh').within(() => {
            cy.get('div')
        })
        */
       cy.get('.BBtn__BBtn-jiCKdh.dBKBDe').contains('Continue Application').click({force:true})
       .url()
       .should('include','summary')

       cy.get('.skins__SummaryCon-eWQpKA.gEpBCv').as('Con_app')
       cy.get('@Con_app').children().should('have.length',7)

       cy.get('@Con_app').within(() => {

           cy.get('div').contains('KYC Documents')

        //    .click()
        //    .should('have.length',0)
        //    .go('back')
        cy.get('@Con_app').contains('Additional Information').should("have.text",'Additional Information')
           
       })
       


    });
});