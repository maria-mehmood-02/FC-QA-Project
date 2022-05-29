describe('Air Blue - Search Feature', () => {
    it('Test Cases for Search Feature', () => {
        cy.visit('https://www.airblue.com/');

        cy.get('.round-trip > label > span').click(); // Round trip
        
        cy.get('.city-departure > .autocomplete > [autocomplete="fake"]')
        .dblclick().get('#DXB > span').click(); // depart
        
        cy.get('.city-arrival > .autocomplete > [autocomplete="fake"]').dblclick()
        .get('.city-arrival > .autocomplete > #autocomplete-results > #ISL > span') 
        .click(); // arrival 

        cy.get('.city-swap').click(); //swap btn
        
        let weekday1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]
        
        cy.get('[before="' + weekday1 + '"] > .vc-appearance-none').click()
        .get('.vc-grid-cell-row-5.vc-grid-cell-col-7 > .vc-day > .vc-h-full > .vc-day-content')
        .first().click(); // depart-date

        let weekday2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()+1]
        
        cy.get('.return > [before="' + weekday2 + '"] > .vc-appearance-none').click()
        .get('.vc-grid-cell-row-6.vc-grid-cell-col-3 > .vc-day > .vc-h-full > .vc-day-content')
        .last().click() // arrive-date

        cy.get('.pax-display').click(); //guest 
        
        for(let i = 0; i < 3; i++){
            cy.get('.adult > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-adult
        }
        cy.get('.adult > .plus-minus-input > .plus-minus-input-field > .minus-input').click(); // minus-adult

        for(let i = 0; i < 3; i++){
            cy.get('.child > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-child
        }
        cy.get('.child > .plus-minus-input > .plus-minus-input-field > .minus-input').click(); // minus-child

        for(let i = 0; i < 3; i++){
            cy.get('.infant > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-infant
        }
        cy.get('.infant > .plus-minus-input > .plus-minus-input-field > .minus-input').click(); // minus-infant

        cy.get('.action > button').click();

        cy.get('#CD').click().type('ABCD').should('have.value','ABCD');

        cy.get('button > span').click();

    });
})