class HomePage {

    private readonly navbar : string = ".navbar"
    private readonly protoCommerce : string = "=ProtoCommerce"
    private readonly home : string = "=Home"
    private readonly shop : string = "=Shop"
    private readonly banner : string = ".jumbotron"

    constructor(private readonly $main = $("body")) {
        this.navbar = this.$main.$(this.navbar)
        this.protoCommerce = this.$main.$(this.protoCommerce);
        this.home = this.$main.$(this.home)
        this.shop = this.$main.$(this.shop)
        this.banner = this.$main.$(this.banner)
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
}

export default HomePage