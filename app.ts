interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const resultHTML = document.querySelector('#result');
function getTodos() : Promise<Todo[]> {
  return fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(response => {
   return response as Todo[];
  })
}


getTodos()
  .then(todos => {
    console.log(todos);
    resultHTML.innerHTML = todos.map(todo => `
    <div>
      <p>${todo.id} &nbsp; ${todo.title} : ${todo.completed}</p>
    </div>`).join('')
  })