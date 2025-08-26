import { BasePageModel } from "./BasePageModel";

export class LoginPage extends BasePageModel {
  userNameField: string = '[data-qa="login-email"]';
  passwordField: string = '[data-qa="login-password"]';
  loginBtn: string = '[data-qa="login-button"]';

  constructor(page) {
    super(page);
  }

  async enterUserName(userName: string) {
    await this.fill(await this.getLocator(this.userNameField), userName);
  }

  async enterPassword(password: string) {
    await this.fill(await this.getLocator(this.passwordField), password);
  }

  async clickOnLogin(){
    await this.clickOnElement(await this.getLocator(this.loginBtn));
  }

  async LoginToApplication(userName:string, password:string){
    await this.enterUserName(userName);
    await this.enterPassword(password);
    await this.clickOnLogin();
  }
}
