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
        serif: ['var(--font-serif)', 'Source Serif 4', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Disiplinli ölçek
        caption: ['12px', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '400' }],
        body: ['16px', { lineHeight: '1.65', fontWeight: '400' }],
        deck: ['20px', { lineHeight: '1.55', fontWeight: '400' }],
        'essay-title': ['24px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '400' }],
        section: ['clamp(32px, 3.6vw, 56px)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '300' }],
        page: ['clamp(40px, 4.4vw, 64px)', { lineHeight: '1.04', letterSpacing: '-0.02em', fontWeight: '300' }],
        display: ['clamp(40px, 4.6vw, 72px)', { lineHeight: '1.04', letterSpacing: '-0.02em', fontWeight: '300' }],
        hero: ['clamp(48px, 6vw, 88px)', { lineHeight: '1.02', letterSpacing: '-0.025em', fontWeight: '300' }],
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
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      transitionDuration: {
        DEFAULT: '320ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
