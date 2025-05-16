/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    "postcss-reporter": {
      clearReportedMessages: true,
    },
  },
};
export default config;