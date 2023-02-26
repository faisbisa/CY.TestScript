export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    AddToChart = '#add-to-cart-sauce-labs-backpack'
    Chart = '#shopping_cart_container > a'
    CheckOut = '#checkout'
    txt_FirtsName = '#first-name'
    txt_LastName = '#last-name'
    txt_ZIP = '#postal-code'
    Continue = '#continue'
    Finish = '#finish'
    BackToHome = '#back-to-products'
    errorNotif = '#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error'
    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') }

        clickAddToChart(){
            cy.get(this.AddToChart).click()
        }
        clickChart(){
            cy.get(this.Chart).click()
        }
        assertChart(){
            cy.get('.title').should('be.visible')
            cy.contains('Sauce Labs Backpack').should('be.visible')
        }
        clickCheckOut(){
            cy.get(this.CheckOut).click()
        }
        assertCheckOut(){
            cy.get('.title').should('be.visible')
            // cy.contains('CHECKOUT: YOUR INFORMATION').should('contain','CHECKOUT: YOUR INFORMATION');
        }
        inputFirstName(FirstName: string){
            cy.get(this.txt_FirtsName).type(FirstName)
        }
        inputLastName(LastName: string){
            cy.get(this.txt_LastName).type(LastName)
        }
        inputZIP(ZIP: string){
            cy.get(this.txt_ZIP).type(ZIP)
        }
        clickContinue(){
            cy.get(this.Continue).click()
        }
        assertContinue(){
            cy.get('.title').should('be.visible')
        }
        clickFinish(){
            cy.get(this.Finish).click()
        }
        assertFinish(){
            cy.get('.title').should('be.visible')
        }
        clickBackToHome(){
            cy.get(this.BackToHome).click()
        }
        assertBackToHome(){
            cy.get('.title').should('be.visible')
        }
        asserterrorNotif(){
            cy.get('.title').should('be.visible')
        }
        
}