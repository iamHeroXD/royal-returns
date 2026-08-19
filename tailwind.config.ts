import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071A33',
          900: '#0B2342',
          850: '#0F2C54',
          800: '#143666',
          700: '#1B457D',
        },
        royal: {
          50: '#F0F5FA',
          100: '#E1EDF7',
          500: '#155FA8',
          600: '#124B8C',
          700: '#0F3C70',
          800: '#0C2D54',
        },
        gold: {
          400: '#DFB738',
          500: '#C9A227',
          600: '#A6841C',
        },
        warmBg: '#FAFAF8',
        softBg: '#F4F6F8',
        charcoal: '#071A33',
        muted: '#64748B',
        editorialBorder: '#E2E8F0',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(7, 26, 51, 0.05)',
        'elevated': '0 12px 30px -4px rgba(7, 26, 51, 0.08)',
      },
    },
  },
  plugins: [],
};
export default config;
