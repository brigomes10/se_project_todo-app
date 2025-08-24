import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const handleFormSubmit = (data) => {
  const name = data.name;
  const dateInput = data.date;
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  const id = uuidv4();
  const values = { name, date, id };
  renderTodo(values);
  newTodoValidator.resetValidation();
  addTodoPopup.close();
};

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit,
});

addTodoPopup.setEventListeners();

const section = new Section({
  items: initialTodos,
  renderer: () => {
    const todo = generateTodo;
    //todosList.classList.add(".todos__list");?

    // Add to todo list
    // Refer to forEach() loop in this file
  },
  containerSelector: ".todos__list",
});

//call section Instance's renderItems method

//const openModal = (modal) => {
//modal.classList.add("popup_visible");
//newTodoValidator.resetValidation();

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();
  return todoElement;
};

function handleEscapeClose(evt) {
  if (evt.key === "Escape") {
    // Find the currently opened modal
    // And close it
  }
}

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

addTodoCloseBtn.addEventListener("click", () => {
  addTodoPopup.close();
});

function renderTodo(data) {
  const todo = generateTodo(data);
  todosList.append(todo); //use addItem method instead
}

initialTodos.forEach((item) => {
  renderTodo(item); //use addItem method instead
});

//take the initialTodo's out on line 71 and 72. 17:19 chapter 8 part 2

const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();
