class FormValidator {
  constructor(settings, formEl) {
    this._inputSelector = settings.inputSelector;
    this._formSelector = settings.formSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
    this._settings = settings;
  }

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _checkInputValidity = (formElement, inputElement, settings) => {
    if (!inputElement.validity.valid) {
      showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        settings
      );
    } else {
      hideInputError(formElement, inputElement, settings);
    }
  };

  _toggleButtonState(inputList, buttonElement, settings) {
    if (hasInvalidInput(inputList)) {
      disableSubmitBtn(buttonElement);
      disableSubmitBtn(buttonElement, settings);
    } else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(settings.inactiveButtonClass);
    }

    _setEventListeners(formElement, settings);
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    this._settings.submitButtonSelector;

    this._toggleButtonState(this._inputList, buttonElement, this._settings);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement, this._settings);
        toggleButtonState(inputList, buttonElement, this._settings);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }
}

export default FormValidator;
