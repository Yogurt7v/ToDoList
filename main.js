(function () {
  function createAppTitle(title) {
    let appTitle = document.createElement("h3");
    appTitle.innerHTML = title;
    return title;
  }

  function createToDoItemForm() {
    let form = document.createElement("form");
    let input = document.createElement("input");
    let buttonWrapper = document.createElement("div");
    let button = document.createElement("button");

    form.classList.add("input-group", "mb-3");
    input.classList.add("form-control");
    input.placeholder = "Добавьте дело";
    buttonWrapper.classList.add("input-group-append");
    button.classList.add("btn", "btn-primary");
    button.textContent = "Добавить";

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  }

  function createToDOList() {
    let list = document.createElement("ul");
    list.classList.add("list-group");
    return list;
  }

  function createTodoItem(name) {
    let item = document.createElement("li");
    let buttonGrounp = document.createElement("div");
    let doneButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    item.classList.add(
      "list-group0-item",
      "d-flex",
      "justify-content-space-between",
      "align-items-center"
    );
    item.textContent = name;

    buttonGrounp.classList.add("btn-group", "btn-group-sm");
    doneButton.classList.add("btn", "btn-success");
    doneButton.textContent = "Окей";
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.textContent = "Удалить";

    buttonGrounp.append(doneButton);
    buttonGrounp.append(deleteButton);
    item.append(buttonGrounp);

    return {
      item,
      doneButton,
      deleteButton,
    };
  }

  function createTodoApp(container, title = "Список дел") {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createToDoItemForm();
    let todoList = createToDOList();
    let todoItems = [
      createTodoItem("Придти домой"),
      createTodoItem("Ботанить"),
    ];

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    todoItemForm.form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!todoItemForm.input.value) {
        return;
      }

      let todoItem = createTodoItem(todoItemForm.input.value);

      todoItem.doneButton.addEventListener("click", function () {
        todoItem.item.classList.toggle("list-group-item-success");
      });
      todoItem.deleteButton.addEventListener("click", function () {
        if (confirm("Уверен?")) {
          todoItem.item, this.remove();
        }
      });

      todoList.append(todoItem.item);
      todoItemForm.input.value = "";
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    createTodoApp(document.getElementById("my-todos"), "Мои дела");
    createTodoApp(document.getElementById("mom-todos"), "Мамины дела");
    createTodoApp(document.getElementById("dad-todos"), "Папины дела");
  });
})();
