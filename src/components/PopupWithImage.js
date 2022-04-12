import { Popup } from '../components/Popup'

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._image = this._popup.querySelector('.popup__image')
        this._caption = this._popup.querySelector('.popup__image-caption')
    
    }
    open(text, link, alt) {
        this._image.src = link
        this._image.alt = alt
        this._caption.textContent = text

        super.open()
    }

}