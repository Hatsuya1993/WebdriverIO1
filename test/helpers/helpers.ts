import HomePage from '../pageobjects/homePage'

class Helpers {

    private readonly homePage : HomePage = new HomePage()

    async addDataInput(type : string, data : string){
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

    async addDropdown(type: string, data: number){
        switch(type){
            case "gender":
                await this.homePage.getGender().selectByIndex(data)
        }
    }

}

export default Helpers