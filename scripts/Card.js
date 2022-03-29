  import {bigImage, imageCaption, openPopup, popupPhoto}  from './index.js';

  export class Card {
    constructor (data, cardTemplateSelector) {
      this._templateItem = document.querySelector(cardTemplateSelector).content.querySelector('.user-gallery__item');
     
     this._name = data.name;
     this._link = data.link;
    }

    _handleLike = () => {
      this._likeButton.classList.toggle('user-gallery__like-b_active')
    }

    _handleDeleteCard = () => {
      this._cardElement.remove();
      this._cardElement = null;
    }


    _setEventListeners() {
      this._likeButton.addEventListener('click', this._handleLike);
      this._deleteButton.addEventListener('click', this._handleDeleteCard);
      this._cardElement.querySelector('.user-gallery__photo').addEventListener('click', (event) => {
     openPopup(popupPhoto)
     bigImage.src = this._link;
     bigImage.alt = this._name;
     imageCaption.textContent = this._name;
   
     })
   
    }


    getCardElement() {

     //нашли элемент
     this._cardElement = this._templateItem.cloneNode(true);
     this._likeButton = this._cardElement.querySelector('.user-gallery__like-b');
     this._cardimage = this._cardElement.querySelector('.user-gallery__photo')
     this._deleteButton = this._cardElement.querySelector('.user-gallery__delete-button')
     
     
     
     //заполнили 
     this._cardElement.querySelector('.user-gallery__photo-name').textContent = this._name;
     this._cardimage.alt = this._name;
     this._cardimage.src = this._link;
     
     //обработчики 
     this._setEventListeners()
   
     return this._cardElement;
   };


   }

