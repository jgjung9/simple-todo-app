import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { darkModeState } from '../recoil/store';
import { setColorTheme } from '../utils/darkMode';

export default function Header() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    setColorTheme(!darkMode);
  };
  return (
    <header>
      <button onClick={handleDarkMode}>
        {!darkMode && BsSunFill}
        {darkMode && BsMoonFill}
      </button>
      <section>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </section>
    </header>
  );
}
