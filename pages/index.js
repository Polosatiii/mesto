let like = document.querySelectorAll('.user-gallery__like-b');

const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.user__add-info');
const form = document.querySelector('.popup__form');

const nameField = document.querySelector('.popup__user-name')
const infoField = document.querySelector('.popup__user-info')

const userName = document.querySelector('.user__name')
const userInfo = document.querySelector('.user__info')




function openPopup() {
  popup.classList.add('popup_isOpen')
}

function closePopup() {
  popup.classList.remove('popup_isOpen')
}


editButton.addEventListener('click', openPopup)

popupCloseButton.addEventListener('click', closePopup)

function popupClickHandler(event) {

  if (event.target.classList.contains('popup')) {
    closePopup()
  }
}

popup.addEventListener('mouseup', popupClickHandler)

function submitForm(event) {
  event.preventDefault()

  userName.textContent = nameField.value;
  userInfo.textContent = infoField.value;

  closePopup();
}




form.addEventListener('submit', submitForm)




