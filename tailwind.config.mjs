import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'rdm-orange': '#FF6A00',
        'rdm-orange-soft': '#FFF2E8',
        'rdm-orange-mid': '#FF8C38',
        'rdm-black': '#0A0A0A',
        'rdm-gray': '#6B6B6B',
        'rdm-bg': '#F6F6F4',
        'rdm-border': 'rgba(0,0,0,0.08)',
      },
      fontFamily: {
        sans: [
          '"Inter"',
          '"Inter Tight"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'headline': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'title': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 8px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.1)',
        'glass': '0 8px 32px rgba(0,0,0,0.08)',
      },
      backdropBlur: {
        'glass': '20px',
      },
      typography: (theme) => ({
        rdm: {
          css: {
            '--tw-prose-body': theme('colors.rdm-black'),
            '--tw-prose-headings': theme('colors.rdm-black'),
            '--tw-prose-links': theme('colors.rdm-orange'),
            '--tw-prose-bold': theme('colors.rdm-black'),
            '--tw-prose-counters': theme('colors.rdm-gray'),
            '--tw-prose-bullets': theme('colors.rdm-orange'),
            '--tw-prose-hr': theme('colors.rdm-border'),
            '--tw-prose-quotes': theme('colors.rdm-black'),
            '--tw-prose-quote-borders': theme('colors.rdm-orange'),
            '--tw-prose-code': theme('colors.rdm-black'),
            maxWidth: 'none',
            fontSize: '1.0625rem',
            lineHeight: '1.75',
            'h2': {
              fontWeight: '700',
              letterSpacing: '-0.02em',
              marginTop: '2.5em',
              marginBottom: '0.75em',
            },
            'h3': {
              fontWeight: '600',
              letterSpacing: '-0.01em',
              marginTop: '2em',
              marginBottom: '0.5em',
            },
            'p': {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            'blockquote': {
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '1.125rem',
              borderLeftWidth: '3px',
              borderLeftColor: theme('colors.rdm-orange'),
              paddingLeft: '1.5rem',
              color: theme('colors.rdm-black'),
            },
            'a': {
              textDecoration: 'underline',
              textDecorationColor: theme('colors.rdm-orange'),
              textUnderlineOffset: '3px',
              fontWeight: '500',
            },
          },
        },
      }),
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
};
