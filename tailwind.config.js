/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sage': '#9CAF88',
        'sage-dark': '#7A8F6A',
        'terracotta': '#C97D60',
        'terracotta-dark': '#A85D45',
        'cream': '#F5F1E8',
        'olive': '#6B7F5A',
        'earth': '#8B7355',
        'warm-gray': '#6B6B6B',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

