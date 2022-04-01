class HomePage {

    private readonly navbar : string = ".navbar"
    private readonly protoCommerce : string = "=ProtoCommerce"
    private readonly home : string = "=Home"
    private readonly shop : string = "=Shop"
    private readonly banner : string = ".jumbotron"
    private readonly name : string = "label=Name"
    private readonly nameInput : string = "[name='name']"
    private readonly email : string = "label=Email"
    private readonly emailInput : string = "[name='email']"
    private readonly password : string = "label=Password"

    constructor(private readonly $main = $("body")) {
        this.navbar = this.$main.$(this.navbar)
        this.protoCommerce = this.$main.$(this.protoCommerce);
        this.home = this.$main.$(this.home)
        this.shop = this.$main.$(this.shop)
        this.banner = this.$main.$(this.banner)
        this.name = this.$main.$(this.name)
        this.nameInput = this.$main.$(this.nameInput)
        this.email = this.$main.$(this.email)
        this.emailInput = this.$main.$(this.emailInput)
        this.password = this.$main.$(this.password)
    }
    navigateTo() : void {
        return browser.url("https://rahulshettyacademy.com/angularpractice/")
    }
    getNavBar() : string {
        return this.navbar
    }
    getProtoCommerce() : string {
        return this.protoCommerce
    }
    getHome() : string {
        return this.home
    }
    getShop() : string {
        return this.shop
    }
    getBanner() : string {
        return this.banner
    }
    getName() : string {
        return this.name
    }
    getNameInput() : string {
        return this.nameInput
    }
    getEmail() : string {
        return this.email
    }
    getEmailInput() : string {
        return this.emailInput
    }
    getPassword() : string {
        return this.password
    }
}

export default HomePage