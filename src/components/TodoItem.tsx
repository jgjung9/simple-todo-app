import { Todo } from '../recoil/store';
import { BsTrashFill } from 'react-icons/bs';

interface TodoProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
}

export default function TodoItem({ todo, onDelete, onCheck }: TodoProps) {
  return (
    <ul>
      <input
        type='checkbox'
        name='todo'
        id={todo.id}
        checked={todo.isComplete}
        onChange={() => onCheck(todo.id)}
      />
      <label htmlFor={todo.id}>{todo.text}</label>
      <button onClick={() => onDelete(todo.id)}>
        <BsTrashFill />
      </button>
    </ul>
  );
}
