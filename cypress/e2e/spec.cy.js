import { Elements } from "../necessities/elements";
import Booking  from "../pages/booking";
import sendMessage from "../pages/message";
import APIBooking from "../ApiTesting/bookingAPI";
import APIMessage from "../ApiTesting/messageAPI";


//const testData = require("../fixtures/restfulBookerFromCSV.json");

describe('UI Automation Test Suite', () => {
  const pg = new Booking();
  const page = new sendMessage();
  Cypress.on("uncaught:exception", (err,runnable) => {
    return false;
  });
  it('open site', () => {
    pg.site();

  })
  it('new Booking', () => {
    pg.site();
    pg.book();

  })

  it('new Booking without name input', () => {
    pg.site();
    cy.wait(1000);
    pg.bookWithoutName();

  })

  it('new Booking without last name input', () => {
    pg.site();
    cy.wait(1000);
    pg.bookWithoutLastname();
  })

  it('new Booking with invalid email address', () => {
    pg.site();
    cy.wait(1000);
    pg.bookWithInvalidEmail();
  })

  it('new Booking with invalid phone number', () => {
    pg.site();
    cy.wait(1000);
    pg.bookWithInvalidPhoneNum();
  })

  it('send message', () => {
    page.site();
    cy.wait(1000);
    page.message();
  })

  it('send message without name filled in', () => {
    page.site();
    cy.wait(1000);
    page.messageWithoutName();
  })

  it('send message with invalid email address filled in', () => {
    page.site();
    cy.wait(1000);
    page.messageWithAnInvalidEmail();
  })

  it('send message with invalid phone number filled in', () => {
    page.site();
    cy.wait(1000);
    page.messageWithAnInvalidPhoneNum();
  })
})

describe('Booking API Automation Test Suite', () => {
  const APIpg = new APIBooking();
  const APIpage = new APIMessage();
  Cypress.on("uncaught:exception", (err,runnable) => {
    return false;
  });

    it('open site', () => {
      APIpg.site();

    })
  it('POST a new booking', () => {
    APIpg.site();
    APIpg.createBooking();
  })

  it('POST a new booking with invalid email', () => {
    APIpg.site();
    APIpg.newBookingInvalidEmail();
  })

  it('POST a new booking with past dates', () => {
    APIpg.site();
    APIpg.newBookingInvalidDates();
  })

  it('GET family room by Id', () => {
    APIpg.site();
    APIpg.getFamilyRoomById();
  })

  it('GET single room by Id', () => {
    APIpg.site();
    APIpg.getSingleRoomById();
  })

  it('POST a new message ', () => {
    APIpage.site();
    APIpg.newMessage();
  })

  it('POST a message with an invalid email', () => {
    APIpg.site();
    APIpage.newMessageInvalidEmail();

  })

  it('POST a message with no subject', () => {
    APIpg.site();
    APIpage.newMessageNoSubject();

  })

  // it('PUT update the message with an invalid email', () => {
  //   APIpg.site();
  //   APIpage.updateMessage();

  //  })

  //  it('DELETE a message', () => {
  //   APIpg.site();
  //   APIpage.deleteMessage();

  //  })
})
