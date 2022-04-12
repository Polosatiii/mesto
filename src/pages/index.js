
import { initialCards } from '../utils/const'
import { config } from '../utils/const'
import { popupEditProfile, userEditButton, nameField, infoField, photoAddButton, popupAddPhoto, formAddCard } from '../utils/const'
import { FormValidator } from '../components/FormValidator';
import { Card } from '../components/Card';
import { Section } from '../components/Section'
import { PopupWithImage } from '../components/PopupWithImage'
import { PopupWithForm } from '../components/PopupWithForm'
import { UserInfo } from '../components/UserInfo'

import '../pages/index.css';


const section = new Section ({ items: initialCards, renderer: renderCard}, '.user-gallery__items')
const imagePopup = new PopupWithImage('.popup_full-size-photo')
const addCardPopup = new PopupWithForm('.popup_add-card', handleCardFormSubmit)
const editProfilePopup = new PopupWithForm('.popup_edit-profile', submitEditForm)


const CardForm = popupAddPhoto.querySelector('.popup__form')
const editForm = popupEditProfile.querySelector('.popup__form')


const profileValidator = new FormValidator(config, editForm);
const cardValidatore = new FormValidator(config, CardForm);

profileValidator.enableValidation()
cardValidatore.enableValidation()



const createCard = (data) => {
  const card = new Card(data, '.template', () => {
    imagePopup.open(data.name, data.link)
  })
  return card.getCardElement();
};

function renderCard(data) {
  const card = createCard(data)
  section.addItem(card)
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

imagePopup.setEventListeners()
addCardPopup.setEventListeners()
editProfilePopup.setEventListeners()



const userInform = new UserInfo ({ profileNameSelector: '.user__name', profileJobSelectore: '.user__info'})


formAddCard.addEventListener('submit', handleCardFormSubmit)


userEditButton.addEventListener('click', () => {
  const data = userInform.getUserInfo()
  nameField.value = data.name
  infoField.value = data.job

  editProfilePopup.open()

});

photoAddButton.addEventListener('click', function () { addCardPopup.open() });


section.rendderItems()
