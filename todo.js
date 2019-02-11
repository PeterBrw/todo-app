const todos = ['Order cat food ', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

todos.splice(2, 1)
todos.push('Buy coffee')
todos.shift()

console.log(`You have ${todos.length} todos!`)

todos.forEach(function(todo, index) {
  const num = index + 1
  console.log(`${num}. ${todo}`)
})


for(let count = 0; count < todos.length; count++) {
  const num = count + 1
  console.log(`${num}. ${todos[count]}`)
}