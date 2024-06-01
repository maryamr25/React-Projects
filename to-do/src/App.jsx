// import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
//   const [count, setCount] = useState("")

  
  document.getElementById('todoAdd').addEventListener('click', addTodo);

function addTodo() {
	let input = document.getElementById('todoInput');
	let list = document.getElementById('todoList');
	let item = document.createElement('li');
	item.classList.add('todoItem');
	item.innerHTML = `<span class="todoText">${input.value}</span>  `;
	let deleteButton = document.createElement('span');
	deleteButton.classList.add('todoDelete');
	deleteButton.innerHTML = 'X'; 
	item.appendChild(deleteButton) ;
	list.appendChild(item);
	input.value = '';
	deleteButton.addEventListener('click', removeTodo);
}
  
function removeTodo(e) {
	let item = e.target.parentElement;
	let list = document.getElementById('todoList');
	list.removeChild(item);
}


  return (
    <>
      <div className="container">
		<h1>To-Do List</h1>
		<input type="text" id="todoInput" placeholder="Add a new task..."/>
		<button id="todoAdd">Add</button>
		<ul id="todoList">
			{/* <!-- Tasks will be added here --> */}
		</ul>
	</div>
    </>
  )
}

export default App
