describe("Api Mocking", () => {
    it ("Modifying dropdown", () => {
        cy.visit("https://www.bikewale.com/")

        cy.server()
        cy.route('GET','**/v3/autocomplete/?source=1,2,3,5,7,6&value=bajaj&size=10&showFeatured=true&applicationId=2','fixture:suggestions.json')

        cy.get('input[id="newBikeList"]')
        .should('have.attr','placeholder','Search your bike here, e.g. Maestro Edge ')
        .type('bajaj')

        cy.get('a[optionname="bajajpulsar220f"]')
        .should('contain','Bajaj Pulsar 220F')
        .click()

        cy.fixture('city.json').as('city')
        cy.route('POST','**/v3/generatepq/','@city').as('bike')

        cy.get('.location-selection.vertical-top')
        .children()
        .eq(1)
        .should('have.attr','data-lab','Bajaj_Pulsar 220F_')
        .click()

        cy.get('select[data-placeholder="Select city"]')
        .select('Jabalpur',{force:true})
        //.should('contain','Jabalpur')


    })
})