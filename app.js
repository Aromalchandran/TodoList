let todoButton = document.getElementById("add-btn");
let todoInput = document.getElementById("todo-input");
let todoItems = document.getElementById("todo-items-list");
let inputData;

function setLocalStorage() {
  localStorage.setItem("todoInput", inputData);
}

function getLocalStorage() {
  if (localStorage.getItem("todoInput")) {
    inputData = localStorage.getItem("todoInput");
    buildUI();
  } else {
    console.log("no found");
  }
}

function buildUI() {
  let list = document.createElement("li");
  let spanel = document.createElement("span");
  list.appendChild(spanel);
  spanel.innerText = inputData;

  list.style.cssText = "animation-name: slideIn;";
  todoItems.appendChild(list);
  todoInput.value = "";
  todoInput.focus();
  console.log(inputData);
  // create delet btn
  let trashBtn = document.createElement("i");
  console.log(trashBtn);
  trashBtn.classList.add("fas", "fa-trash");
  list.appendChild(trashBtn);
  // create edit btn
  let editBtn = document.createElement("i");
  editBtn.classList.add("fas", "fa-edit");
  list.appendChild(editBtn);
}

function addatodoItems(event) {
  inputData = todoInput.value;
  setLocalStorage();
  getLocalStorage();
}

function delectItems(event) {
  if (event.target.classList[1] === "fa-trash") {
    let items = event.target.parentElement;
    items.classList.add("slideOut");
    items.addEventListener("transitionend", function () {
      items.remove();
    });
    //
  }
}

// edit kitchen item

function edittodoItems(event) {
  if (event.target.classList[1] == "fa-edit") {
    let editvalue = prompt("please add new text");
    let items = event.target.parentElement;
    let spanel = items.querySelector("span");
    spanel.innerText = editvalue;
  }
}

todoButton.addEventListener("click", addatodoItems);
todoItems.addEventListener("click", delectItems);
// edit
todoItems.addEventListener("click", edittodoItems);
//if(event.target.classList[0] === "fas"){
//let items = event.target.parentElement;
//items.remove();
//}

// local storage;
//localStorage.setItem("name","Todo")

getLocalStorage();
