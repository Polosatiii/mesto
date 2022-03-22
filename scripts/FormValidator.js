export class FormValidator {
    constructor(settings, form) {
        this._form = form
        this._settings = settings
        this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector))
        this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector)
    }

  _showInputError(inputElement, errorMessage) {
        const { inputErrorClass, errorClass} = this._settings

        const errorElement = this._form.querySelector(`#${inputElement.id}-error`)
        inputElement.classList.add(inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(errorClass);
   }
   _hideInputError (inputElement) {
        const { inputErrorClass, errorClass} = this._settings

        const errorElement = this._form.querySelector(`#${inputElement.id}-error`)
        inputElement.classList.remove(inputErrorClass);
        errorElement.textContent = ' ';
        errorElement.classList.remove(errorClass);

   }

   _checkInputValidity (inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      }
      else {
        this._hideInputError(inputElement);
      }
   }

   _hasInvalidInput() {
     return this._inputList.some((inputElement) => {
       return !inputElement.validity.valid;
     })
   }

   _disableSubmitButton (){
     const { inactiveButtonClass } = this._settings 

     this._buttonElement.classList.add(inactiveButtonClass);
     this._buttonElement.disabled = true;
   }

   _enableSubmitButton() {
     this._buttonElement.classList.remove(this._settings.inactiveButtonClass)
     this._buttonElement.disabled = false;
   }

   _togglebuttonState () {
     if (this._hasInvalidInput()) {
       this._disableSubmitButton();
     }

     else {
       this._enableSubmitButton();
     }
   }

   _setEventListeners() {
     this._inputList.forEach((inputElement) => {
       inputElement.addEventListener('input', () => {
         this._checkInputValidity(inputElement);
         this._togglebuttonState();
       });
     });
   }

   enableValidation() {
        this._form.addEventListener('submit', (event) => {
          event.preventDefault();
        });

        this._setEventListeners();
   }

  }

