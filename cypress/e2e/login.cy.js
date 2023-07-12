describe('Login Tests', function () {
    it('Successfull login', function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('[name=username]')
        .type('Admin')

        cy.get('[name=password]')
        .type('admin123')

        cy.get('[type=submit]')
        .click()

        cy.url()
        .should('contain', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
       
    })
})