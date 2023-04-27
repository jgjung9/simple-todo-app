import { atom, selector } from 'recoil';

export const darkModeState = atom({
  key: 'darkMode',
  default: false,
});
