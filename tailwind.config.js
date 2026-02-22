/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#0F172A',
        accent: '#38BDF8',
        'bg-light': '#F8FAFC',
        'bg-dark': '#020617',
        'card-glass': 'rgba(255,255,255,0.08)',
        'border-subtle': 'rgba(255,255,255,0.12)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        'section': '96px',
        'section-mobile': '64px',
        'card': '24px',
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
        'image': '20px',
      },
      maxWidth: {
        'container': '1100px',
        'paragraph': '650px',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
