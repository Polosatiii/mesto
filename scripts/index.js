import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';

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


const CardForm = popupAddPhoto.querySelector('.popup__form')
const editForm = popupEditProfile.querySelector('.popup__form')


const profileValidator = new FormValidator(config, editForm);
const cardValidatore = new FormValidator(config, CardForm);

profileValidator.enableValidation()
cardValidatore.enableValidation()



const prependeCard = (data) => {

  const card = new Card(data, '.template')
  
  return card.getCardElement();
};

function renderiniinitialCards() {
  initialCards.forEach(addCardPrepende);  
}

renderiniinitialCards()

function addCardAppend(data) {
  listElement.append(prependeCard(data));
}

function addCardPrepende(data) {
  listElement.prepend(prependeCard(data));
}

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
  cardValidatore.toggleButtonState()
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

const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  const card = prependeCard({
    name: inputCardName.value,
    link: inputCardLink.value
  });


  cardValidatore.toggleButtonState()

  listElement.prepend(card)
  
  

  closePopup(popupAddPhoto);
  
};


formAddCard.addEventListener('submit', handleCardFormSubmit)


userEditButton.addEventListener('click', function openEditprofile() {
  nameField.value = userName.textContent;
  infoField.value = userInfo.textContent 

  openPopup(popupEditProfile)

});

photoAddButton.addEventListener('click', function () { openPopup(popupAddPhoto) });




popupCloseButtonEditProfile.addEventListener('click', function () { closePopup(popupEditProfile) });
photoAddClose.addEventListener('click', function () { closePopup(popupAddPhoto) });
popupCloseFull.addEventListener('click', function () { closePopup(popupPhoto) });



function submitForm(event) {

  event.preventDefault()



  userName.textContent = nameField.value;

  userInfo.textContent = infoField.value;

  profileValidator.toggleButtonState()

  closePopup(popupEditProfile);

}



formSubmit.addEventListener('submit', submitForm);




