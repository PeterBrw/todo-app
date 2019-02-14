const todos = [{
  text: 'Order cat food',
  completed: false
}, {
  text: 'Clean kitchen',
  completed: true
}, {
  text: 'Buy food',
  completed: true
}, {
  text: 'Do work',
  completed: false
}, {
  text: 'Exercise',
  completed: true
}]

const filters = {
  searchText: ''
}

const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  const left =  filteredTodos.filter(function(todo) {
      return !todo.completed
  })

  document.querySelector('#todos').innerHTML = ''

  const todosLeft = document.createElement('h2')
  todosLeft.textContent = `You have ${left.length} todos left`
  document.querySelector('#todos').appendChild(todosLeft);

  filteredTodos.forEach(function(todo) {
    const todoEl = document.createElement('p')
    todoEl.textContent = todo.text
    document.querySelector('#todos').appendChild(todoEl)
  })
  
}

renderTodos(todos, filters)

document.querySelector('#add-todo').addEventListener('input', function(e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})
