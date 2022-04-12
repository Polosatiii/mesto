  export class Card {
    constructor (data, cardTemplateSelector, handleImageClick) {
    this._handleImageClick = handleImageClick
    this._name = data.name;
    this._link = data.link;

    this._cardTemplateSelector =  cardTemplateSelector;
    }


    _getTemplate = () => {
      const cardElement = document
        .querySelector(this._cardTemplateSelector)
        .content
        .querySelector('.user-gallery__item')
        .cloneNode(true);

        return cardElement;
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
      this._cardimage.addEventListener('click', this._handleImageClick);
   
     }

    getCardElement() {

     //нашли элемент
     this._cardElement = this._getTemplate();
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

