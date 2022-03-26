import HomePage from '../pageobjects/homePage'
import { expect } from 'chai'

describe('Home Page Test', () => { 

    let homePage : HomePage

    beforeEach( async () => {
        homePage = new HomePage()
        homePage.navigateTo()
    })

    it('Check url is correct', async () => {
        expect(await browser.getUrl()).to.contain('angularpractice')
    })

    it('Check navbar is displayed', async () => {
        expect(await homePage.navbar.isDisplayed()).to.be.true
    })

    it('ProtoCommerce is displayed', async () => {
        expect(await homePage.protoCommerce.isDisplayed()).to.be.true
    })

    it('Home is displayed', async () => {
        expect(await homePage.home.isDisplayed()).to.be.true
    })

    it('Shop is displayed', async () => {
        expect(await homePage.shop.isDisplayed()).to.be.true
    })

})