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
       cy.get('.skins__PdtListing-QkWkM.BcfPC').as('loan_info')

       cy.get('@loan_info')
       .children()
       .should('have.length',4)

       cy.screenshot("SS_50,000",{log:true})
       cy.get('@loan_info')
       .children()
       .eq(0)
       .should('contain','50,000')

       cy.screenshot("SS_2,0000",{log:true})
       cy.get('@loan_info')
       .children()
       .eq(1)
       .should('contain','2,00,000')

       cy.screenshot("SS_1,00,000",{log:true})
       cy.get('@loan_info')
       .children()
       .eq(2)
       .should('contain','1,00,000')

       cy.screenshot("SS_Continue-Application",{log:true})
       cy.get('@loan_info')
       .children()
       .eq(3)
       .should('contain','Continue Application')
       .click()


       
       cy.get('.skins__SummaryCon-eWQpKA.gEpBCv').as('profile_info')

       cy.get('@profile_info')
       .children()
       .should('have.length',6)

       cy.get('@profile_info')
       .children()
       .eq(4)
       .should('contain','Additional Information')
       .screenshot("before clicking button -Additional Information")
       //.click()

       //cy.task('print'," just checking working of task function ")
       
       
       //cy.screenshot("after clicking button -Additional Information")

    //    cy.get('@profile_info')
    //    .children()
    //    .eq(4)
    //    .children()
    //    .should('have.class','skins__SumTable-jlNanu.iJOTsf')
    
    
    
    
    //    .click({force:true})
    //    .url()
    //    .should('eq','http://react-app-monica.s3-website-ap-southeast-1.amazonaws.com/profile/summary')

    //    cy.get('.skins__SummaryCon-eWQpKA.gEpBCv')
    //    .as('Con_app')


    //    cy.get('@Con_app')
    //    .children()
    //    .should('have.length',7)


    //    cy.get('@Con_app')
    //    .children()
    //    .contains('KYC Documents')
    //    .should('have.text','KYC Documents')


    //    cy.get('@Con_app')
    //    .children()
    //    .contains('Additional Information')
    //    .should('have.text','Additional Information')
       //.click()


    //   cy.get('@Con_app').within(() => {

    //        cy.get('div').contains('KYC Documents')

    //     //    .click()
    //     //    .should('have.length',0)
    //     //    .go('back')


    });
});