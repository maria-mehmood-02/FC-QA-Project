describe('Air Blue - Search Feature', () => {
    it('Test Cases for Search Feature', () => {
        cy.visit('https://www.airblue.com/');
        
        cy.get('.multi-city > label > span').click(); // Multi city
        
        // For First Departure & Arrival
        
        cy.get('.segment-1 > .transition-expand-content > .trip > .cities > .city-departure > .autocomplete > [autocomplete="fake"]')
        .dblclick().get('#DXB > span').eq(0).click(); // depart 1
        
        cy.get('.segment-1 > .transition-expand-content > .trip > .cities > .city-arrival > .autocomplete > [autocomplete="fake"]')
        .dblclick().get('.segment-1 > .transition-expand-content > .trip > .cities > .city-arrival > .autocomplete > #autocomplete-results > #ISL > span') 
        .eq(0).click(); // arrival 1

        cy.get('.segment-1 > .transition-expand-content > .trip > .cities > .city-swap').click(); //swap btn

        cy.get('[before="Saturday"] > .vc-appearance-none').click()
        .get('.vc-grid-cell-row-6.vc-grid-cell-col-1 > .vc-day > .vc-h-full > .vc-day-content')
        .first().click(); // depart1-date

        // For Second Departure & Arrival

        cy.get('.segment-2 > .transition-expand-content > .trip > .cities > .city-departure > .autocomplete > [autocomplete="fake"]')
        .dblclick().get('.segment-2 > .transition-expand-content > .trip > .cities > .city-departure > .autocomplete > #autocomplete-results > #JED > span')
        .eq(0).click(); // depart 2
        
        cy.get('.segment-2 > .transition-expand-content > .trip > .cities > .city-arrival > .autocomplete > [autocomplete="fake"]')
        .dblclick().get('.segment-2 > .transition-expand-content > .trip > .cities > .city-arrival > .autocomplete > #autocomplete-results > #DXB > span') 
        .eq(0).click(); // arrival 2

        cy.get('.segment-2 > .transition-expand-content > .trip > .cities > .city-swap').click(); //swap btn

        cy.get('.segment-2 > .transition-expand-content > .trip > .dates > .datepicker > span > .vc-appearance-none').click()
        .get('.vc-grid-cell-row-6.vc-grid-cell-col-2 > .vc-day > .vc-h-full > .vc-day-content')
        .first().click(); // depart2-date

        cy.wait(2000);
        
        for (let i = 0; i < 3; i++) {
            cy.get('.add-segment').click();
        }
        
        cy.wait(2000);
        
        cy.get('.remove-segment').click();
        
        cy.wait(1000);

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