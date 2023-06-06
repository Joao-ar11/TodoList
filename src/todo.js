const Todo = (() => {
  const _projects = {
    default: [
      {
        name: 'default',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde eius totam architecto ex quas vitae animi nam, omnis eum vero cum libero earum laudantium exercitationem temporibus consectetur nobis. Laudantium, totam.',
        dueDate: '2023-06-04',
        priority: 'low',
        notes: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam alias tempora modi!',
      },
    ],
  };

  function createProject(name) {
    _projects[name] = [];
  }

  function getProjectNames() {
    return Object.keys(_projects);
  }

  function deleteProject(project) {
    delete _projects[project];
  }

  function _createTodo(name, description, dueDate, priority, notes) {
    return {
      name,
      description,
      dueDate,
      priority,
      notes,
      check: false,
    };
  }

  function addTodo(project, name, description, dueDate, priority, notes) {
    const todo = _createTodo(name, description, dueDate, priority, notes);
    _projects[project].push(todo);
  }

  function getTodos(project) {
    return _projects[project];
  }

  function checkTodo(project, index) {
    const todo = _projects[project][index];
    todo.check = !todo.check;
  }

  function deleteTodo(project, index) {
    _projects[project].splice(index, 1);
  }

  return {
    createProject,
    getProjectNames,
    deleteProject,
    addTodo,
    getTodos,
    checkTodo,
    deleteTodo,
  };
})();

export default Todo;
