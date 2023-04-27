import { todoList } from '../recoil/store';
import { setTodosInLocal } from '../utils/todos';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import { useRecoilState } from 'recoil';

export default function Todos() {
  const [todos, setTodos] = useRecoilState(todoList);

  const handleTodoCheck = (id: string) => {
    const changed = todos.map((todo) => {
      return todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo;
    });
    setTodos(changed);
    setTodosInLocal(changed);
  };
  const handleTodoDelete = (id: string) => {
    const deleted = todos.filter((todo) => todo.id !== id);
    setTodos(deleted);
    setTodosInLocal(deleted);
  };

  return (
    <>
      <ul>
        {moktodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCheck={handleTodoCheck}
            onDelete={handleTodoDelete}
          />
        ))}
      </ul>
      <AddTodo />
    </>
  );
}

const moktodos = [
  {
    id: '123',
    text: 'test',
    isComplete: false,
  },
  {
    id: '124',
    text: 'test2',
    isComplete: false,
  },
  {
    id: '125',
    text: 'test3',
    isComplete: false,
  },
];
