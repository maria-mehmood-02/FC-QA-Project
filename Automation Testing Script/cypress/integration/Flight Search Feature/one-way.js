describe('Air Blue - Search Feature', () => {
    it('Test Cases for Search Feature', () => {
        cy.visit('https://www.airblue.com/');

        cy.get('.one-way > label > span').click(); // One way
        
        cy.get('.city-departure > .autocomplete > [autocomplete="fake"]')
        .dblclick().get('#DXB > span').click(); // depart
        
        cy.get('.city-arrival > .autocomplete > [autocomplete="fake"]').dblclick()
        .get('.city-arrival > .autocomplete > #autocomplete-results > #ISL > span') 
        .click(); // arrival 

        cy.get('.city-swap').click(); //swap btn

        cy.get('[before="Friday"] > .vc-appearance-none').click()
        .get('.vc-grid-cell-row-5.vc-grid-cell-col-7 > .vc-day > .vc-h-full > .vc-day-content')
        .first().click(); // depart-date

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

        // cy.get('.adult > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-adult
        // cy.get('.adult > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-adult
        // cy.get('.adult > .plus-minus-input > .plus-minus-input-field > .minus-input').click(); // minus-adult

        // cy.get('.child > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-child
        // cy.get('.child > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-child
        // cy.get('.child > .plus-minus-input > .plus-minus-input-field > .minus-input').click(); // minus-child

        // cy.get('.infant > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-infant
        // cy.get('.infant > .plus-minus-input > .plus-minus-input-field > .plus-input').click(); // add-infant
        // cy.get('.infant > .plus-minus-input > .plus-minus-input-field > .minus-input').click(); // minus-infant

        cy.get('.action > button').click();

        cy.get('#CD').click().type('ABCD').should('have.value','ABCD');

        cy.get('button > span').click();

    });
})