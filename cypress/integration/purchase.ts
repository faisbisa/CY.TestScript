import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
const URL = 'https://www.saucedemo.com/'

it('Test to purchase labs product backpack', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
    dashboardPage.clickAddToChart()
    dashboardPage.clickChart()
    dashboardPage.assertChart()
    dashboardPage.clickCheckOut()
    dashboardPage.assertCheckOut()
    dashboardPage.inputFirstName('Sauce')
    dashboardPage.inputLastName('Demo')
    dashboardPage.inputZIP('121212')
    dashboardPage.clickContinue()
    dashboardPage.assertContinue()
    dashboardPage.clickFinish()
    dashboardPage.assertFinish()
    dashboardPage.clickBackToHome()
    dashboardPage.assertBackToHome()

})
it('Test to purchase labs product backpack with false data information', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
    dashboardPage.clickAddToChart()
    dashboardPage.clickChart()
    dashboardPage.assertChart()
    dashboardPage.clickCheckOut()
    dashboardPage.assertCheckOut()
    dashboardPage.inputFirstName(',')
    dashboardPage.inputLastName(',')
    dashboardPage.inputZIP(',')
    dashboardPage.clickContinue()
    dashboardPage.asserterrorNotif()
})