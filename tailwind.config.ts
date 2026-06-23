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
        eyebrow: ['13px', { lineHeight: '1.35', letterSpacing: '0', fontWeight: '500' }],
        body: ['16px', { lineHeight: '1.65', fontWeight: '400' }],
        deck: ['16px', { lineHeight: '1.55', fontWeight: '400' }],
        'essay-title': ['24px', { lineHeight: '1.22', letterSpacing: '0', fontWeight: '500' }],
        section: ['clamp(36px, 4vw, 64px)', { lineHeight: '1.02', letterSpacing: '0', fontWeight: '500' }],
        page: ['clamp(48px, 5vw, 80px)', { lineHeight: '1.02', letterSpacing: '0', fontWeight: '500' }],
        hero: ['clamp(52px, 6vw, 88px)', { lineHeight: '1.02', letterSpacing: '0', fontWeight: '500' }],
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
