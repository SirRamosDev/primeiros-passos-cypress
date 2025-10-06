import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {


  it('User Info Update - Success', () => {

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
    myInfoPage.fillPersonalDetails(chance.first(),chance.last())
    myInfoPage.fillEmployeeDetails('EmployeId','OtherId','Drivers License Number','2025-03-10')
    myInfoPage.fillStatusDetails('1992-04-21')
    myInfoPage.saveForm()
    
  })
    
  })