    class MyInfoPage{
        selectorList(){
            const selectors = {
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
            return selectors
        }

        accessMyPageInfo(){
            cy.get(this.selectorList().myInfoButton).click()
        }

        fillInTheFields(){
            cy.get(this.selectorList().firstNameField).clear().type('FirstNameTest')
            cy.get(this.selectorList().lastNameField).clear().type('LastNameTest')
            cy.get(this.selectorList().genericField).eq(3).clear().type('EmployeId')
            cy.get(this.selectorList().genericField).eq(4).clear().type('OtherIdTest')
            cy.get(this.selectorList().genericField).eq(5).clear().type('DriverLicenseNumberTest')
            cy.get(this.selectorList().genericField).eq(6).clear().type('2025-03-10')
            cy.get(this.selectorList().dateCloseButton).click()
            cy.get(this.selectorList().comboBoximput).eq(0).click()
            cy.get(this.selectorList().secondItemComboBox).click()
            cy.get(this.selectorList().comboBoximput).eq(1).click()
            cy.get(this.selectorList().thirdItemCombobox).click()
            cy.get(this.selectorList().calendarIconButton).eq(1).click()
            cy.get(this.selectorList().dateField).eq(1).clear().type('1992-04-21') 
            cy.get(this.selectorList().dateCloseButton).click()
            cy.get(this.selectorList().genderOptionclick).eq(1).click()
            cy.get(this.selectorList().submitButton).eq(0).click()
        }

        alertSuccessfull(){
            cy.get('body').should('contain','Successfully Updated')
            cy.get('.oxd-toast-close')
        }


    }

        export default MyInfoPage