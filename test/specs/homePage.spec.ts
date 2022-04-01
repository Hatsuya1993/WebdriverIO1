import HomePage from '../pageobjects/homePage'
import { expect } from 'chai'

describe('Home Page Test', () => { 

    let homePage : HomePage = 

    beforeEach( async () => {
        homePage = new HomePage()
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

})