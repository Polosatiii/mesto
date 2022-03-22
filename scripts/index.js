import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';

  const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  submitButtonSelector: '.popup__button-submit',
  inactivButtonClass: '.popup__button-submit_invalid',
  errorClass: '.popup__error_visible'
}



const initialCards = [
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










const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupCloseButtonEditProfile = document.querySelector('.popup__close_edit');
const editButton = document.querySelector('.user__add-info');
const formSubmit = document.querySelector('.popup__form');

const nameField = document.querySelector('.popup__input_element_user-name')
const infoField = document.querySelector('.popup__input_element_user-info')

const userName = document.querySelector('.user__name')
const userInfo = document.querySelector('.user__info')

const addPhotoButton = document.querySelector('.user__add-photo')
const addPhotoClose = document.querySelector('.popup__close-add')
const popupAddPhoto = document.querySelector('.popup_add-card')



const listElement = document.querySelector('.user-gallery__items');
const templateItem = document.querySelector('.template').content;
const deleteCardButton = document.querySelector('.user-gallery__delete-button');
const formAddCard = document.querySelector('.popup_add-card');
const inputCardName = document.querySelector('.popup__input_element_card-name');
const inputCardLink = document.querySelector('.popup__input_element_card-link');

export const imageClick = document.querySelector('.user-gallery__photo');
export const bigImage = document.querySelector('.popup__image');
export const popupPhoto = document.querySelector('.popup_full-size-photo');
export const imageCaption = document.querySelector('.popup__image-caption');
const popupCloseFull = document.querySelector('.popup__close-full');
const popups = [...document.querySelectorAll('.popup')]


const addCardForm = popupAddPhoto.querySelector('.popup__form')
const editForm = popupEditProfile.querySelector('.popup__form')


const editProfileValidator = new FormValidator(config, editForm);
const addCardValidatore = new FormValidator(config, addCardForm);

editProfileValidator.enableValidation()
addCardValidatore.enableValidation()



const prependeCard = (data) => {

  const card = new Card(data, '.template')
  const cardElement = card.createCard(data)


  listElement.prepend(cardElement);

};




initialCards.forEach(prependeCard);

export function openPopup(popup) {
  popup.classList.add('popup_is-open');
  document.addEventListener('keydown', closePopupEscape)
};

function closePopup(popup) {
  popup.classList.remove('popup_is-open')
  document.removeEventListener('keydown', closePopupEscape)
}


popupEditProfile.addEventListener('click', function (event) {
  if (event.target.classList.contains('popup_is-open')) {
    closePopup(popupEditProfile)
  };

})

popupAddPhoto.addEventListener('click', function (event) {
  if (event.target.classList.contains('popup_is-open')) {
    closePopup(popupAddPhoto)
  };

})

popupPhoto.addEventListener('click', function (event) {
  if (event.target.classList.contains('popup_is-open')) {
    closePopup(popupPhoto)
  };

})

function closePopupEscape(event) {
  if (event.key == 'Escape') {
    const popupOpen = popups.filter(popup => {
      return popup.classList.contains('popup_is-open');
    });
    popupOpen.forEach(popup => {
      closePopup(popup);
    })
  }
}



function addCard(event) {
  event.preventDefault();

  openPopup(popupAddPhoto);

  const name = inputCardName.value;
  const link = inputCardLink.value;
  const item = {
    name: name,
    link: link
  }

  prependeCard(item);


  event.target.reset();

  const buttonSubmit = document.querySelector('.popup__button-save');

  buttonSubmit.disabled = !formSubmit.checkValidity();
  buttonSubmit.classList.toggle(config.submitBtError, !formSubmit.checkValidity());

  closePopup(popupAddPhoto);

}

formAddCard.addEventListener('submit', addCard)












editButton.addEventListener('click', function openEditprofile() {
  openPopup(popupEditProfile)
  nameField.value = userName.textContent;
  infoField.value = userInfo.textContent;

});

addPhotoButton.addEventListener('click', function () { openPopup(popupAddPhoto) });




popupCloseButtonEditProfile.addEventListener('click', function () { closePopup(popupEditProfile) });
addPhotoClose.addEventListener('click', function () { closePopup(popupAddPhoto) });
popupCloseFull.addEventListener('click', function () { closePopup(popupPhoto) });



function submitForm(event) {

  event.preventDefault()



  userName.textContent = nameField.value;

  userInfo.textContent = infoField.value;



  closePopup(popupEditProfile);

}



formSubmit.addEventListener('submit', submitForm);





