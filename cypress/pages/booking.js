import { Elements } from "../necessities/elements";
import "@4tw/cypress-drag-drop";

class Booking{
    site(){
        cy.visit(Elements.link);
    }
// all details
    book(){
        cy.get(Elements.singlebookBTN).click();
        cy.get(Elements.firstN).type("Lerato")
        .should('have.value', 'Lerato')
        .should('be.visible');

        cy.get(Elements.lastN).type("Mokgatle")
        .should('have.value', 'Mokgatle')
        .should('be.visible');

        cy.get(Elements.email).type("leratoM@gmail.com")
        .should('have.value', 'leratoM@gmail.com')
        .should('be.visible');

        cy.get(Elements.phone).type("08212345671")
        .should('have.value', '08212345671')
        .should('be.visible');
       
        //dates
        const startDate = cy.get(Elements.start);
        const endDate = cy.get(Elements.end);
        // Drag from the start date to the end date
        startDate.trigger('mousedown', { which: 1 })
        endDate.trigger('mousemove').trigger('mouseup', { force: true })
        // Confirm that the dates were selected
        // cy.get(Elements.start)
        // .should("eq", "true")
        // cy.get(Elements.end)
        // .should("eq", "true")

        cy.get(Elements.bookBTN).click();
        //cy.get(Elements.closeBTN).click();
    }

    //without name
    bookWithoutName(){
        cy.get(Elements.singlebookBTN).click();
        cy.get(Elements.firstN).type(" ")
        .should('have.value', 'Maddie');

        cy.get(Elements.lastN).type("Crow")
        .should('be.visible');

        cy.get(Elements.email).type("mcrow@gmail.com")
        .should('be.visible');

        cy.get(Elements.phone).type("08312345681").
        should('be.visible');

        //dates
        const startDate = cy.get(Elements.start);
        const endDate = cy.get(Elements.end);
        // Drag from the start date to the end date
    startDate.trigger('mousedown', { which: 1 })
    endDate.trigger('mousemove').trigger('mouseup', { force: true })
    // Confirm that the dates were selected
    // cy.get(Elements.start)
    // .should("eq", "true")
    // cy.get(Elements.end)
    // .should("eq", "true")

        cy.get(Elements.bookBTN).click();
        //cy.get(Elements.closeBTN).click();
    }
    //without last name
    bookWithoutLastname(){
        cy.get(Elements.singlebookBTN).click();
        cy.get(Elements.firstN).type("Thabo")
        .should('be.visible');

        cy.get(Elements.lastN).type(" ")
        .should('have.value', 'Bester')

        cy.get(Elements.email).type("TBester@gmail.com")
        .should('be.visible');

        cy.get(Elements.phone).type("07312345671").
        should('be.visible');

        //dates
        const startDate = cy.get(Elements.start);
        const endDate = cy.get(Elements.end);
        // Drag from the start date to the end date
    startDate.trigger('mousedown', { which: 1 })
    endDate.trigger('mousemove').trigger('mouseup', { force: true })
    // Confirm that the dates were selected
    // cy.get(Elements.start)
    // .should("eq", "true")
    // cy.get(Elements.end)
    // .should("eq", "true")

        cy.get(Elements.bookBTN).click();
        //cy.get(Elements.closeBTN).click();
    }

    //with an invalid email
    bookWithInvalidEmail(){
        cy.get(Elements.singlebookBTN).click();
        cy.get(Elements.firstN).type("Thato")
        .should('be.visible');

        cy.get(Elements.lastN).type("Mokoena")
        .should('be.visible');

        cy.get(Elements.email).type("ThatoM")
        .should('be.visible')
        .should('have.value', 'ThatoM@example.co.za');

        cy.get(Elements.phone).type("07512345622").
        should('be.visible');

        //dates
        const startDate = cy.get(Elements.start);
        const endDate = cy.get(Elements.end);
        // Drag from the start date to the end date
        startDate.trigger('mousedown', { which: 1 })
        endDate.trigger('mousemove').trigger('mouseup', { force: true })
        // Confirm that the dates were selected
        // cy.get(Elements.start)
        // .should('have.class', 'selected')
        // cy.get(Elements.end)
        // .should('have.class', 'selected')

        cy.get(Elements.bookBTN).click();
 
    
}
//with an invalid phone number
bookWithInvalidPhoneNum(){
    cy.get(Elements.singlebookBTN).click();
    cy.get(Elements.firstN).type("Jordan")
    .should('be.visible');

    cy.get(Elements.lastN).type("Gibson")
    .should('be.visible');

    cy.get(Elements.email).type("JordanG@gmail.com")
    .should('be.visible');

    cy.get(Elements.phone).type("06515671")
    .should('have.value', '06556715896554')
    .should('be.visible');

    //dates
    const startDate = cy.get(Elements.start);
    const endDate = cy.get(Elements.end);
    // Drag from the start date to the end date
    startDate.trigger('mousedown', { which: 1 })
    endDate.trigger('mousemove').trigger('mouseup', { force: true })
    // Confirm that the dates were selected
    // cy.get(Elements.start)
    // .should('have.class', 'selected')
    // cy.get(Elements.end)
    // .should('have.class', 'selected')

    cy.get(Elements.bookBTN).click();


}
}
export default Booking;