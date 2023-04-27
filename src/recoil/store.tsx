import { atom, selector } from 'recoil';
import { getInitialDarkMode } from '../utils/darkMode';

export const darkModeState = atom({
  key: 'darkMode',
  default: getInitialDarkMode(),
});

export const filterState = atom({
  key: 'todoFilter',
  default: 'All',
});
