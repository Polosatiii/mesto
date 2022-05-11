export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
  ];


  export const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    submitButtonSelector: '.popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_invalid',
    errorClass: 'popup__error_visible'
  };

 

  export const ESC_KEYCODE = 27;


  export const popupAvatar = document.querySelector('.popup_edit-avatar')
  export const userEditAvatar = document.querySelector('.user__image')
  export const popupEditProfile = document.querySelector('.popup_edit-profile'); 
  export const userEditButton = document.querySelector('.user__add-info'); 
  export const nameField = document.querySelector('.popup__input_element_user-name');
  export const infoField = document.querySelector('.popup__input_element_user-info') 
  export const photoAddButton = document.querySelector('.user__add-photo') 
  export const popupAddPhoto = document.querySelector('.popup_add-card') 
  export const formAddCard = document.querySelector('.popup_add-card'); 