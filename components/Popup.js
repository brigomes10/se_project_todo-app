class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      console.log("escape key was pressed");
      // Todo- Call the close method
    }
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keyup", this._handleEscapeClose);
  }

  setEventListeners() {
    // This one listener will handle the close button and the modal listener

    // this._popupCloseBtn.addEventListener("click", () => {
    //this.close();
    //});
    this._popupElement.addEventListener("mousedown", (evt) => {});
    // if the event target's classList contains "popup__close" or "popup" use if statement
    // if (X || Y) {}
    // then close the modal
  }
}

export default Popup;
