/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}','./app/**/*.{js,ts,jsx,tsx,mdx}','./lib/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: ['bg-blue-100','text-blue-600','bg-green-100','text-green-600','bg-purple-100','text-purple-600','bg-yellow-100','text-yellow-600','bg-red-100','text-red-600','bg-indigo-100','text-indigo-600','bg-amber-100','text-amber-600'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-opensans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary': {
          '50': '#eff6ff',
          '100': '#dbeafe',
          '200': '#bfdbfe',
          '300': '#93c5fd',
          '400': '#60a5fa',
          '500': '#3b82f6',
          '600': '#2563eb',
          '700': '#1d4ed8',
          '800': '#1e40af',
          '900': '#1e3a8a',
          '950': '#172554'
},
        'accent': {
          '50': '#f0fdfa',
          '100': '#ccfbf1',
          '200': '#99f6e4',
          '300': '#5eead4',
          '400': '#2dd4bf',
          '500': '#14b8a6',
          '600': '#0d9488',
          '700': '#0f766e',
          '800': '#115e59',
          '900': '#134e4a',
          '950': '#042f2e'
},
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
