class HomePage {

    private readonly navbar : string = ".navbar"
    private readonly protoCommerce : string = "=ProtoCommerce"
    private readonly home : string = "=Home"
    private readonly shop : string = "=Shop"

    constructor(private readonly $main = $("body")) {
        this.navbar = this.$main.$(this.navbar)
        this.protoCommerce = this.$main.$(this.protoCommerce);
        this.home = this.$main.$(this.home)
        this.shop = this.$main.$(this.shop)
    }
    navigateTo() : void {
        return browser.url("https://rahulshettyacademy.com/angularpractice/")
    }
}

export default HomePage