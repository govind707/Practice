describe("visit a web page", () => {
    it ("visitng BikeWale", () => {
        cy.visit("https://www.bikewale.com/")

        cy.get('input[id="newBikeList"]').type('Maestro Edge')
        cy.get('input[type="button"]').click()
        cy.url().should('include','bikewale')
        cy.get('div').contains('Log in')
        .click()
        .url().should('include','bikewale')
        .get('input[id="txtLoginid"]')
        .type('gsingh@mt.iitr.ac.in')
        .should('have.value','gsingh@mt.iitr.ac.in')
    })
})