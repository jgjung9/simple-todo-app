import { Todo } from '../recoil/store';

export function getTodosInLocal(): Todo[] {
  const todos = localStorage.todos;
  return todos ? JSON.parse(todos) : [];
}

export function setTodosInLocal(todos: Todo[]) {
  localStorage.setItem('todos', JSON.stringify(todos));
}
