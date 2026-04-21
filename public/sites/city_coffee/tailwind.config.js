/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // 主色調：咖啡棕色系
        primary: {
          DEFAULT: '#6F4E37',
          light: '#8B6F47',
          dark: '#4A3326',
        },
        // 次要色：奶油與暖色調
        secondary: {
          DEFAULT: '#F5E6D3',
          cream: '#F8F4ED',
        },
        accent: {
          DEFAULT: '#D4A574',
          pink: '#E8B4B8',
        },
        // 背景色
        bg: {
          primary: '#FFFBF5',
          secondary: '#F8F4ED',
        },
        // 文字色
        text: {
          primary: '#2C2416',
          secondary: '#5C4A3A',
          muted: '#8B7355',
        },
        // 邊框
        border: {
          DEFAULT: '#E8DCC8',
        },
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.875rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.5rem', { lineHeight: '1.5', fontWeight: '600' }],
        'h5': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
        'h6': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.75', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '300' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(111, 78, 55, 0.1), 0 4px 6px -2px rgba(111, 78, 55, 0.05)',
        'soft-lg': '0 10px 40px -10px rgba(111, 78, 55, 0.15), 0 4px 6px -2px rgba(111, 78, 55, 0.05)',
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #FFFBF5 0%, #F5E6D3 100%)',
        'coffee-gradient': 'linear-gradient(135deg, #6F4E37 0%, #8B6F47 100%)',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
