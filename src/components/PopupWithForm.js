import { Popup } from './Popup' 
export class PopupWithForm extends Popup { 
    constructor(popupSelector, handleSubmit){ 
        super(popupSelector) 
        this._handleSubmit = handleSubmit 
        this._form = this._popup.querySelector('.popup__form') 
        this._submitButton = this._form.querySelector('.popup__button-submit')
} 

   _getInputValues() { 
        const inputs = [...this._form.querySelectorAll('.popup__input')] 
        const values = {} 
        inputs.forEach((input) => { 
            values[input.name] = input.value 
        }) 
        return values 
    } 

    setButtonText(text){
        this._submitButton.textContent = text
    }

    changeSubmitHandler(newSubmitHandler) {
        this._handleSubmit = newSubmitHandler
    }

    setEventListeners() { 
        super.setEventListeners() 
        this._form.addEventListener('submit', (e) => { 
            e.preventDefault()
            this._handleSubmit(this._getInputValues()) 
        }) 
    } 

    close() { 
        super.close() 
        this._form.reset() 
    } 
} 