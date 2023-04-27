import AddTodo from './AddTodo';
import Todo from './Todo';

export default function Todos() {
  return (
    <>
      <ul>
        <Todo />
      </ul>
      <AddTodo />
    </>
  );
}
