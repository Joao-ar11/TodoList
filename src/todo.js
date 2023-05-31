const Todo = (() => {
  const _projects = {
    default: {
      description: 'Default Project',
      todos: [],
    },
  };

  function createProject(name, description) {
    _projects[name] = {
      description,
      todos: [],
    };
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
    _projects[project].todos.push(todo);
  }

  function getTodos(project) {
    return _projects[project].todos;
  }

  function checkTodo(project, index) {
    const todo = _projects[project].todos[index];
    todo.check = !todo.check;
  }

  function deleteTodo(project, index) {
    _projects[project].todos.splice(index, 1);
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
