class Api {
    constructor({ baseUrl, headers }) {
      this._headers = headers
      this._baseUrl = baseUrl
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json()
    }
    

    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then((res) => this._getResponseData(res))
        }

    
  
    getCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then((res) => this._getResponseData(res))
        }


    editProfile(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name,
                about,
             })
        })
        .then((res) => this._getResponseData(res))
        }

    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
                method: "POST",
                headers: this._headers,
                body: JSON.stringify({
                    name,
                    link
                })
            })
            .then((res) => this._getResponseData(res))
            }


    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
                method: "DELETE",
                headers: this._headers
                
            })
            .then((res) => this._getResponseData(res))
                }

    addLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
                method: "PUT",
                headers: this._headers
                            
            })
            .then((res) => this._getResponseData(res))
                }

    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
                method: "DELETE",
                headers: this._headers
                                        
            })
            .then((res) => this._getResponseData(res))
                }
                                
    editAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
                method: "PATCH",
                headers: this._headers,
                body: JSON.stringify({
                    avatar: avatar["link"],
                })                                
                })
                .then((res) => this._getResponseData(res))
                    }    

    }

   
  
    

  
  export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-40',
    headers: {
      authorization: '69ca4822-f2c1-499e-b251-d797f176bceb',
      'Content-Type': 'application/json'
    }
  }); 