const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const editButton = document.querySelector('.user__add-info');
const form = document.querySelector('.popup__form');

const nameField = document.querySelector('.popup__input_element_user-name')
const infoField = document.querySelector('.popup__input_element_user-info')

const userName = document.querySelector('.user__name')
const userInfo = document.querySelector('.user__info')




function openPopup() {
  popup.classList.add('popup_is-open');
  nameField.value = userName.textContent;
  infoField.value = userInfo.textContent;
}

function closePopup() {
  popup.classList.remove('popup_is-open');
}


editButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);


function submitForm(event) {
  event.preventDefault()

  userName.textContent = nameField.value;
  userInfo.textContent = infoField.value;

  closePopup();
}




form.addEventListener('submit', submitForm)




