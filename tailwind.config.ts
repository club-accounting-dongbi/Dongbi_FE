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
        black: '#000000',
        'custom-black': '#2E2E2E',
        'custom-red': '#F45959',
        'custom-blue': '#257CFE',
        'custom-orange': '#FF7D45',
        'custom-orange-light': '#FFCFBC',
        'custom-shadow': '#FFEBE2',
        'custom-border': '#FFEBE2',
        'custom-shadow-light': '#FFF7E0',
        'custom-gray': '#8E8E93',
        'custom-gray-2': '#AEAEB2',
        'custom-gray-4': '#D1D1D6',
        'custom-gray-5': '#E5E5EA',
        'custom-gray-6': '#F2F2F7',
      },
      fontSize: {
        11: '11px',
        12: '12px',
        14: '14px',
        15: '15px',
        16: '16px',
        17: '17px',
        18: '18px',
        20: '20px',
        24: '24px',
        40: '40px',
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
