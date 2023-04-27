import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { darkModeState, filterState } from '../recoil/store';
import { setColorTheme } from '../utils/darkMode';

export default function Header() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);
  const setFilter = useSetRecoilState(filterState);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    setColorTheme(!darkMode);
  };
  const handleFilter = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName !== 'BUTTON') {
      return;
    }
    const clicked = target.textContent || 'All';
    setFilter(clicked);
  };

  return (
    <header>
      <button onClick={handleDarkMode}>
        {!darkMode && <BsSunFill />}
        {darkMode && <BsMoonFill />}
      </button>
      <section onClick={handleFilter}>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </section>
    </header>
  );
}
