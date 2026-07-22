import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F2F0E9',
        ink: '#14140E',
        olive: '#5C6842',
        sage: {
          DEFAULT: '#9AA47D',
          soft: '#C8CDB8',
        },
        walnut: '#7A5230',
      },
      fontFamily: {
        display: ['Cabinet Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Switzer', '-apple-system', 'sans-serif'],
        handwriting: ['var(--font-caveat)', 'cursive', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      boxShadow: {
        warm: '0 10px 30px -10px rgba(20, 20, 14, 0.07)',
        'warm-hover': '0 20px 40px -15px rgba(20, 20, 14, 0.12)',
        glow: '0 0 25px rgba(92, 104, 66, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
