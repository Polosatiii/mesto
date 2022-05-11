
import '../pages/index.css';
import { initialCards } from '../utils/const'
import { config } from '../utils/const'
import { popupAvatar, userEditAvatar, popupEditProfile, userEditButton, nameField, infoField, photoAddButton, popupAddPhoto, formAddCard} from '../utils/const'
import { FormValidator } from '../components/FormValidator';
import { Card } from '../components/Card';
import { Section } from '../components/Section'
import { PopupWithImage } from '../components/PopupWithImage'
import { PopupWithForm } from '../components/PopupWithForm'
import { UserInfo } from '../components/UserInfo'
import { api } from '../components/Api';




let userId

api.getProfile()
  .then(res => {
    console.log(res)
    userInfo.setUserInfo(res.name, res.about, res.avatar)
    userId = res._id
  })


 
api.getCards()
  .then(cardList => {
  cardList.forEach(data => {
    const card = createCard({
      name: data.name,
      link: data.link,
      likes: data.likes,
      id: data._id,
      userId: userId,
      ownerId: data.owner._id
    });
    section.addItem(card)
})
})




const handleCardFormSubmit = (data) => {
  addCardPopup.setButtonText('Создание...')
  api.addCard(data['place-name'], data.link)
  .then(res=> {
    const card = createCard({
      name: res.name,
      link: res.link,
      likes: res.likes,
      id: res._id,
      userId: userId,
      ownerId: res.owner._id
    })
  
  section.addItem(card)
  cardValidatore.toggleButtonState()
  addCardPopup.close()
})
};

const submitEditForm = (data) => { 
  const { name, info, avatar} = data
  editProfilePopup.setButtonText('Сохранение...')
  api.editProfile(name, info, avatar)
  .then(() => {
    userInfo.setUserInfo(name, info, avatar)
  })
  
  profileValidator.toggleButtonState()
  editProfilePopup.close();

}

const submitAvatarForm = (avatar) => { 
  avatarPopup.setButtonText('Сохранение...')
  api.editAvatar(avatar)
  .then(res => {
    console.log(res)
    userInfo.setAvatar(res.avatar)
  })
  avatarValidatore.toggleButtonState()
  
   avatarPopup.close();

}



const createCard = (data) => {
  const card = new Card(
    data, 
    '.template', 
    () => {
    imagePopup.open(data.name, data.link)
  },
    (id) => {
      confirmPopup.open()
      confirmPopup.changeSubmitHandler(() => 
      api.deleteCard(id)
        .then(res => {
          card.deleteThisCard(res)
          confirmPopup.close()
        })
      )},
      (id) => {
        if(card.isLiked()) {
          api.deleteLike(id)
          .then(res => {
            card.setLikes(res.likes)
          })
        } else {  api.addLike(id)
          .then(res => {
            card.setLikes(res.likes)
          })}
      
      }
  )
  return card.getCardElement();
};


function renderCard(data) {
  const card = createCard(data)
  section.addItem(card)}




const avatarForm = popupAvatar.querySelector('.popup__form')
const CardForm = popupAddPhoto.querySelector('.popup__form')
const editForm = popupEditProfile.querySelector('.popup__form')



const profileValidator = new FormValidator(config, editForm);
const cardValidatore = new FormValidator(config, CardForm);
const avatarValidatore = new FormValidator(config, avatarForm)

profileValidator.enableValidation()
cardValidatore.enableValidation()
avatarValidatore.enableValidation()


formAddCard.addEventListener('submit', handleCardFormSubmit)


userEditButton.addEventListener('click', () => {
  const data = userInfo.getUserInfo()
  nameField.value = data.name
  infoField.value = data.job

  editProfilePopup.open()

});

userEditAvatar.addEventListener('click', function () { avatarPopup.open() })


photoAddButton.addEventListener('click', function () { addCardPopup.open() });





const section = new Section ({ items: [], renderer: renderCard}, '.user-gallery__items')
const imagePopup = new PopupWithImage('.popup_full-size-photo')
const addCardPopup = new PopupWithForm('.popup_add-card', handleCardFormSubmit)
const editProfilePopup = new PopupWithForm('.popup_edit-profile', submitEditForm)
const confirmPopup = new PopupWithForm('.popup_delete-confirm')
const avatarPopup = new PopupWithForm('.popup_edit-avatar', submitAvatarForm)



confirmPopup.setEventListeners()
imagePopup.setEventListeners()
addCardPopup.setEventListeners()
editProfilePopup.setEventListeners()
avatarPopup.setEventListeners()


section.rendderItems()

const userInfo = new UserInfo ({ profileNameSelector: '.user__name', profileJobSelectore: '.user__info', profileAvatar: '.user__image'})