import './style.css';
import Todo from './todo';

const Dom = (() => {
  const _projectSelectArray = Todo.getProjectNames().map((e, i) => i === 0);

  function _createProjectLi(name, index) {
    const li = document.createElement('li');
    li.classList.add('project');
    li.addEventListener('click', () => {
      document.querySelectorAll('.project').forEach((e) => { e.classList.remove('selected'); });
      li.classList.add('selected');
      _projectSelectArray.forEach((e, i, a) => { a[i] = i === index; });
      Dom.reloadTodoList(name);
    });

    const p = document.createElement('p');
    p.textContent = name;
    li.appendChild(p);

    const button = document.createElement('button');
    button.classList.add('project-delete');
    button.textContent = 'X';
    button.addEventListener('click', (ev) => {
      ev.stopPropagation();
      if (li.classList.contains('selected') && _projectSelectArray.length > 1) {
        if (index === 0) {
          _projectSelectArray[index + 1] = true;
        } else {
          _projectSelectArray[index - 1] = true;
        }
      }
      _projectSelectArray.splice(index, 1);
      Todo.deleteProject(name);
      Dom.reloadProjectList();
      if (_projectSelectArray.length > 0) {
        Dom.reloadTodoList(document.querySelector('.selected p').textContent);
      } else {
        Dom.reloadTodoList('');
      }
    });
    li.appendChild(button);

    return li;
  }

  function _createTodoLi(todo, project, index) {
    const li = document.createElement('li');
    li.classList.add('todo');

    const checkButton = document.createElement('button');
    checkButton.classList.add('check');
    checkButton.classList.add(todo.check ? 'checked' : 'unchecked');
    if (todo.check) checkButton.textContent = '\uD83D';
    checkButton.addEventListener('click', (e) => {
      e.stopPropagation();
      Todo.checkTodo(project, index);
      checkButton.classList.toggle('checked');
      checkButton.classList.toggle('unchecked');
      checkButton.textContent = checkButton.textContent === '' ? '\u2713' : '';
    });
    li.appendChild(checkButton);

    const todoName = document.createElement('p');
    todoName.classList.add('todo-name');
    todoName.textContent = todo.name;
    li.appendChild(todoName);

    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('priority-container');
    const p = document.createElement('p');
    p.textContent = 'Priority: ';
    priorityContainer.appendChild(p);
    const priority = document.createElement('div');
    priority.classList.add('priority');
    priority.classList.add(todo.priority);
    priorityContainer.appendChild(priority);
    li.appendChild(priorityContainer);

    const dueDate = document.createElement('input');
    dueDate.classList.add('date');
    dueDate.type = 'date';
    dueDate.readOnly = true;
    dueDate.value = todo.dueDate;
    li.appendChild(dueDate);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('todo-delete');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation();
      Todo.deleteTodo(project, index);
      Dom.reloadTodoList();
    });
    li.appendChild(deleteButton);

    const description = document.createElement('div');
    description.classList.add('description');
    description.classList.add('hide');
    const descriptionTitle = document.createElement('p');
    descriptionTitle.textContent = 'Description:';
    description.appendChild(descriptionTitle);
    const descriptionText = document.createElement('p');
    descriptionText.textContent = todo.description;
    description.appendChild(descriptionText);
    li.appendChild(description);

    const notes = document.createElement('div');
    notes.classList.add('notes');
    notes.classList.add('hide');
    const notesTitle = document.createElement('p');
    notesTitle.textContent = 'Notes:';
    notes.appendChild(notesTitle);
    const notesText = document.createElement('p');
    notesText.textContent = todo.notes;
    notes.appendChild(notesText);
    li.appendChild(notes);

    li.addEventListener('click', () => {
      description.classList.toggle('hide');
      notes.classList.toggle('hide');
    });

    return li;
  }

  function reloadProjectList() {
    const projectList = document.querySelector('.project-list');
    projectList.textContent = '';
    const projectNames = Todo.getProjectNames();
    if (projectNames.length > _projectSelectArray.length) {
      _projectSelectArray.push(true);
      _projectSelectArray.forEach((e, i, a) => { a[i] = i === projectNames.length - 1; });
    }
    for (let i = 0; i < projectNames.length; i++) {
      const li = _createProjectLi(projectNames[i], i);
      if (_projectSelectArray[i]) {
        li.classList.add('selected');
      }
      projectList.appendChild(li);
    }
  }

  function closeModal() {
    document.querySelector('.modal-container').style.display = 'none';
    document.querySelectorAll('.modal').forEach((n) => { n.style.display = 'none'; });
  }

  function reloadTodoList(project) {
    document.querySelector('.current-project-name').textContent = project;
    const todoListElement = document.querySelector('.todo-list');
    todoListElement.textContent = '';
    const todoList = Todo.getProjectNames().includes(project) ? Todo.getTodos(project) : [];
    for (let i = 0; i < todoList.length; i++) {
      const li = _createTodoLi(todoList[i], project, i);
      todoListElement.appendChild(li);
    }
  }

  return { reloadProjectList, reloadTodoList, closeModal };
})();

Dom.reloadProjectList();
Dom.reloadTodoList(document.querySelector('.selected p').textContent);

document.querySelector('.new-project').addEventListener('click', () => {
  document.querySelector('.modal-container').style.display = 'flex';
  document.querySelector('.form-project').style.display = 'flex';
  document.querySelector('#project-name').focus();
});

document.querySelector('.add-todo').addEventListener('click', () => {
  document.querySelector('.modal-container').style.display = 'flex';
  document.querySelector('.form-todo').style.display = 'flex';
  document.querySelector('#todo-name').focus();
});

document.querySelectorAll('.cancel').forEach((e) => e.addEventListener('click', Dom.closeModal));

document.querySelector('.form-project').addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('#project-name');
  const newName = nameInput.value;
  if (Todo.getProjectNames().includes(newName)) {
    document.querySelector('.form-project .error').style.display = 'block';
  } else {
    nameInput.value = '';
    Todo.createProject(newName);
    Dom.reloadProjectList();
    Dom.reloadTodoList(newName);
    Dom.closeModal();
  }
});
