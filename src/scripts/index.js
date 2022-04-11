import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { Section } from './Section.js'
import { PopupWithImage } from './PopupWithImage.js'
import { PopupWithForm } from './PopupWithForm.js'
import { UserInfo } from './UserInfo.js'


import '../pages/index.css';

  const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputErrorClass: 'popup__input_type_error',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_invalid',
  errorClass: 'popup__error_visible'
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


export const ESC_KEYCODE = 27;
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupCloseButtonEditProfile = document.querySelector('.popup__close_edit');
const userEditButton = document.querySelector('.user__add-info');
const formSubmit = document.querySelector('.popup__form');

const nameField = document.querySelector('.popup__input_element_user-name')
const infoField = document.querySelector('.popup__input_element_user-info')

const userName = document.querySelector('.user__name')
const userInfo = document.querySelector('.user__info')

const photoAddButton = document.querySelector('.user__add-photo')
const photoAddClose = document.querySelector('.popup__close-add')
const popupAddPhoto = document.querySelector('.popup_add-card')



const listElement = document.querySelector('.user-gallery__items');
const formAddCard = document.querySelector('.popup_add-card');
const inputCardName = document.querySelector('.popup__input_element_card-name');
const inputCardLink = document.querySelector('.popup__input_element_card-link');

export const imageClick = document.querySelector('.user-gallery__photo');
export const bigImage = document.querySelector('.popup__image');
export const popupPhoto = document.querySelector('.popup_full-size-photo');
export const imageCaption = document.querySelector('.popup__image-caption');
const popupCloseFull = document.querySelector('.popup__close-full');
const popups = [...document.querySelectorAll('.popup')]


const CardForm = popupAddPhoto.querySelector('.popup__form')
const editForm = popupEditProfile.querySelector('.popup__form')


const profileValidator = new FormValidator(config, editForm);
const cardValidatore = new FormValidator(config, CardForm);

profileValidator.enableValidation()
cardValidatore.enableValidation()



const prependeCard = (data) => {

  const card = new Card(data, '.template', () => {
    ImagePopup.open(data.name, data.link)
  })
  return card.getCardElement();
};


function addCardPrepende(data) {
  listElement.prepend(prependeCard(data));
}


const handleCardFormSubmit = (data) => {
  const card = prependeCard({
    name: data['place-name'],
    link: data.link
  })

  section.addItem(card)

  cardValidatore.toggleButtonState()
  
  addCardPopup.close()
  
};

const submitEditForm = (data) => { 
  const { name, info } = data
  userInform.setUserInfo(name, info)
  profileValidator.toggleButtonState()
  editProfilePopup.close();

}



const section = new Section ({ items: initialCards, renderer: addCardPrepende}, '.user-gallery__items');
const ImagePopup = new PopupWithImage('.popup_full-size-photo')
const addCardPopup = new PopupWithForm('.popup_add-card', handleCardFormSubmit)
const editProfilePopup = new PopupWithForm('.popup_edit-profile', submitEditForm)

ImagePopup.setEventListeners()
addCardPopup.setEventListeners()
editProfilePopup.setEventListeners()

section.rendderItems()

const userInform = new UserInfo ({ profileNameSelector: '.user__name', profileJobSelectore: '.user__info'})


formAddCard.addEventListener('submit', handleCardFormSubmit)


userEditButton.addEventListener('click', () => {
  const data = userInform.getUserInfo()
  nameField.value = data.name
  infoField.value = data.job

  editProfilePopup.open()

});

photoAddButton.addEventListener('click', function () { addCardPopup.open() });



