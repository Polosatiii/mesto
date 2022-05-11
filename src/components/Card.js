  export class Card {
    constructor (data, cardTemplateSelector, handleImageClick, handleDeleteClick, handeleLikeClick) {
    this._handleImageClick = handleImageClick
    this._handleDeleteClick = handleDeleteClick
    this._handleLikeClick = handeleLikeClick
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;

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

    _fillLike() {
      this._likeButton.classList.add('user-gallery__like-b_active')
    }

    _unfillLike() {
      this._likeButton.classList.remove('user-gallery__like-b_active')
    }


    isLiked() {
      const userHasLikedCard = this._likes.find(user => user._id === this._userId)
      
      return userHasLikedCard
    }

    deleteThisCard() {
      this._cardElement.remove();
      this._cardElement = null;
    }


    _setEventListeners() {
      this._likeButton.addEventListener('click', () => this._handleLikeClick(this._id));
      this._deleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
      this._cardImage.addEventListener('click', this._handleImageClick);
   
     }

    setLikes(newLikes){
      this._likes = newLikes
      const likeCountElement = this._cardElement.querySelector('.user-gallery__like-count')
      likeCountElement.textContent = this._likes.length

      if(this.isLiked()) {
       this._fillLike()
      }
      else{
        this._unfillLike()
      }
    }

    getCardElement() {

     //нашли элемент
     this._cardElement = this._getTemplate();
     this._likeButton = this._cardElement.querySelector('.user-gallery__like-b');
     this._cardImage = this._cardElement.querySelector('.user-gallery__photo')
     this._deleteButton = this._cardElement.querySelector('.user-gallery__delete-button')
     
     
     
     //заполнили 
     this._cardElement.querySelector('.user-gallery__photo-name').textContent = this._name;
     this._cardImage.alt = this._name;
     this._cardImage.src = this._link;
     
     //обработчики 
     this._setEventListeners()

     this.setLikes(this._likes)

     if (this._ownerId !== this._userId ) {
      this._deleteButton.style.display = 'none'
     }
   
     return this._cardElement;
   };

   }

