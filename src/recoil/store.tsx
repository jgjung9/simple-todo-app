import { atom, selector } from 'recoil';
import { getInitialDarkMode } from '../utils/darkMode';
import { getTodosInLocal } from '../utils/todos';

export const darkModeState = atom({
  key: 'darkMode',
  default: getInitialDarkMode(),
});

export const filterState = atom({
  key: 'todoFilter',
  default: 'All',
});

export interface Todo {
  id: string;
  text: string;
  isComplete: boolean;
}

export const todoList = atom<Todo[]>({
  key: 'todoList',
  default: getTodosInLocal(),
});

export const filteredTodoList = selector<Todo[]>({
  key: 'filteredTodoList',
  get: ({ get }) => {
    const todos = get(todoList);
    const filter = get(filterState);

    switch (filter) {
      case 'All':
        return todos;
      case 'Active':
        return todos.filter((todo) => !todo.isComplete);
      case 'Completed':
        return todos.filter((todo) => todo.isComplete);
      default:
        throw new Error(`${filter} is invaild filter`);
    }
  },
});
