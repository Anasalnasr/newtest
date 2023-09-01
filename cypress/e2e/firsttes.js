/// <reference types= "cypress" />

function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 10); // Generate a random string
  const domain = "example.com"; // Replace with your desired domain
  return `${randomString}@${domain}`;
}

const randomEmail = generateRandomEmail();

let FirstNames = ["ahmad", "mohammad", "ali", "998876"];
let lastNames = ["mahmoud", "anas", "omar", "58564"];

let RandomIndex = Math.floor(Math.random() * FirstNames.length);

// describe("Login and Sign up process", () => {
//   it("sign up process", () => {
//     cy.visit("https://www.automationteststore.com/");

//     // cy.get("#customer_menu_top").click();

//     // cy.contains("Continue").click();

//     // cy.get("#AccountFrm_firstname").type(FirstNames[RandomIndex]);

//     // cy.get("#AccountFrm_lastname").type(lastNames[RandomIndex]);

//     // cy.get("#AccountFrm_email").type(randomEmail);

//     // cy.get("#AccountFrm_country_id").select("Jordan")

//   });
// });

//  describe('Print the name of the first item and the last item ', () => {
//    it('first category - FEATURED', () => {
//          cy.visit("https://www.automationteststore.com/");

//          cy.get('#featured > .container-fluid').find('.prdocutname').first().invoke('text').then((the_text)=>{
//            cy.log("first item inside the Featured Category is : ",the_text)
// })

//          cy.get('#featured > .container-fluid').find('.prdocutname').last().invoke('text').then((the_text)=>{
//            cy.log("last item inside the Featured Category is : ",the_text)

//          })
//   });

// })
//   it('second category - latest products', () => {
//     cy.visit("https://www.automationteststore.com/");

//     cy.get('#latest > .container-fluid').find('.prdocutname').first().invoke('text').then((the_text)=>{
//       cy.log("first item inside the latest Category is : ",the_text)
//     })

//     cy.get('#latest > .container-fluid').find('.prdocutname').last().invoke('text').then((the_text)=>{
//       cy.log("last item inside the latest Category is : ",the_text)

//     })
// });
// });

// describe("this is to see the price multiply by 10 ", () => {
//   it("hey we need to see the price multiply by 10 for the first item inside best seller category", () => {
//     cy.visit("https://www.automationteststore.com/");
//     cy.get("#bestseller > .container-fluid")
//       .find(".oneprice")
//       .first()
//       .invoke("text")
//       .then((the_text) => {
//         // cy.log(the_text.replace("$", "") * 10);
//         let ModifiedPrice = (the_text.replace("$",""))*10
//         cy.log(ModifiedPrice)

//         // alert(`the price of the element multiplied by 10 is ${ModifiedPrice}`)


//         let myage = 30

//         myage+=myage

//         cy.log(myage)
//       });
//   });
// });


describe('assignment', () => {
  it('New and Old prices summation in the SPECIALS', () => {
     cy.visit("https://www.automationteststore.com/");
// Hello
     // Initialize variables for sum of new and old prices
     let sumNewPrices = 0;
     let sumOldPrices = 0;

     // Extract and sum new prices
     cy.get('#special > .container-fluid')
        .find('.pricenew')
        .each((newPriceElement) => {
           const priceText = Cypress.$(newPriceElement).text();
           const price = parseFloat(priceText.replace('$', ''));
           sumNewPrices += price;
        });

     // Extract and sum old prices
     cy.get('#special > .container-fluid')
        .find('.priceold')
        .each((oldPriceElement) => {
           const priceText = Cypress.$(oldPriceElement).text();
           const price = parseFloat(priceText.replace('$', ''));
           sumOldPrices += price;
        })
        .then(() => {
           // Construct the message
           const message = `The sum of the new prices is $${sumNewPrices.toFixed(2)}. The sum of the old prices is $${sumOldPrices.toFixed(2)}.`;

           cy.log(message);
           alert(message)
        });
  });
});
