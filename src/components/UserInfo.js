export class UserInfo {
    constructor({ profileNameSelector, profileJobSelectore }){
        this._nameElement = document.querySelector(profileNameSelector)
        this._jobElement = document.querySelector(profileJobSelectore)
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent
        }
    }

    setUserInfo(title, job) {
        this._nameElement.textContent = title
        this._jobElement.textContent = job
    }
}
