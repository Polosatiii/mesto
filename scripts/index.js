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



const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.user__add-info');
const form = document.querySelector('.popup__form');

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

const imageClick = document.querySelector('.user-gallery__photo');
const bigImage = document.querySelector('.popup__image');
const popupPhoto = document.querySelector('.popup_full-size-photo');
const imageCaption = document.querySelector('.popup__image-caption');
const popupCloseFull = document.querySelector('.popup__close-full');





initialCards.forEach(prependeCard);



function createCard(item) {

  const element = templateItem.querySelector('.user-gallery__item').cloneNode(true);
  element.querySelector('.user-gallery__photo-name').innerText = item.name;
  element.querySelector('.user-gallery__photo').src = item.link;


  element.querySelector('.user-gallery__like-b').addEventListener('click', (event) => {
    event.target.classList.toggle('user-gallery__like-b_active');
  });



  element.querySelector('.user-gallery__delete-button').addEventListener('click', (event) => {
    event.target.closest('.user-gallery__item').remove();
  }
  )

  element.querySelector('.user-gallery__photo').addEventListener('click', (event) => {
    popupPhoto.classList.add('popup_is-open');
    bigImage.src = event.target.src;
    imageCaption.textContent = event.target.closest('.user-gallery__item').textContent;
  })



  return element;
};

function prependeCard(item) {
  const element = createCard(item);
  listElement.prepend(element);
}

function addCard(event) {
  event.preventDefault();

  const name = inputCardName.value;
  const link = inputCardLink.value;
  const item = {
    name: name,
    link: link
  }
  prependeCard(item);

  event.target.reset();

  closePopupAdd();

}



formAddCard.addEventListener('submit', addCard)



function openPopupAdd() {
  popupAddPhoto.classList.add('popup_is-open')
}

function closePopupAdd() {
  popupAddPhoto.classList.remove('popup_is-open');
}


function openPopup() {
  popup.classList.add('popup_is-open');
  nameField.value = userName.textContent;
  infoField.value = userInfo.textContent;
}

function closePopup() {
  popup.classList.remove('popup_is-open');
}

function closeBigImage() {
  popupPhoto.classList.remove('popup_is-open');
}


editButton.addEventListener('click', openPopup);
addPhotoButton.addEventListener('click', openPopupAdd);


popupCloseButton.addEventListener('click', closePopup);
addPhotoClose.addEventListener('click', closePopupAdd);
popupCloseFull.addEventListener('click', closeBigImage);


function submitForm(event) {
  event.preventDefault()

  userName.textContent = nameField.value;
  userInfo.textContent = infoField.value;

  closePopup();
}




form.addEventListener('submit', submitForm);
