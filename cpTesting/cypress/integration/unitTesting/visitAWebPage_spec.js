describe("visit a web page", () => {
    it.skip ("visitng BikeWale", () => {
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


        cy.get('@bike')
            //expect(res.status).to.equal(200)

            //expect(res.Message).to.equal('expected <a.btn.btn-orange.margin-top10.getquotation.js-getallcities> to have text Get Best Offers')

        cy.get('a[data-leadsourceid="151"]')
        .should('have.text','Get Best Offers')
        .click()

        cy.get('select[data-placeholder="Select city"]')
        .select('Jabalpur',{force:true})

             //cy.route('GET','**/collect?v=1&_v=j86&a=578390786&t=event&ni=1&_s=1&dl=https%3A%2F%2Fwww.bikewale.com%2Fbajaj-bikes%2Fpulsar-220%2F&ul=en-gb&de=UTF-8&dt=Bajaj%20Pulsar%20220F%20BS6%20Price%2C%20Mileage%2C%20Images%2C%20Colours%2C%20Specifications%20-%20BikeWale&sd=24-bit&sr=1920x1080&vp=985x645&je=0&ec=Web%20Vitals&ea=FID&el=1601627322934-5402387087327&ev=9&_u=SCCAAAABAAAG~&jid=&gjid=&cid=1804973667.1601627313&tid=UA-34771801-1&_gid=603173967.1601627313&gtm=2wg9n15CSHD6&z=473067315')
 

                 

        


            

             



            
             //.children()
            
             
            
             //.click({force:true})
            
            // .should('contain','Jabalpur')
        
        
        
    })

    it('API response Control', () => {
        cy.visit("https://www.bikewale.com/")
    })
})