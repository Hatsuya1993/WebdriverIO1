class HomePage {

    navbar : string = ".navbar"
    protoCommerce : string = "=ProtoCommerce"
    home : string = "=Home"

    constructor(private readonly $main = $("body")) {
        this.navbar = this.$main.$(this.navbar)
        this.protoCommerce = this.$main.$(this.protoCommerce);
        this.home = this.$main.$(this.home)
    }
    navigateTo() : void {
        return browser.url("https://rahulshettyacademy.com/angularpractice/")
    }
}

export default HomePage