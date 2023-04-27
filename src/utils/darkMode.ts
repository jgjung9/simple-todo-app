export function getInitialDarkMode() {
  const theme = localStorage.theme;
  if (theme) {
    return theme === 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark').matches;
}

export function setColorTheme(darkMode: boolean) {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}
