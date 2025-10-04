import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  const selectorList = {
    
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: ".oxd-alert",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    comboBoximput: ".oxd-select-wrapper",
    secondItemComboBox:".oxd-select-dropdown > :nth-child(4)",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
    dateCloseButton: ".--close",
    calendarIconButton: ".oxd-date-input-icon",
    genderOptionclick: ".oxd-radio-input--active",
    submitButton: "[type='submit']"
    
  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUSer(userData.userSuccess.username,userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    menuPage.accessAdmin()
    menuPage.accessPIM()
    menuPage.accessLeave()
    menuPage.accessTime()
    menuPage.accessRecruitment()
    menuPage.accessPerformance()
    menuPage.accessDashboard()
    menuPage.accessDirectory()
    menuPage.accessMaintenance
    menuPage.accessClaim()
    menuPage.accessBuzz()
    myInfoPage.accessMyPageInfo()
    myInfoPage.fillInTheFields()
    myInfoPage.alertSuccessfull()
    
    // cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    // cy.get(selectorList.dashboardGrid)
    //cy.get(selectorList.myInfoButton).click()
    // cy.get(selectorList.firstNameField).clear().type('FirstNameTest')
    // cy.get(selectorList.lastNameField).clear().type('LastNameTest')
    // cy.get(selectorList.genericField).eq(3).clear().type('EmployeID')
    // cy.get(selectorList.genericField).eq(4).clear().type('OtherIdTest')
    // cy.get(selectorList.genericField).eq(5).clear().type('Drivers License Number Test')
    // cy.get(selectorList.genericField).eq(6).clear().type('2025-03-10')
    // cy.get(selectorList.dateCloseButton).click()
    // cy.get(selectorList.comboBoximput).eq(0).click()
    // cy.get(selectorList.secondItemComboBox).click()
    // cy.get(selectorList.comboBoximput).eq(1).click()
    // cy.get(selectorList.thirdItemCombobox).click()
    // cy.get(selectorList.calendarIconButton).eq(1).click()
    // cy.get(selectorList.dateField).eq(1).clear().type('1992-04-21')
    // cy.get(selectorList.dateCloseButton).click()
    // cy.get(selectorList.genderOptionclick).eq(1).click()
    // cy.get(selectorList.submitButton).eq(0).click()
    // cy.get('body').should('contain','Successfully Updated')
    // cy.get('.oxd-toast-close')
    
  })
    it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
  })