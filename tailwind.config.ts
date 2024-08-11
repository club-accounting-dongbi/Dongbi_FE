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
        primary: '#FF7D45',
        white: '#FFFFFF',
        black: '#000000',
        'custom-orange': '#FF7D45',
        'custom-shadow': '#FFEBE2',
        'custom-border': '#FFEBE2',
        'custom-shadow-light': '#FFF7E0',
      },
      fontSize: {
        11: '11px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
      },
      borderRadius: {
        'rounded-[6.25px]': '6.25px',
        'rounded-[20px]': '20px',
      },
      lineHeight: {
        120: '1.2',
        130: '1.3',
        140: '1.4',
        150: '1.5',
      },
      boxShadow: {
        'custom-shadow':
          '0 4px 6px -1px rgba(255, 123, 69, 0.1), 0 2px 4px -1px rgba(255, 123, 69, 0.06)',
        'custom-shadow-light':
          '0 4px 6px -1px rgba(255, 247, 224, 0.1), 0 2px 4px -1px rgba(255, 247, 224, 0.06)',
      },
      backgroundImage: {
        'square-check-yes': "url('/icon/icon_square_check_Y.svg')",
        'square-check-no': "url('/icon/icon_square_check_N.svg')",
        'circle-check-yes': "url('@/public/icon/icon_square_check_Y.svg')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const centerUtilities = {
        '.absolute-center': {
          '@apply absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2':
            {},
        },
        '.flex-center': {
          '@apply flex justify-center items-center': {},
        },
      };
      const typoUtilities = {
        '.typo-heading-20-semibold': {
          'font-size': '20px',
          'font-weight': 600,
          'line-height': '150%',
          'letter-spacing': '-0.02em',
        },
      };
      addUtilities({ ...typoUtilities, ...centerUtilities });
    },
  ],
};

export default config;
