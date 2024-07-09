/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        specific: "10px 10px 2px black",
      },
      lineHeight: {
        'extra-loose': '25px',
      },
      fontFamily: {
        myfont1: ["MyFont1", "sans-serif"],
        myfont2: ["MyFont2", "sans-serif"],
        myfont3: ["MyFont3", "sans-serif"],
        playpen: ["Playpen Sans", "sans-serif"]
      },
      scale: {
        '200': '2.0',
      },
      spacing: {
        '128': '28rem',
      }
    },
  },
  plugins: [],
};
