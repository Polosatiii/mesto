import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
    open(text, link) {
        const image = this._popup.querySelector('.popup__image')
        const caption = this._popup.querySelector('.popup__image-caption')
    
        image.src = link
        caption.textContent = text

        super.open()
    }

}