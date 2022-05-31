


import './styles.css';
import { TodoList } from './classes/index.js';
import { Todo } from './classes/index.js';
import { crearTodoHtml } from './js/componentes.js';


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));




