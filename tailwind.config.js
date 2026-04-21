/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // === web02style2 (Porter AI Studio - 山林自然風) ===
        primary: {
          DEFAULT: '#386641',
          dark: '#2d5234',
          light: '#4a8555',
        },
        secondary: {
          DEFAULT: '#F2E8C9',
        },
        accent: {
          DEFAULT: '#A77A50',
        },
        'text-dark': '#1E212D',
        'text-light': '#FFFFFF',

        // === web02 (Antigravity v1 - 深色科技風) ===
        'primary-dark': '#0a0e1a',
        'secondary-dark': '#151923',
        'accent-cyan': '#00d9ff',
        'accent-amber': '#ffb800',
        'accent-emerald': '#00ff9d',
        'steel-gray': '#8892a6',
        'soft-white': '#f0f4f8',
      },
      fontFamily: {
        // web02style2 / web01
        heading: ['Lora', 'Noto Serif TC', 'serif'],
        body: ['Inter', 'Noto Sans TC', 'sans-serif'],
        // web02
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        noto: ['Noto Sans TC', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        'gradient-x': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
