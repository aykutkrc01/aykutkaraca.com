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
        'cat-ink': 'var(--color-cat-ink)',
        'cat-terra': 'var(--color-cat-terra)',
        'cat-sage': 'var(--color-cat-sage)',
        'cat-marigold': 'var(--color-cat-marigold)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Source Serif 4', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['11px', { lineHeight: '1.2', letterSpacing: '0.14em', fontWeight: '600' }],
        body: ['16px', { lineHeight: '1.65', fontWeight: '400' }],
        deck: ['16px', { lineHeight: '1.55', fontWeight: '400' }],
        'essay-title': ['22px', { lineHeight: '1.28', letterSpacing: '-0.005em', fontWeight: '500' }],
        section: ['28px', { lineHeight: '1.20', letterSpacing: '-0.012em', fontWeight: '500' }],
        page: ['40px', { lineHeight: '1.14', letterSpacing: '-0.018em', fontWeight: '400' }],
        hero: ['52px', { lineHeight: '1.10', letterSpacing: '-0.022em', fontWeight: '400' }],
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
