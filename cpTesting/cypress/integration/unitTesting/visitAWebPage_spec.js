describe("visit a web page", () => {
    it ("visitng BikeWale", () => {
        cy.visit("https://www.bikewale.com/")

        cy.get('input[id="newBikeList"]')
        .should('have.attr','placeholder','Search your bike here, e.g. Maestro Edge ')
        .type('bajaj')
        .get('a[optionname="bajajpulsar220f"]')
        .click()

        cy.url().should('include','pulsar-220')

        cy.get('span[id="new-bike-price"]')
        .should('have.text','1,22,269')
        

        //.select('Bajaj Pulsar 220F')
        


        cy.get('div').contains('Log in')
        .click()
        .url()
        .should('eq','https://www.bikewale.com/Login/?ReturnUrl=%2Fbajaj-bikes%2Fpulsar-220%2F')


        cy.get('input[id="txtLoginid"]')
        .type('govind.thakur201097@gmail.com')
        .should('have.value','govind.thakur201097@gmail.com')


        cy.get('input[id="txtPasswd"]')
        .type('govind@123')
        .should('have.value','govind@123')
        .get('button').contains('Log in').click()

        

        cy.get('.cityPop-icon-container')
        .should('have.length',1)
        .children()
        
        // cy.server()
        // cy.route({
        //     method: 'GET',
        //     url:'input[tabindex="2"]',
        //     response: ['Govind Love Bikes']
        // }).as('bike')

        // cy.get('@bike')

        cy.server()
        cy.fixture('city.json').as('city')
        cy.route('POST','**/v3/generatepq/','@city').as('bike')

        //cy.wait('@bike')

        // cy.get('a[data-leadsourceid="151"]')
        // .should('have.text','Get Best Offers')
        // .click()


        cy.get('@bike').then( res => {
            //expect(res.status).to.equal(200)

            cy.get('a[data-leadsourceid="151"]')
            .should('have.text','Get Best Offers')
            .click()

             cy.get('.chosen-select')
             //.children()
            
             
            
             //.click({force:true})
            
            // .should('contain','Jabalpur')
        })
        
        
    })
})