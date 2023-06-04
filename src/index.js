import './style.css';
import Todo from './todo';

const Dom = (() => {
  function _createProjectLi(name) {
    const li = document.createElement('li');
    li.classList.add('project');
    li.addEventListener('click', () => {
      document.querySelectorAll('.project').forEach((e) => { e.classList.remove('selected'); });
      li.classList.add('selected');
    });

    const p = document.createElement('p');
    p.textContent = name;
    li.appendChild(p);

    const button = document.createElement('button');
    button.classList.add('project-delete');
    button.textContent = 'X';
    button.addEventListener('click', (ev) => {
      Todo.deleteProject(p.textContent);
      Dom.reloadProjectList();
      ev.stopPropagation();
    });
    li.appendChild(button);

    return li;
  }

  function reloadProjectList(first = false) {
    const projectList = document.querySelector('.project-list');
    projectList.textContent = '';
    const projectNames = Todo.getProjectNames();
    for (let i = 0; i < projectNames.length; i++) {
      const li = _createProjectLi(projectNames[i]);
      if (first && i === 0) li.classList.add('selected');
      else if (!first && i === projectNames.length - 1) li.classList.add('selected');
      projectList.appendChild(li);
    }
  }

  function closeModal() {
    document.querySelector('.modal-container').style.display = 'none';
    document.querySelectorAll('.modal').forEach((n) => { n.style.display = 'none'; });
  }

  return { reloadProjectList, closeModal };
})();

Dom.reloadProjectList(true);

document.querySelector('.new-project').addEventListener('click', () => {
  document.querySelector('.modal-container').style.display = 'flex';
  document.querySelector('.form-project').style.display = 'flex';
});

document.querySelector('.add-todo').addEventListener('click', () => {
  document.querySelector('.modal-container').style.display = 'flex';
  document.querySelector('.form-todo').style.display = 'flex';
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
    Dom.closeModal();
  }
});
