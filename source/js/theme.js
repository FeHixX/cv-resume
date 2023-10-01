const setTheme = () => {
  if (document.querySelector('.about__toggle')) {
    const toggle = document.querySelector('.about__toggle');

    const getPreferredColorScheme = () => {
      const darkTheme = '(prefers-color-scheme: dark)';
      const current = window.matchMedia ? window.matchMedia(darkTheme) : {};

      if (current.media === darkTheme && current.matches) {
        return 'dark';
      }
      return 'light';
    };

    document.documentElement.setAttribute('data-color-scheme', getPreferredColorScheme());

    toggle.addEventListener('click', () => {
      const colorScheme = document.documentElement.getAttribute('data-color-scheme');
      const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-color-scheme', newColorScheme);
      localStorage.setItem('color-scheme', newColorScheme);
    });

    const colorScheme = localStorage.getItem('color-scheme') || getPreferredColorScheme();

    document.documentElement.setAttribute('data-color-scheme', colorScheme);
  }
  return null;
};

export {setTheme};
