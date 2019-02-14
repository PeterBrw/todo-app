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

let left = 0

todos.forEach(function(todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
  if(todo.completed === false) {
    left++;
  }
})

const todosLeft = document.createElement('h2')
todosLeft.textContent = `You have ${left} todos left`
document.querySelector('body').appendChild(todosLeft)

document.querySelector('#btn').addEventListener('click', function() {
  console.log(`I'm adding a new todo`)
})

document.querySelector('#add-todo').addEventListener('input', function(e) {
  console.log(e.target.value)
})
