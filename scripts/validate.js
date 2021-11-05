function enableValidation(validationConfig) {
  const forms = [...document.querySelectorAll(validationConfig.formSelector)]
  forms.forEach((form) => setFormListeners(form, validationConfig))
}

function setFormListeners(form, config) {
  form.addEventListener('submit', handleSubmit)
  form.addEventListener('input', () => setSubmitBtState(form, config));

  const inputs = [...form.querySelectorAll(config.inputSelector)]

  inputs.forEach(inputElement => {
    inputElement.addEventListener('input',
      () => handleFieldValidation(inputElement, form, config))

  })

  setSubmitBtState(form, config)


}

function setSubmitBtState(form, config) {
  const button = form.querySelector(config.submitBtSelector);

  button.disabled = !form.checkValidity();
  button.classList.toggle(config.submitBtError, !form.checkValidity());
}

function handleSubmit(event) {
  event.preventDefault()
}

function handleFieldValidation(input, form, config) {
  if (!input.validity.valid) {
    showError(input, form, config)

  }
  else {
    hideError(input, form, config)
  }
}

function showError(input, form, config) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.add(config.inputErrorClass);

  errorElement.textContent = input.validationMessage;

}

function hideError(input, form, config) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(config.inputErrorClass);

  errorElement.textContent = '';
}
