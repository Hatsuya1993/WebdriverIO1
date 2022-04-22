import HomePage from '../pageobjects/homePage'

class Helpers {

    private readonly homePage : HomePage = new HomePage()

    async addDataInput(type : String, data : string){
        switch(type){
            case "name":
                await this.homePage.getNameInput().setValue(data)
                break
            case "email":
                await this.homePage.getEmailInput().setValue(data)
                break
            case "password":
                await this.homePage.getPasswordInput().setValue(data)
                break
            default:
                throw new Error("No such type")
        }
    }

}

export default Helpers