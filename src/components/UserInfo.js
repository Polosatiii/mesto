export class UserInfo {
    constructor({ profileNameSelector, profileJobSelectore, profileAvatar}){
        this._nameElement = document.querySelector(profileNameSelector)
        this._jobElement = document.querySelector(profileJobSelectore)
        this._profileAvatar = document.querySelector(profileAvatar)
    }

    getUserInfo() {
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent,
            avatar: this._profileAvatar.src
        }
    }

    setUserInfo(title, job, avatar) {
        this._nameElement.textContent = title
        this._jobElement.textContent = job
         this._profileAvatar.src = avatar
        
        
       
    }

    setAvatar(avatar) {
        this._profileAvatar.src = avatar
    }


}
