import { BsSunFill, BsMoonFill } from 'react-icons/bs';

export default function Header() {
  const darkMode = false;

  return (
    <header>
      {!darkMode && BsSunFill}
      {darkMode && BsMoonFill}
      <section>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </section>
    </header>
  );
}
