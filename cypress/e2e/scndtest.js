/// <reference types= "cypress" />




describe('purchasing process', () => {
    it('add to cart', () => {

        cy.visit("https://automationteststore.com/")
        cy.get('#customer_menu_top > li > a').click();
        cy.get('#loginFrm_loginname').type("AnasAlnaser");
        cy.get('#loginFrm_password').type("Anas1995!");
        cy.get('#loginFrm > fieldset > .btn').click();
        cy.get('.breadcrumb > :nth-child(1) > a').click();
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart').click();
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(3) > .thumbnail > .pricetag > .productcart').click();
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(4) > .thumbnail > .pricetag > .productcart').click();
        cy.get('.cart').click();
        cy.get('#cart_checkout1').click();
        cy.get('#checkout_btn').click();
        //test

    });
});