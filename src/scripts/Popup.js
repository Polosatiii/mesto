import { ESC_KEYCODE } from './index.js';

export class Popup {
    constructor( popupSelector ){
        this._popup = document.querySelector(popupSelector)
        this._handleEscClose = this._handleEscClose.bind(this)
    }


    open(){ 
        this._popup.classList.add('popup_is-open');
        document.addEventListener('keydown', this._handleEscClose)
          
    }

    close(){
        this._popup.classList.remove('popup_is-open')
        document.removeEventListener('keydown', this._handleEscClose)
    }

    _handleEscClose(evt){
        if (evt.which === ESC_KEYCODE){
            this.close()
        }

    }

    setEventListeners(){
       const closeButton =  this._popup.querySelector('.popup__close')
       this._popup.addEventListener('click', (e) => {
           if(!e.target.closest('.popup__content') || e.target === closeButton){
               this.close()
           }
       })
    }
}