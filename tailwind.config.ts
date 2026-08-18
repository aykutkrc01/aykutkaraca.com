import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: 'var(--color-cream)',
        'cream-soft': 'var(--color-cream-soft)',
        'cream-dark': 'var(--color-cream-dark)',
        charcoal: 'var(--color-charcoal)',
        'warm-gray': 'var(--color-warm-gray)',
        'light-gray': 'var(--color-light-gray)',
        border: 'var(--color-border)',
        ink: 'var(--color-ink)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
      },
      maxWidth: {
        container: 'var(--container-max)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
