// tailwind.config.js
module.exports = {
    darkMode: 'class',
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#e6a54a',
            dark: '#e6a54a',
          },
          background: {
            light: '#e6a54a',
            dark: '#e6a54a',
          },
          text: {
            light: '#e6a54a',
            dark: '#e6a54a',
          },
          accent: {
            light: '#e6a54a',
            dark: '#e6a54a',
          },
        },
      },
    },
    plugins: [],
  }