describe('Air Blue - Search Feature', () => {
    it('One Way', () => {
        cy.visit('https://www.airblue.com/');

        cy.get('.one-way > label > span').click(); // One way

        cy.get('.city-departure > .autocomplete > [autocomplete="fake"]')
            .dblclick().get('#DXB > span').click(); // depart

        cy.get('.city-arrival > .autocomplete > [autocomplete="fake"]').dblclick()
            .get('.city-arrival > .autocomplete > #autocomplete-results > #ISL > span')
            .click(); // arrival 

        cy.get('.city-swap').click(); //swap btn

        let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]

        cy.get('[before="' + weekday + '"] > .vc-appearance-none').click()
            .get('.vc-grid-cell-row-5.vc-grid-cell-col-7 > .vc-day > .vc-h-full > .vc-day-content')
            .first().click(); // depart-date

        cy.get('.pax-display').click(); //guest 

        for (let i = 0; i < 3; i++) {
            cy.get('.adult > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-adult
        }
        cy.get('.adult > .plus-minus-input > .plus-minus-input-field > .minus-input').click(); // minus-adult

        for (let i = 0; i < 3; i++) {
            cy.get('.child > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-child
        }
        cy.get('.child > .plus-minus-input > .plus-minus-input-field > .minus-input').click(); // minus-child

        for (let i = 0; i < 3; i++) {
            cy.get('.infant > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-infant
        }
        cy.get('.infant > .plus-minus-input > .plus-minus-input-field > .minus-input').click(); // minus-infant

        cy.get('.action > button').click();

        cy.get('#CD').click().type('ABCD').should('have.value', 'ABCD');

        cy.get('button > span').click();

    });
    it('Round Trip', () => {
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

        for (let i = 0; i < 3; i++) {
            cy.get('.adult > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-adult
        }
        cy.get('.adult > .plus-minus-input > .plus-minus-input-field > .minus-input').click(); // minus-adult

        for (let i = 0; i < 3; i++) {
            cy.get('.child > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-child
        }
        cy.get('.child > .plus-minus-input > .plus-minus-input-field > .minus-input').click(); // minus-child

        for (let i = 0; i < 3; i++) {
            cy.get('.infant > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-infant
        }
        cy.get('.infant > .plus-minus-input > .plus-minus-input-field > .minus-input').click(); // minus-infant

        cy.get('.action > button').click();

        cy.get('#CD').click().type('ABCD').should('have.value', 'ABCD');

        cy.get('button > span').click();

    });
    it('Multi City', () => {
        cy.visit('https://www.airblue.com/');

        cy.get('.multi-city > label > span').click(); // Multi city

        // For First Departure & Arrival

        cy.get('.segment-1 > .transition-expand-content > .trip > .cities > .city-departure > .autocomplete > [autocomplete="fake"]')
            .dblclick().get('#DXB > span').eq(0).click(); // depart 1

        cy.get('.segment-1 > .transition-expand-content > .trip > .cities > .city-arrival > .autocomplete > [autocomplete="fake"]')
            .dblclick().get('.segment-1 > .transition-expand-content > .trip > .cities > .city-arrival > .autocomplete > #autocomplete-results > #ISL > span')
            .eq(0).click(); // arrival 1

        cy.get('.segment-1 > .transition-expand-content > .trip > .cities > .city-swap').click(); //swap btn

        let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]

        cy.get('[before="' + weekday + '"] > .vc-appearance-none').click()
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

        for (let i = 0; i < 3; i++) {
            cy.get('.adult > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-adult
        }
        cy.get('.adult > .plus-minus-input > .plus-minus-input-field > .minus-input').click(); // minus-adult

        for (let i = 0; i < 3; i++) {
            cy.get('.child > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-child
        }
        cy.get('.child > .plus-minus-input > .plus-minus-input-field > .minus-input').click(); // minus-child

        for (let i = 0; i < 3; i++) {
            cy.get('.infant > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-infant
        }
        cy.get('.infant > .plus-minus-input > .plus-minus-input-field > .minus-input').click(); // minus-infant

        cy.get('.action > button').click();

        cy.get('#CD').click().type('ABCD').should('have.value', 'ABCD');

        cy.get('button > span').click();

    });
})