import { useState } from 'react';

interface AddTodoProps {
  onAdd: (text: string) => void;
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoText = text.trim();
    if (todoText) {
      onAdd(todoText);
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        placeholder='Add...'
        onChange={handleTextChange}
      />
      <button type='submit'>Add</button>
    </form>
  );
}
