import { Elements } from "../necessities/elements";
import { validateEmailMessage } from "../necessities/elements";

class sendMessage{
    site(){
        cy.visit(Elements.link);
    }

    message(){
       cy.get(Elements.name).type("Lerato")
       .should('be.visible');

       cy.get(Elements.emailMsg).type("leratoM@gmail.com")
       .should('be.visible');

       cy.get(Elements.phoneNum).type("08212345671")
    //    .its("length") ("08212345671")
    //    .should("be.eq", 11);
    //.should('have.lengthOf',11);

       cy.get(Elements.subject).type("Booking")
       .should('be.visible');

       cy.get(Elements.message).type("I'd like to inquire about the availability of a room")
        .should('be.visible');

       cy.get(Elements.sendBTN).click()
       .should('be.enabled');
    }
    
    //without name 
    messageWithoutName(){
        cy.get(Elements.name).type(" ")
        .should('have.value', 'Olivia');

        cy.get(Elements.emailMsg).type("OliviaT@gmail.com")
        .should('be.visible') 
        ;

        cy.get(Elements.phoneNum).type("5555555555")
        .should('be.visible');

        cy.get(Elements.subject).type("Chech-in and Check-out")
        .should('be.visible');

        cy.get(Elements.message).type("Hello, I would like to inquire about the possibility of early check-in and late check-out. I have an early morning arrival and a late afternoon departure and I was wondering if you can accommodate my schedule. Is there an additional fee for this service?")
        .should('be.visible');

        cy.get(Elements.sendBTN).click()
        .should('be.enabled');
    }

    //with an invalid email
    messageWithAnInvalidEmail(){
        cy.get(Elements.name).type("Daniel Martin")
        .should("be.visible");

        cy.get(Elements.emailMsg).type("daniel.martin@example")
        if (!validateEmailMessage){
            cy.get('.error-message').should('be.visible');
        }else{
            cy.get('.error-message').should('not.be.visible');
        }

        cy.get(Elements.phoneNum).type("08212345671")
        .should('be.visible');

        cy.get(Elements.subject).type("Loyalty programs and rewards")
        .should('be.visible');

        cy.get(Elements.message).type("Good afternoon, I am a frequent traveler and I would like to know if you have any loyalty programs or rewards for regular guests. How can I enroll in the program and what are the benefits?")
        .should('be.visible');

        cy.get(Elements.sendBTN).click()
        .should('be.enabled');
    }
    //with an invalid phone number
    messageWithAnInvalidPhoneNum(){
        cy.get(Elements.name).type("Christopher")
        .should('be.visible');
 
        cy.get(Elements.emailMsg).type("christopher.thomas@example.com")
        .should('be.visible');
 
        cy.get(Elements.phoneNum).type("(555) 123-7890")
        .should('have.value', '55512378902');
     //    .its("length") ("08212345671")
     //    .should("be.eq", 11);
    //  .should('have.lengthOf',11);
 
        cy.get(Elements.subject).type("Room with a view")
        .should('be.visible');
 
        cy.get(Elements.message).type("Dear reservations team, I am interested in booking a room with a view of the city skyline. Can you please confirm if this is possible and if there is an additional fee for this room type?")
         .should('be.visible');
 
        cy.get(Elements.sendBTN).click()
        .should('be.enabled');
     }

}
export default sendMessage; 