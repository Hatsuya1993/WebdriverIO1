import HomePage from '../pageobjects/homePage'
import { expect } from 'chai'
import Helpers from '../helpers/helpers'
import data from '../constants/constants'
import isSelected from '../../node_modules/webdriverio/build/commands/element/isSelected'

describe('Home Page Test', () => { 

    let homePage : HomePage
    let helpers : Helpers

    beforeEach( async () => {
        homePage = new HomePage()
        helpers = new Helpers()
        homePage.navigateTo()
    })

    it('Check url is correct', async () => {
        expect(await browser.getUrl()).to.contain('angularpractice')
    })

    it('Check navbar is displayed', async () => {
        expect(await homePage.getNavBar().isDisplayed()).to.be.true
    })

    it('ProtoCommerce is displayed', async () => {
        expect(await homePage.getProtoCommerce().isDisplayed()).to.be.true
    })

    it('Home is displayed', async () => {
        expect(await homePage.getHome().isDisplayed()).to.be.true
    })

    it('Shop is displayed', async () => {
        expect(await homePage.getShop().isDisplayed()).to.be.true
    })

    it('Banner is displayed', async () => {
        expect(await homePage.getBanner().isDisplayed()).to.be.true
    })

    it('Name is displayed', async () => {
        expect(await homePage.getName().isDisplayed()).to.be.true
    })

    it('Name input is displayed', async () => {
        expect(await homePage.getNameInput().isDisplayed()).to.be.true
    })

    it('Email is displayed', async () => {
        expect(await homePage.getEmail().isDisplayed()).to.be.true
    })

    it('Email input is displayed', async () => {
        expect(await homePage.getEmailInput().isDisplayed()).to.be.true
    })

    it('Password is displayed', async () => {
        expect(await homePage.getPassword().isDisplayed()).to.be.true
    })

    it('Password input is displayed', async () => {
        expect(await homePage.getPasswordInput().isDisplayed()).to.be.true
    })

    it('Checkbox is displayed', async () => {
        expect(await homePage.getCheckbox().isDisplayed()).to.be.true
    })

    it('Checkbox input should be displayed', async () => {
        expect(await homePage.getCheckboxText().isDisplayed()).to.be.true
    })

    it('Checkbox gender should be displayed', async () => {
        expect(await homePage.getGender().isDisplayed()).to.be.true
    })

    it('Checkbox gender text should be displayed', async () => {
        expect(await homePage.getGenderText().isDisplayed()).to.be.true
    })

    it('Employment status should be displayed', async () => {
        expect(await homePage.getEmploymentStatus().isDisplayed()).to.be.true
    })

    it('Student checkbox should be displayed', async () => {
        expect(await homePage.getStudentCheckBox().isDisplayed()).to.be.true
    })

    it('Student text should be displayed', async () => {
        expect(await homePage.getStudentText().isDisplayed()).to.be.true
    })

    it('Employed checkbox should be displayed', async () => {
        expect(await homePage.getEmployedCheckBox().isDisplayed()).to.be.true
    })

    it('Employed text should be displayed', async () => {
        expect(await homePage.getEmployedText().isDisplayed()).to.be.true
    })

    it('Entrepreneur checkbox should be displayed', async () => {
        expect(await homePage.getEntrepreneurCheckBox().isDisplayed()).to.be.true
    })

    it('Entrepreneur text should be displayed', async () => {
        expect(await homePage.getEntrepreneurText().isDisplayed()).to.be.true
    })

    it('Date of birth text should be displayed', async () => {
        expect(await homePage.getDateOfBirthText().isDisplayed()).to.be.true
    })

    it('Date of birth should be displayed', async () => {
        expect(await homePage.getDateOfBirth().isDisplayed()).to.be.true
    })

    it('Submit button should be displayed', async () => {
        expect(await homePage.getSubmitButton().isDisplayed()).to.be.true
    })

    it('Two binding input should be displayed', async () => {
        expect(await homePage.getTwoWay().isDisplayed()).to.be.true
    })

    it('Banner should be displayed', async () => {
        expect(await homePage.getBanner().isDisplayed()).to.be.true
    })

    it('Input name data should be populated when data is added', async () => {
        await helpers.addDataInput(data[0].homePageName.type, data[0].homePageName.data)
        expect(await homePage.getNameInput().getValue()).to.equal(data[0].homePageName.data)
    })

    it('Input email data should be populated when data is added', async () => {
        await helpers.addDataInput(data[0].homePageEmail.type, data[0].homePageEmail.data)
        expect(await homePage.getEmailInput().getValue()).to.equal(data[0].homePageEmail.data)
    })

    it('Input password data should be populated when data is added', async () => {
        await helpers.addDataInput(data[0].homePagePassword.type, data[0].homePagePassword.data)
        expect(await homePage.getPasswordInput().getValue()).to.equal(data[0].homePagePassword.data)
    })

    it('Checkbox password data should be populated when data is added', async () => {
        await homePage.getCheckboxText().click()
        expect(await homePage.getCheckboxText().isSelected()).to.be.true
    })

    it('Dropdown select male should be male', async () => {
        await helpers.addDropdown(data[0].gender.type, data[0].gender.male.index)
        expect(await homePage.getGender().getValue()).to.equal(data[0].gender.male.data)
    })

    it('Dropdown select female should be female', async () => {
        await helpers.addDropdown(data[0].gender.type, data[0].gender.female.index)
        expect(await homePage.getGender().getValue()).to.equal(data[0].gender.female.data)
    })

    it('Student checkbox should be checked if selected', async () => {
        await homePage.getStudentCheckBox().click()
        expect(await homePage.getStudentCheckBox().isSelected()).to.be.true
    })

})