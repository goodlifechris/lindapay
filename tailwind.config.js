// tailwind.config.js
// eslint-disable-next-line @typescript-eslint/no-require-imports
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =withMT({ 
    darkMode: 'class',
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
       './node_modules/@material-tailwind/html/**/*.{js,jsx,ts,tsx}'
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
);