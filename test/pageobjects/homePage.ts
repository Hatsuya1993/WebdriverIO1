class HomePage {

    private readonly navbar : WebdriverIO.Element
    private readonly protoCommerce : WebdriverIO.Element
    private readonly home : WebdriverIO.Element
    private readonly shop : WebdriverIO.Element
    private readonly banner : WebdriverIO.Element
    private readonly name : WebdriverIO.Element
    private readonly nameInput : WebdriverIO.Element
    private readonly email : WebdriverIO.Element
    private readonly emailInput : WebdriverIO.Element
    private readonly password : WebdriverIO.Element
    private readonly passwordInput : WebdriverIO.Element
    private readonly checkBox : WebdriverIO.Element
    private readonly checkBoxText : WebdriverIO.Element
    private readonly gender : WebdriverIO.Element
    private readonly genderText : WebdriverIO.Element
    private readonly employmentStatus : WebdriverIO.Element
    private readonly studentCheckBox : WebdriverIO.Element
    private readonly studentText : WebdriverIO.Element
    private readonly employedCheckBox : WebdriverIO.Element
    private readonly employedText : WebdriverIO.Element
    private readonly entrepreneurCheckBox : WebdriverIO.Element
    private readonly entrepreneurText : WebdriverIO.Element
    private readonly dateOfBirthText : WebdriverIO.Element
    private readonly dateOfBirth : WebdriverIO.Element

    constructor(private readonly $main : WebdriverIO.Element = $("body")) {
        this.navbar = this.$main.$(".navbar")
        this.protoCommerce = this.$main.$("=ProtoCommerce");
        this.home = this.$main.$("=Home")
        this.shop = this.$main.$("=Shop")
        this.banner = this.$main.$(".jumbotron")
        this.name = this.$main.$("label=Name")
        this.nameInput = this.$main.$("[name='name']")
        this.email = this.$main.$("label=Email")
        this.emailInput = this.$main.$("[name='email']")
        this.password = this.$main.$("label=Password")
        this.passwordInput = this.$main.$("[placeholder='Password']")
        this.checkBox = this.$main.$("label=Check me out if you Love IceCreams!")
        this.checkBoxText = this.$main.$(".form-check-input#exampleCheck1")
        this.gender = this.$main.$("#exampleFormControlSelect1")
        this.genderText = this.$main.$("label=Gender")
        this.employmentStatus = this.$main.$("[for='exampleFormControlRadio1']")
        this.studentCheckBox = this.$main.$("#inlineRadio1")
        this.studentText = this.$main.$("label=Student")
        this.employedCheckBox = this.$main.$("#inlineRadio2")
        this.employedText = this.$main.$("label=Employed")
        this.entrepreneurCheckBox = this.$main.$("#inlineRadio3")
        this.entrepreneurText = this.$main.$("label=Entrepreneur (disabled)")
        this.dateOfBirthText = this.$main.$("label=Date of Birth")
        this.dateOfBirth = this.$main.$("[name='bday']")
    }

    navigateTo() : void {
        return browser.url("https://rahulshettyacademy.com/angularpractice/")
    }
    getNavBar() : WebdriverIO.Element {
        return this.navbar
    }
    getProtoCommerce() : WebdriverIO.Element {
        return this.protoCommerce
    }
    getHome() : WebdriverIO.Element {
        return this.home
    }
    getShop() : WebdriverIO.Element {
        return this.shop
    }
    getBanner() : WebdriverIO.Element {
        return this.banner
    }
    getName() : WebdriverIO.Element {
        return this.name
    }
    getNameInput() : WebdriverIO.Element {
        return this.nameInput
    }
    getEmail() : WebdriverIO.Element {
        return this.email
    }
    getEmailInput() : WebdriverIO.Element {
        return this.emailInput
    }
    getPassword() : WebdriverIO.Element {
        return this.password
    }
    getPasswordInput() : WebdriverIO.Element {
        return this.passwordInput
    }
    getCheckbox() : WebdriverIO.Element {
        return this.checkBox
    }
    getCheckboxText() : WebdriverIO.Element {
        return this.checkBoxText
    }
    getGender() : WebdriverIO.Element {
        return this.gender
    }
    getGenderText() : WebdriverIO.Element {
        return this.genderText
    }
    getEmploymentStatus() : WebdriverIO.Element {
        return this.employmentStatus
    }
    getStudentCheckBox() : WebdriverIO.Element {
        return this.studentCheckBox
    }
    getStudentText() : WebdriverIO.Element {
        return this.studentText
    }
    getEmployedCheckBox() : WebdriverIO.Element {
        return this.employedCheckBox
    }
    getEmployedText() : WebdriverIO.Element {
        return this.employedText
    }
    getEntrepreneurCheckBox() : WebdriverIO.Element {
        return this.entrepreneurCheckBox
    }
    getEntrepreneurText() : WebdriverIO.Element {
        return this.entrepreneurText
    }
    getDateOfBirthText() : WebdriverIO.Element {
        return this.dateOfBirthText
    }
    getDateOfBirth() : WebdriverIO.Element {
        return this.dateOfBirth
    }
}

export default HomePage