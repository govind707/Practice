describe("Burger app testing",() => {
    it ("Auth Testing", () => {
        cy.visit('/')
        cy.get('a[href="/auth"]').contains('Authenticate')
        .click()
        .get('input[type="email"]')
        .type('g@g.com')
        .should('have.value','g@g.com')
        cy.get('a[href="/auth"]').contains('Authenticate')
        .click()
        .get('input[type="password"]')
        .type('123456')
        .should('have.value','123456')
    })
})


describe("Burger App Testing", () => {
    it("Ingredients Buttons Testing", () => {
        cy.visit('http://localhost:3000/')
        cy.get('div')
        .contains('Salad')
        .get('button')
        .contains('More')
        .click()
    })
})