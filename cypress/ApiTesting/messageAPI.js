import { APIelements, Elements } from "../necessities/elements";

class APIMessage{
    site(){
        cy.visit(Elements.link); 
    }

    // send a message
    newMessage(){
        cy.request({
            method: "POST",
            url: "message/",
            failOnStatusCode: false,
            body: {
                "messageid": 6,
                "name": "Melissa Scott",
                "email": "ScottMN@icloud.com",
                "phone": "01165478963",
                "subject": "2024 Bookings",
                "description": "Good day, Is it possible to make a booking for April 2024? Kind Regards Melissa S"
            }    
        }).as("postMessageRequest");
    
        // Validate that the response status code is 201
        //Validate that the response body includes the subject
        cy.get("@postMessageRequest").then (response => {
            expect(response.status).to.eq(201);
            expect(response.body).has.property("subject","2024 Bookings"); 
            cy.log(JSON.stringify(response.body));
        });
    }

    //  send a message with an invalid email
    newMessageInvalidEmail(){
        cy.request({
            method: "POST",
            url: "message/",
            failOnStatusCode: false,
            body: {
                "id": 12,
                "name": "Diana Johnson",
                "email": "Johnson",
                "phone": "01165478964",
                "subject": "Shuttle services",
                "description": "Good day, Do you provide shuttle services from the airport and to the airport? Regards DJ"
            }    
        }).as("postMessageWithInvalidEmailRequest");
    
        // Validate that the response status code is 400
        cy.get("@postMessageWithInvalidEmailRequest").then (response => {
            expect(response.status).to.eq(400);
            cy.log(JSON.stringify(response.body));
        });
    }

        //  send a message with no subject
    newMessageNoSubject(){
        cy.request({
            method: "POST",
            url: "message/",
            failOnStatusCode: false,
            body: {
                "id": 20,
                "name": "Lenette Cronje",
                "email": "LenetteCronje@gmail.com",
                "phone": "01268478964",
                "subject": " ",
                "description": "Hello, I would like to inquire about the availability of rooms in your hotel for the dates 2023/06/15 to 2023/06/18 for 8 guests. Can you provide me with the rates and any current promotions or discounts available?"
            }    
        }).as("postMessageNoSubjectRequest");
    
        // Validate that the response status code is 400
        cy.get("@postMessageNoSubjectRequest").then (response => {
            expect(response.status).to.eq(400);
            cy.log(JSON.stringify(response.body));
        });

        
    }


    // //update a message
    // updateMessage(){
    //     cy.request({
    //         method: "PUT",
    //         url: "message/",
    //         failOnStatusCode: false,
    //         body: {
    //             "id": 12,
    //             "email": "DJohnson@gmail.com ", 
    //         }    
    //     }).as("putUpdateMessage");
    
    //     // Validate that the response status code is 400
    //     cy.get("@putUpdateMessage").then (response => {
    //        expect(response.status).to.eq(200)
    //         cy.log(JSON.stringify(response.body));
    //     });

        
    // }

    // //delete a message
    // deleteMessage(){
    //     cy.request({
    //         method: "DELETE",
    //         url: "message/",
    //         failOnStatusCode: false,
    //         body: {
    //             "id": 12,
    //         }
    //     }).as("deleteMessage");
    
    //     // Validate that the response status code is 200
    //     cy.get("@deleteMessage").then (response => {
    //         expect(response.status).to.eq(200);
    //         cy.log(JSON.stringify(response.body));
    //     });
    // }


}

export default APIMessage;