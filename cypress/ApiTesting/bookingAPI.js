import { APIelements, Elements } from "../necessities/elements";

class APIBooking{
site(){
    cy.visit(Elements.link); 
}

// Create a new booking
createBooking(){
    cy.request({
        method: "POST",
        url: "booking/",
        failOnStatusCode: false,
        body: {
            "bookingdates":{"checkin":"2023-05-06","checkout":"2023-05-10 "},
            "depositpaid":false,
            "firstname":"John",
            "lastname":"Smith",
            "roomid":9,
            "email":"JohnS@gmail.com",
            "phone":"081564789643"
        }    
    }).as("postBookingRequest");

    // Validate that the response status code is 201 and that lastname is in the response body
    cy.get("@postBookingRequest").then (response => {
        expect(response.status).to.eq(201);
        expect(response.body).has.property("lastname","Smith"); 
        cy.log(JSON.stringify(response.body));
    });
}

//create a new booking with invalid email
newBookingInvalidEmail(){
    cy.request({
        method: "POST",
        url: "booking/",
        failOnStatusCode: false,
        body: {
            "bookingdates":{"checkin":"2023-07-06","checkout":"2023-07-10 "},
            "depositpaid":false,
            "firstname":"Derick",
            "lastname":"Stow",
            "roomid":30,
            "email":"Derick",
            "phone":"082564786644"
        }
    }).as("postBookingInvalidEmailRequest");

    // Validate that the response status code is 400
    cy.get("@postBookingInvalidEmailRequest").then (response => {
        expect(response.status).to.eq(400);
        cy.log(JSON.stringify(response.body));
    });
}

//booking with past date
newBookingInvalidDates(){
    cy.request({
        method: "POST",
        url: "booking/",
        failOnStatusCode: false,
        body: {
            "bookingdates":{"checkin":"2023-04-16","checkout":"2023-04-20 "},
            "depositpaid":false,
            "firstname":"Judge",
            "lastname":"Judy",
            "roomid":35,
            "email":"JudgeJ@gmail.com",
            "phone":"0772564786644"
        }
    }).as("postBookingInvalidDateRequest");

    // Validate that the response status code is 400
    cy.get("@postBookingInvalidDateRequest").then (response => {
        expect(response.status).to.eq(400);
        cy.log(JSON.stringify(response.body));
    });
}
// get a room by id (2)
getFamilyRoomById(){
    cy.request({
        method: "GET",
        url: "report/room/2",
        failOnStatusCode: false,
    }).as("getRoomByIDRequest");

    // Validate that the response status code is 200
    cy.get("@getRoomByIDRequest").then (response => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body));
    });

}

//Get a room by Id (1)
getSingleRoomById(){
    cy.request({
        method: "GET",
        url: "report/room/1",
        failOnStatusCode: false,
    }).as("getRoomByIdRequest");

//Validate that the response status code is 200
    cy.get("@getRoomByIdRequest").then (response => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body));
    });
}
}
export default APIBooking;