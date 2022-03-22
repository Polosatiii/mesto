  import {bigImage, imageCaption, openPopup, popupPhoto}  from './index.js';

   export class Card {
       constructor (data, cardTemplateSelector) {
         this._templateItem = document.querySelector(cardTemplateSelector).content.querySelector('.user-gallery__item');
        
        this._name = data.name;
        this._link = data.link;
       }


       _setEventListeners() {
          
        this._cardElement.querySelector('.user-gallery__like-b').addEventListener('click', (event) => {
          event.target.classList.toggle('user-gallery__like-b_active');
        });
    
      this._cardElement.querySelector('.user-gallery__delete-button').addEventListener('click', (event) => {
        event.target.closest('.user-gallery__item').remove();
      })
    

      this._cardElement.querySelector('.user-gallery__photo').addEventListener('click', (event) => {
        openPopup(popupPhoto)
        bigImage.src = this._link;
        bigImage.alt = this._name;
        imageCaption.textContent = this._name;
      
        })
      
       }


       createCard() {

        //нашли элемент
        this._cardElement = this._templateItem.cloneNode(true);
        this._likeButton = this._cardElement.querySelector('.user-gallery__like-b');
        this._cardImege = this._cardElement.querySelector('.user-gallery__photo')
        
        
        
        //заполнили 
        this._cardElement.querySelector('.user-gallery__photo-name').textContent = this._name;
        this._cardElement.querySelector('.user-gallery__photo').alt = this._name;
        this._cardElement.querySelector('.user-gallery__photo').src = this._link;
        
        //обработчики 
        this._setEventListeners()
      
        return this._cardElement;
      };


      }

   
