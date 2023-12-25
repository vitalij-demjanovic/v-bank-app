import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6160DC',
        'secondary': '#00A389',
        'third': '#FF4A55',
        'blue': '#54C5EB',
        'orange': '#FFB74A',
        'primary-text': '#22242C',
        'dark-grey': '#22242C',
        'light-grey': '#F5F5F5',
      },
    },
  },
  plugins: [],
}
export default config
